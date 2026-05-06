#!/usr/bin/env bash
set -euo pipefail

echo "Environment doctor"

for command in git rg make; do
  if command -v "${command}" >/dev/null 2>&1; then
    echo "ok: ${command}"
  else
    echo "missing: ${command}"
  fi
done

if command -v codex >/dev/null 2>&1; then
  echo "ok: codex"
else
  echo "optional: codex CLI not found"
fi

