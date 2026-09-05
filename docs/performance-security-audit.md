# Performance and security audit

Audited September 5, 2026, against Cobalt base `5815cd7`. This application uses React 19 and TanStack Start with Vite/Nitro, not Next.js. The audit covered all application routes, shared components, theme boot code, public assets, dependency graph, and deployment configuration.

## Findings and fixes

| Finding                                                                      | Change                                                                                                                                                                             |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framer Motion shipped for a single selected-tab indicator                    | Replaced it with a CSS transform, preserving the half-second slide and immediate reduced-motion state; removed the dependency.                                                     |
| Router search copied into component state through a second subscription      | Render directly from the router selector, avoiding redundant state and subscription timing issues.                                                                                 |
| Resume proxy reflected upstream media types on a same-origin inline response | Accept only PDF/octet-stream, force PDF output, cancel rejected bodies, bound fetch time to 10 seconds, and make failures uncacheable. Removed unsupported byte-range advertising. |
| Initial theme trusted arbitrary storage values                               | Match the toggle's light/dark validation before hydration; preserve viewport setup and hydration safeguards.                                                                       |
| Theme clicks performed duplicate style writes and forced layouts             | Apply changes through the existing effect; also synchronize storage-clear events.                                                                                                  |
| Unused fonts and connection hints                                            | Removed Caveat imports/dependency, unused Geist Mono binary, obsolete Google Drive connection hints, and hidden design-description markup. Preload the active Space Grotesk font.  |
| Stale vulnerable transitive dependencies                                     | Refreshed dependencies within declared ranges; removed the obsolete optional Next.js/sharp tree. Keep exact TanStack and React pins.                                               |
| Missing baseline deployment headers                                          | Add MIME sniffing, referrer and permissions policies, plus a limited CSP preventing framing, base URL changes, and object embedding.                                               |
| PR quality checks did not run the repository validation suite                | Add Bun/Node CI for formatting, lint, types, tests, audit, and build. Use the installed React Doctor rather than downloading latest on every local invocation.                     |

## Measurements

Same production build command, same worktree, before and after:

| Metric                        |                                Before |                         After |
| ----------------------------- | ------------------------------------: | ----------------------------: |
| Page JavaScript, uncompressed |                             490.80 KB |                     371.77 KB |
| Page JavaScript, gzip         |                             158.67 KB |                     119.71 KB |
| Route JavaScript, gzip        |                              43.10 KB |                       4.88 KB |
| CSS, uncompressed             |                              31.95 KB |                      31.55 KB |
| Dependency audit              | Advisory findings in 11 package names | Zero reported vulnerabilities |

JavaScript decreased approximately 24% uncompressed and 25% gzipped. These are artifact sizes, not estimated library savings. The local Node server does not compress assets; deployed transfer sizes depend on the host.

One fresh Chromium desktop sample after changes recorded LCP/FCP 396 ms, TTFB 54 ms, and CLS 0. These are local Tailnet lab observations, not field Core Web Vitals or statistically reliable timing improvements. No INP claim is made from a page-load sample.

## Validation

- Production preview: `http://100.94.230.115:3001`, served from this worktree's build.
- In-app browser: desktop 1280×800, mobile 390×844 and 320×568; both themes, direct education URL, tab selection, theme cycling, and storage-clear synchronization.
- Browser regression command: `bun tools/check-navigation.mjs http://100.94.230.115:3001/`. Covers anchors, keyboard skip link, native disclosures, hero actions, redirect, tabs, and reduced motion.
- Axe WCAG A/AA: zero violations at desktop and mobile. Gradient-backed text requires manual contrast review; automated results are not a complete accessibility certification.
- Resume: live response is a two-page PDF with PDF MIME type, cache headers, and `nosniff`. Regression tests cover allowed types, HTML rejection, non-success/missing bodies, and thrown timeout errors.
- Theme: VM tests exercise stored theme validation, system fallback, storage failure, extension-attribute cleanup, and viewport variables.
- Full formatting, lint, typecheck, tests, build, and dependency audit pass locally.
- React Doctor 0.9.13: zero errors, one low-impact warning about a small initials `filter().map()` chain. Retained the readable implementation. Doctor excludes only the custom lint-rule implementation directory already excluded by the project's lint config; application and test findings remain enabled.

## Source research

Official repositories were cloned under `~/.btca/agent/sandbox`: TanStack/router, facebook/react, and millionco/react-doctor. Relevant versioned evidence:

- [TanStack Start default CSRF middleware](https://github.com/TanStack/router/blob/%40tanstack/react-start%401.168.49/packages/start-server-core/src/createStartHandler.ts): the app retains the default handler protection. Its public read-only experience function accepts no input and exposes no secrets.
- [TanStack script nonce support](https://github.com/TanStack/router/blob/%40tanstack/react-router%401.170.32/packages/react-router/src/Scripts.tsx): a strict script CSP would need nonce propagation to both framework and custom boot scripts. The limited policy here does not claim to prevent all script injection.
- [React Doctor motion import rule](https://github.com/millionco/react-doctor/blob/fd23edca7eaa76b7f2b66795cfc829cc1967b7f3/packages/oxlint-plugin-react-doctor/src/plugin/rules/bundle-size/use-lazy-motion.ts): investigated actual usage and removed the runtime instead of adding lazy-loading machinery.
- [React effect validation](https://github.com/facebook/react/blob/f1f7ed2ac267a21dd2e3e67c4a606b9cf56e360b/compiler/packages/babel-plugin-react-compiler/src/Validation/ValidateNoSetStateInEffects.ts): remove unnecessary derived state while retaining the theme's deliberate hydration gate.
- [React Doctor TanStack input validation rule](https://github.com/millionco/react-doctor/blob/react-doctor%400.9.13/packages/oxlint-plugin-react-doctor/src/plugin/rules/tanstack-start/tanstack-start-server-fn-validate-input.ts): no speculative validator is needed for a function with no input.
- [TanStack compromised-release advisory](https://github.com/advisories/GHSA-g7cv-rxg3-hmpx): checked installed direct and transitive versions against the affected exact releases; no match.

No user-controlled upstream URL, mutable endpoint, authentication/cookie handling, secret-bearing loader, or dynamic HTML injection was found. Existing social-link isolation and fixed redirect destinations were preserved. Vercel analytics endpoints return expected 404s on the standalone local server; their deployed behavior and the Vercel-only security headers must be checked on the PR deployment. This scoped audit does not guarantee the absence of every vulnerability.
