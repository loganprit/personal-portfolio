#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

if [[ ! -d node_modules ]]; then
  printf '%s\n' \
    "Project checks could not run because dependencies are missing in ${PWD}." \
    "Run pnpm install, then retry so I can lint and typecheck before finishing." >&2
  exit 2
fi

failures=()

run_check() {
  local label="$1"
  shift

  local output
  if output="$("$@" 2>&1)"; then
    return 0
  fi

  failures+=("$label"$'\n'"$(printf '%s\n' "$output" | tail -n 80)")
}

run_check "Lint failed (pnpm lint):" pnpm lint
run_check "Typecheck failed (pnpm typecheck):" pnpm typecheck

if ((${#failures[@]} > 0)); then
  {
    printf '%s\n' "Finish blocked until lint and typecheck pass."
    printf '%s\n' "Fix the following and retry:"
    printf '\n'

    idx=0
    for failure in "${failures[@]}"; do
      if ((idx > 0)); then
        printf '\n'
      fi
      printf '%s\n' "$failure"
      idx=$((idx + 1))
    done
  } >&2

  exit 2
fi
