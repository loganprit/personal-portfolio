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
const anchorPosition = (id) => `(() => {
  const anchor = document.getElementById('${id}');
  if (!anchor) return false;
  const scrollPaddingTop = Number.parseFloat(
    getComputedStyle(document.documentElement).scrollPaddingTop,
  ) || 0;
  const maxScrollY = Math.max(0, document.documentElement.scrollHeight - innerHeight);
  const targetY = Math.min(
    maxScrollY,
    Math.max(0, scrollY + anchor.getBoundingClientRect().top - scrollPaddingTop),
  );
  return Math.abs(scrollY - targetY) <= 1;
})()`;
const checkSmoothAnchor = (id) => {
  const position = anchorPosition(id);
  browser(
    "eval",
    `window.__navigationSettled = ${position};
    if (!window.__navigationSettled) {
      window.addEventListener('scrollend', () => {
        window.__navigationSettled = true;
      }, { once: true });
    }`,
  );
  browser("click", `.manual-spine a[href="#${id}"]`);
  browser(
    "wait",
    "--fn",
    `${position} && location.hash === '#${id}' && window.__navigationSettled`,
  );
  checkActive(id);
};
const checkExperiencePill = (view, expectedDuration) => {
  browser(
    "wait",
    "--fn",
    `(() => {
      const selected = document.querySelector('#experience a[data-active="true"]');
      const pill = document.querySelector('#experience .experience-tabs-pill');
      if (!selected || !pill) return false;
      const selectedRect = selected.getBoundingClientRect();
      const pillRect = pill.getBoundingClientRect();
      return ['left', 'top', 'width', 'height'].every(
        edge => Math.abs(pillRect[edge] - selectedRect[edge]) <= 1,
      );
    })()`,
  );
  return browser(
    "eval",
    `
    (() => {
      const selected = document.querySelector('#experience a[data-active="true"]');
      const pill = document.querySelector('#experience .experience-tabs-pill');
      if (!selected || !pill || selected.textContent.trim().toLowerCase() !== '${view}') {
        throw new Error('Expected ${view} to be the selected experience tab');
      }

      const selectedRect = selected.getBoundingClientRect();
      const pillRect = pill.getBoundingClientRect();
      for (const edge of ['left', 'top', 'width', 'height']) {
        if (Math.abs(pillRect[edge] - selectedRect[edge]) > 1) {
          throw new Error('Active pill must match the selected tab geometry');
        }
      }

      const pillStyle = getComputedStyle(pill);
      if (Number.parseFloat(pillStyle.transitionDuration) !== ${expectedDuration}) {
        throw new Error('Unexpected active pill transition duration');
      }

      const selectedStyle = getComputedStyle(selected);
      if (
        selectedRect.width <= 0 ||
        selectedRect.height <= 0 ||
        selectedStyle.visibility === 'hidden' ||
        selectedStyle.opacity === '0' ||
        selectedStyle.color === 'rgba(0, 0, 0, 0)'
      ) {
        throw new Error('Selected experience tab must remain readable');
      }
    })()
  `,
  );
};

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
  browser("set", "media", "dark", "reduced-motion");
  browser("reload");
  browser("wait", "#experience h3");
  checkExperiencePill("work", 0);
  browser(
    "eval",
    `for (let element = document.querySelector('main'); element; element = element.parentElement) {
      const style = getComputedStyle(element);
      if (Number(style.opacity) !== 1 || style.transform !== 'none') {
        throw new Error('Reduced motion must render page content without an entrance animation');
      }
    }`,
  );
  browser("press", "Tab");
  browser(
    "eval",
    `const link = document.activeElement;
    if (link.textContent !== 'Skip to content' || link.getBoundingClientRect().top < 0) {
      throw new Error('The first Tab must reveal Skip to content');
    }`,
  );
  browser("press", "Enter");
  browser(
    "eval",
    `if (document.activeElement !== document.querySelector('main')) {
      throw new Error('Skip to content must focus main');
    }`,
  );
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
  browser("eval", "document.documentElement.style.scrollBehavior = ''");
  browser("set", "media", "dark");
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
    browser(
      "eval",
      `for (let element = document.querySelector('#experience h3'); element; element = element.parentElement) {
        const style = getComputedStyle(element);
        if (Number(style.opacity) !== 1 || style.transform !== 'none') {
          throw new Error('The selected experience must be immediately readable');
        }
      }`,
    );
    checkExperiencePill(view, 0.5);
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
  browser("open", new URL("/?experience=education", previewUrl).href);
  browser("wait", "#experience h3");
  checkExperiencePill("education", 0.5);
  for (const [width, height] of [
    [1440, 900],
    [390, 900],
  ]) {
    browser("open", new URL("/?experience=education", previewUrl).href);
    browser("wait", "#experience h3");
    browser("set", "viewport", String(width), String(height));
    browser(
      "eval",
      `if (getComputedStyle(document.documentElement).scrollBehavior !== 'smooth') {
        throw new Error('Navigation regression requires normal smooth scrolling');
      }`,
    );
    checkSmoothAnchor("skills");
    checkSmoothAnchor("skills");
    browser("eval", "window.scrollTo({ top: 0, behavior: 'instant' })");
    checkActive("hero");
    checkSmoothAnchor("skills");
    browser(
      "eval",
      "window.scrollTo({ top: Math.max(0, window.scrollY - 100), behavior: 'instant' })",
    );
    checkActive("story");
    browser(
      "eval",
      "window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' })",
    );
    checkActive("contact");
    checkSmoothAnchor("contact");
    checkSmoothAnchor("story");
    browser(
      "eval",
      "window.scrollTo({ top: Math.max(0, window.scrollY - 100), behavior: 'instant' })",
    );
    checkActive("story");
    browser(
      "eval",
      "window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' })",
    );
    checkActive("contact");
  }
  browser("set", "media", "dark", "reduced-motion");
  browser("open", new URL("/?experience=education", previewUrl).href);
  browser("wait", "#experience h3");
  checkSmoothAnchor("skills");
  browser("set", "media", "dark");
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
