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
  browser("open", url);
  for (const reduced of [false, true]) {
    if (reduced) {
      browser("set", "media", "light", "reduced-motion");
      browser("reload");
    }
    browser("wait", "#experience .manual-experience-item");
    browser(
      "eval",
      `(async () => {
      const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
      if (document.querySelector('.motion-prototype-panel')) throw Error('Demo remains');
      const original = Element.prototype.animate;
      const calls = [];
      Element.prototype.animate = function(...args) {
        calls.push(this.closest('section')?.id);
        return original.apply(this, args);
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
        if (document.getAnimations().length) throw Error('Animation cleanup failed');
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
