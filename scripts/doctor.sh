#!/usr/bin/env bash
set -euo pipefail

echo "Environment doctor"

missing=0

for command in git make; do
  if command -v "${command}" >/dev/null 2>&1; then
    echo "ok: ${command}"
  else
    echo "missing: ${command}"
    missing=1
  fi
done

if command -v rg >/dev/null 2>&1; then
  echo "ok: rg"
elif [[ -x "/Applications/Codex.app/Contents/Resources/rg" ]]; then
  echo "ok: rg (Codex bundled)"
else
  echo "missing: rg"
  echo "install: brew install ripgrep"
  missing=1
fi

if command -v codex >/dev/null 2>&1; then
  echo "ok: codex"
else
  echo "optional: codex CLI not found"
fi

exit "${missing}"
