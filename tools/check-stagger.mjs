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
  browser("set", "viewport", "1280", "800");
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
      const original = Element.prototype.animate;
      const calls = [];
      const created = [];
      Element.prototype.animate = function(...args) {
        calls.push(this.closest('section')?.id);
        const animation = original.apply(this, args);
        created.push(animation);
        return animation;
      };
      try {
        for (const id of ['experience', 'story', 'skills', 'contact']) {
          document.getElementById(id).scrollIntoView({behavior: 'instant'});
          await pause(1200);
        }
        const sections = new Set(calls);
        if (${reduced} ? calls.length !== 0 : ['experience', 'story', 'skills', 'contact'].some(id => !sections.has(id))) {
          throw Error('Unexpected animated sections: ' + [...sections]);
        }
        const count = calls.length;
        for (const id of ['experience', 'story', 'skills', 'contact']) {
          document.getElementById(id).scrollIntoView({behavior: 'instant'});
          await pause(100);
        }
        if (calls.length !== count) throw Error('Section replayed on repeat scroll');
        const deadline = performance.now() + 5000;
        while (created.some(animation => animation.playState !== 'idle') && performance.now() < deadline) await pause(50);
        if (created.some(animation => animation.playState !== 'idle')) throw Error('Animation cleanup failed: ' + JSON.stringify(created.filter(a=>a.playState !== 'idle').map(a=>({state:a.playState,time:a.currentTime,target:a.effect.target.tagName,section:a.effect.target.closest('section')?.id}))));
      } finally { Element.prototype.animate = original; }
    })()`,
    );
  }
  console.log(
    "Section stagger, one-shot scrolling, cleanup, and reduced motion pass.",
  );
} finally {
  browser("close");
}
