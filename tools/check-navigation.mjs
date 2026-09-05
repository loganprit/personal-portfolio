// Run with the dev server running: bun tools/check-navigation.mjs [preview URL]
import { execFileSync } from "node:child_process";

const previewUrl = process.argv[2] ?? "http://100.94.230.115:3000/";
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
  const response = await fetch(new URL("/contact", previewUrl), {
    redirect: "manual",
  });
  if (
    response.status !== 308 ||
    response.headers.get("location") !== "/#contact"
  ) {
    throw new Error(
      "Legacy contact URL must permanently redirect to /#contact",
    );
  }
  browser("open", previewUrl);
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
    if (width === 1203) {
      browser("click", '.manual-spine a[href="#story"]');
      checkActive("story");
      browser("eval", "window.scrollTo(0, Math.max(0, window.scrollY - 100))");
      browser(
        "eval",
        "window.scrollTo(0, document.documentElement.scrollHeight)",
      );
      checkActive("contact");
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
  for (const view of ["education", "work"]) {
    browser(
      "click",
      `#experience a[href="${view === "work" ? "/" : "/?experience=education"}"]`,
    );
    browser(
      "wait",
      "--fn",
      `document.querySelectorAll('#experience [aria-current="page"]').length === 1 && document.querySelector('#experience [aria-current="page"]').textContent.toLowerCase() === '${view}' && document.querySelectorAll('#experience details').length === ${view === "work" ? 3 : 0}`,
    );
  }
  browser(
    "eval",
    `
    const details = [...document.querySelectorAll('#experience details')];
    if (details.length !== 3 || details.some(element => element.open)) {
      throw new Error('Earlier roles must be available in three collapsed disclosures');
    }
    if (!document.querySelector('.manual-evidence strong') || document.querySelectorAll('.manual-evidence strong').length !== 2) {
      throw new Error('Both selected outcome metrics must be emphasized');
    }
  `,
  );
  browser(
    "eval",
    "document.querySelector('#experience details summary').focus()",
  );
  browser("press", "Space");
  browser(
    "eval",
    `
    if (!document.querySelector('#experience details').open) {
      throw new Error('Keyboard Space must expand the earlier-role disclosure');
    }
  `,
  );
  browser("press", "Space");
  browser(
    "eval",
    `
    if (document.querySelector('#experience details').open) {
      throw new Error('Keyboard Space must close the opened earlier-role disclosure');
    }
  `,
  );
  for (const [width, height] of [
    [1280, 720],
    [375, 667],
    [320, 568],
  ]) {
    browser("set", "viewport", String(width), String(height));
    browser(
      "eval",
      `
      (() => {
      window.scrollTo(0, 0);
      const actions = [...document.querySelectorAll('.manual-routes a')];
      if (actions.length !== 3 || actions.some(element => element.getBoundingClientRect().bottom > innerHeight)) {
        throw new Error('Resume, email, and GitHub must fit in the first viewport');
      }
      if (document.documentElement.scrollWidth > innerWidth) throw new Error('Horizontal overflow');
      })()
    `,
    );
  }
  browser("open", new URL("/contact", previewUrl).href);
  browser(
    "wait",
    "--fn",
    `location.pathname === '/' && location.hash === '#contact' && document.querySelector('#contact')?.getBoundingClientRect().top >= 68 && document.querySelector('#contact')?.getBoundingClientRect().top < innerHeight`,
  );
  console.log(
    "Navigation, experience disclosures, hero actions, and contact redirect pass.",
  );
} finally {
  browser("close");
}
