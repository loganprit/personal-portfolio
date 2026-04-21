#!/usr/bin/env bash

set -euo pipefail

session_context=$'<EXTREMELY_IMPORTANT>\nSuperpowers is available in this project.\n\nBefore any response or action, invoke and follow `$superpowers:using-superpowers`.\nUse Superpowers skills whenever they apply.\nIf a Superpowers skill applies, use it instead of working from memory or skipping the workflow.\n</EXTREMELY_IMPORTANT>'

escape_for_json() {
  local s="$1"
  s="${s//\\/\\\\}"
  s="${s//\"/\\\"}"
  s="${s//$'\n'/\\n}"
  s="${s//$'\r'/\\r}"
  s="${s//$'\t'/\\t}"
  printf '%s' "$s"
}

escaped_context="$(escape_for_json "$session_context")"

printf '{\n  "hookSpecificOutput": {\n    "hookEventName": "SessionStart",\n    "additionalContext": "%s"\n  }\n}\n' "$escaped_context"
