// Run with the dev server running: bun tools/check-navigation.mjs [preview URL]
import { execFileSync } from "node:child_process";

const session = `navigation-check-${process.pid}`;
const browser = (...args) =>
  execFileSync(
    "bunx",
    ["agent-browser@0.36.0", "--session", session, ...args],
    {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
const checkActive = (id) =>
  browser(
    "eval",
    `new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))).then(() => {
      const active = document.querySelector('.manual-spine [aria-current="location"]');
      if (active?.getAttribute('href') !== '#${id}') {
        throw new Error('Expected ${id}, got ' + active?.getAttribute('href'));
      }
    })`,
  );

try {
  browser("open", process.argv[2] ?? "http://100.94.230.115:3000/");
  browser("wait", "#experience h3");
  browser("eval", "document.documentElement.style.scrollBehavior = 'auto'");
  for (const [width, height] of [
    [1203, 1198],
    [320, 568],
  ]) {
    browser("set", "viewport", String(width), String(height));
    for (const id of ["contact", "skills", "story", "experience", "hero"]) {
      browser("click", `.manual-spine a[href="#${id}"]`);
      checkActive(id);
    }
    // Manual scrolling must update selection independently of the URL hash.
    browser(
      "eval",
      "window.scrollTo(0, document.documentElement.scrollHeight)",
    );
    checkActive("contact");
    browser("eval", "window.scrollTo(0, 0)");
    checkActive("hero");
  }
  console.log("Navigation selection passes on desktop and mobile.");
} finally {
  browser("close");
}
