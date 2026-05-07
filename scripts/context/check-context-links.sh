#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
failed=0

if command -v rg >/dev/null 2>&1; then
  if rg -n --glob '!docs/runbooks/obsidian-context.md' --glob '!docs/checklists/context-review.md' "\[\[[^]]+\]\]" "${ROOT_DIR}/docs" "${ROOT_DIR}/prompts" "${ROOT_DIR}/AGENTS.md" "${ROOT_DIR}/README.md" >/dev/null; then
    echo "Obsidian-style wiki links found in official docs. Convert or document them before publishing:"
    rg -n --glob '!docs/runbooks/obsidian-context.md' --glob '!docs/checklists/context-review.md' "\[\[[^]]+\]\]" "${ROOT_DIR}/docs" "${ROOT_DIR}/prompts" "${ROOT_DIR}/AGENTS.md" "${ROOT_DIR}/README.md"
    failed=1
  fi

  if rg -n "api[_-]?key|secret|token|password|BEGIN PRIVATE KEY" "${ROOT_DIR}/context/obsidian/exports" >/dev/null; then
    echo "Potential secret-like content found in Obsidian exports:"
    rg -n "api[_-]?key|secret|token|password|BEGIN PRIVATE KEY" "${ROOT_DIR}/context/obsidian/exports"
    failed=1
  fi
fi

if [[ "${failed}" -ne 0 ]]; then
  exit 1
fi

echo "Context checks passed."
