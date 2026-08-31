# Repository Guardrails

This is a TanStack Start portfolio. Keep this file limited to stable constraints that are easy to miss; discover scripts, structure, and ordinary style rules from the repo.

## Local Development

- Start or reuse `bun dev` when browser validation needs the site.

## Portfolio Landmines

- Treat `src/lib/theme-script.ts`, `src/components/theme/ThemeProvider.tsx`, and
  `src/routes/__root.tsx` as sensitive theme boot code. Preserve the pre-hydration
  theme script, `suppressHydrationWarning`, and mobile `--vh` handling unless an
  equivalent no-FOUC replacement is included.
- Keep resume links pointed at `/api/resume`. The API route owns the upstream
  Google Drive URL plus download/cache headers so there is one canonical resume
  flow.
- Treat `tmp/` as scratch/vendor material, not production source, unless a task
  explicitly says otherwise.
