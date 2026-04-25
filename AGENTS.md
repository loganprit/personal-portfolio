# Repository Guidelines

## Project Structure & Module Organization

This repository is a Next.js App Router portfolio.

- `src/app/`: routes, layouts, global styles, and API handlers (for example `src/app/api/resume/route.ts`).
- `src/components/`: reusable UI, layout, and theme components.
- `src/data/`: static content sources (`projects`, `work-history`, `current-role`).
- `src/hooks/`: custom React hooks.
- `src/lib/`: shared utilities and animation config.
- `public/`: static assets, including images and icons.
- `tmp/`: local scratch/vendor files; treat as non-production unless explicitly needed.

## Build, Test, and Development Commands

Use Node `>=20.9.0`.

- `bun install`: install dependencies.
- `bun dev`: start local dev server at `http://localhost:3000`.
- `bun scan`: run dev server plus `react-scan` performance diagnostics.
- `bun build`: create production build.
- `bun start`: serve production build locally.
- `bun lint`: run ESLint on `src/`.

## Browser Interaction

Use `$browser-use:browser` for browser interaction, inspection, screenshots, and
localhost validation. Prefer the Codex in-app browser workflow over Playwright,
Computer Use, or other browser automation skills unless `$browser-use:browser`
is unavailable or explicitly unsuitable.

## Coding Style & Naming Conventions

- Language: TypeScript + React function components.
- Indentation: 2 spaces; prefer double quotes and semicolons (match existing files).
- Components/files: `PascalCase` for component files (for example `ThemeToggle.tsx`).
- Hooks: `camelCase` with `use` prefix (for example `useSystemTheme.ts`).
- Data/util modules: lowercase/kebab or descriptive lowercase names (for example `current-role.ts`, `theme-script.ts`).
- Keep Tailwind utility usage consistent with existing component patterns.

## Testing Guidelines

There is no formal automated test suite configured yet. Before opening a PR:

- Run `bun lint`.
- Run `bun build` to catch type/build regressions.
- Manually validate key pages: `/`, `/projects`, `/work-history`, theme toggle, and resume download endpoint.
  When adding tests in the future, colocate with source files using `*.test.ts(x)` naming.

## Commit & Pull Request Guidelines

Recent history favors concise, imperative commits with optional Conventional Commit prefixes (`feat:`, `fix:`).

- Prefer: `fix: correct resume route caching headers`.
- Keep one logical change per commit.

PRs should include:

- Clear summary of user-facing and technical changes.
- Linked issue/task (if applicable).
- Screenshots or short recordings for UI changes.
- Validation notes listing commands run (for example `bun lint`, `bun build`).
