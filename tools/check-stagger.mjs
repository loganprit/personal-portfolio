// With the site running: bun tools/check-stagger.mjs [URL]
import { execFileSync } from "node:child_process";

const session = `stagger-check-${process.pid}`;
const browser = (...args) =>
  execFileSync(
    "bunx",
    ["agent-browser@0.36.0", "--session", session, ...args],
    { encoding: "utf8" },
  );
const url = process.argv[2] ?? "http://100.94.230.115:3001/";

try {
  browser("set", "viewport", "1280", "600");
  browser("open", url);
  for (const reduced of [false, true]) {
    if (reduced) {
      browser("set", "media", "light", "reduced-motion");
      browser("reload");
    }
    browser("wait", "#experience .manual-experience-item");
    browser(
      "wait",
      "--fn",
      "document.querySelector('.manual-spine button')?.getAttribute('aria-label')?.startsWith('Switch to')",
    );
    browser(
      "eval",
      `(async () => {
      const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
      if (document.querySelector('.motion-prototype-panel')) throw Error('Demo remains');
      await pause(200);
      const entrances = () => document.getAnimations().filter(animation =>
        !(animation instanceof CSSAnimation) && !(animation instanceof CSSTransition) &&
        animation.effect?.target?.closest('main section'));
      const created = entrances();
      const sections = new Set(created.map(a => a.effect.target.closest('section').id));
      if (${reduced} ? created.length !== 0 : ['experience', 'story', 'skills', 'contact'].some(id => !sections.has(id))) {
        throw Error('Unexpected prepared sections: ' + [...sections]);
      }
      if (!${reduced} && created.some(a => a.playState !== 'paused')) throw Error('Offscreen animation started early');
      if (!${reduced} && getComputedStyle(document.querySelector('.manual-name')).animationName !== 'hero-stagger') throw Error('Hero must animate in CSS before hydration');
      for (const id of ['experience', 'story', 'skills', 'contact']) {
        document.getElementById(id).scrollIntoView({behavior: 'instant'});
        await pause(1400);
      }
      const deadline = performance.now() + 5000;
      while (created.some(a => a.playState !== 'idle') && performance.now() < deadline) await pause(50);
      if (created.some(a => a.playState !== 'idle')) throw Error('Animation cleanup failed');
      for (const id of ['experience', 'story', 'skills', 'contact']) {
        document.getElementById(id).scrollIntoView({behavior: 'instant'});
        await pause(100);
      }
      if (entrances().length) throw Error('Section replayed on repeat scroll');
    })()`,
    );
  }
  // Keep the reduced-motion mount while changing preference, then print.
  browser("set", "media", "light", "no-preference");
  browser(
    "eval",
    `(() => {
    window.dispatchEvent(new Event('beforeprint'));
    for (const hero of document.querySelectorAll('.manual-copy > *, .manual-portrait')) {
      if (hero.style.animationName !== 'none') throw Error('Print settling missing after motion preference change');
    }
  })()`,
  );
  browser("open", url);
  browser("eval", "window.scrollTo({top: 0, behavior: 'instant'})");
  browser("reload");
  browser(
    "wait",
    "--fn",
    "document.getAnimations().some(a => a.playState === 'paused')",
  );
  browser(
    "eval",
    `(() => {
    const heroRule = [...document.styleSheets].flatMap(sheet => [...sheet.cssRules])
      .find(rule => rule instanceof CSSMediaRule && rule.cssText.includes('hero-stagger'));
    if (!heroRule?.conditionText.includes('screen')) throw Error('Hero animation must be screen-only');
    window.dispatchEvent(new Event('beforeprint'));
    window.dispatchEvent(new Event('afterprint'));
    for (const hero of document.querySelectorAll('.manual-copy > *, .manual-portrait')) {
      if (hero.style.animationName !== 'none' || getComputedStyle(hero).opacity !== '1') throw Error('Hero must stay settled after printing');
    }
    for (const target of document.querySelectorAll('#story article, #skills li, #contact .contact-sheet > div')) {
      if (getComputedStyle(target).opacity !== '1') throw Error('Print content remains hidden');
    }
    if (document.getAnimations().some(a => a.playState === 'paused')) throw Error('Print left pending entrances');
  })()`,
  );
  console.log(
    "Section stagger, one-shot scrolling, cleanup, reduced motion, and print visibility pass.",
  );
} finally {
  browser("close");
}
