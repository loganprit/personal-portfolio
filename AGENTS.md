# Repository Guardrails

This is a Next.js App Router portfolio. Keep this file limited to stable
constraints that are easy to miss; discover scripts, structure, and ordinary
style rules from the repo.

## Local Development

- Use Node `>=20.9.0`.
- Do not start `bun dev` automatically. Assume the dev server is already
  running; if browser validation needs it and it is unavailable, ask Logan to
  start it.
- Use `$browser-use:browser` for localhost inspection, screenshots, and browser
  interaction. Prefer it over Playwright, Computer Use, or shell-launched
  browsers unless it is unavailable or explicitly unsuitable.

## Portfolio Landmines

- Treat `src/lib/theme-script.ts`, `src/components/theme/ThemeProvider.tsx`, and
  `src/app/layout.tsx` as sensitive theme boot code. Preserve the pre-hydration
  theme script, `suppressHydrationWarning`, and mobile `--vh` handling unless an
  equivalent no-FOUC replacement is included.
- Keep resume links pointed at `/api/resume`. The API route owns the upstream
  Google Drive URL plus download/cache headers so there is one canonical resume
  flow.
- Treat `tmp/` as scratch/vendor material, not production source, unless a task
  explicitly says otherwise.

## Task Workflows

- For portfolio UI, content, or theme changes, use the local
  `portfolio-guidelines` skill when available.
- Before claiming portfolio work is complete, use the local `verify` skill when
  available and report the automated commands that passed.
