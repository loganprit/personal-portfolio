# Repository Guardrails

This is a TanStack Start portfolio. Keep this file limited to stable constraints that are easy to miss; discover scripts, structure, and ordinary style rules from the repo.

## Local Development

- Use Bun for dependencies and package scripts (`bun run test` invokes the
  repository's test script). Install missing dependencies with
  `bun install --frozen-lockfile`.
- Reuse a dev server only after confirming it serves the intended worktree.
  Otherwise start `bun dev --host 0.0.0.0` when browser validation needs it.
- Use the reachable Tailnet URL for browser validation and report it to Logan.
  Prefer the available `agent-browser` skill; use another browser tool when it
  cannot perform the required check.

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

## Ticket Work

- Before editing, verify the intended base branch and use an isolated worktree.
  Check related PRs and base-branch history for existing implementation,
  including PRs merged into non-default branches, before selecting a ticket.
- Preserve unrelated edits. Carry project instruction changes forward when
  updating an active branch; re-read its instructions after switching worktrees.

## Verification and Review

- Use checks relevant to the change during iteration. Before completing source
  changes, run the package scripts for formatting, lint, types, tests, and build;
  report results and any unavailable verification. Read-only questions and
  instruction-only edits need only relevant checks.
- For UI changes, inspect the rendered result at affected desktop/mobile sizes,
  themes, and interaction states. Verify from a fresh reload after styling changes;
  an error page or stale preview is not a passing check.
- Reviewers are read-only: preserve source, lockfiles, and shared dependencies.
  If Bun or dependencies are unavailable, report that to the orchestrator, who
  owns dependency setup; do not substitute another package manager.
- Obtain independent Astra approval on the exact final commit. Use one reviewer
  for small changes; split independent review work only when substantial.
  Address substantive findings and repeat review after any later change.
- Before merge, confirm the intended PR base, passing required checks, resolved
  review threads, and approval of the current head. Merge only when Logan has
  authorized it; an existing explicit merge instruction does not need repeating.
