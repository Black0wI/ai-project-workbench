#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
VAULT_PATH="${OBSIDIAN_VAULT_PATH:-}"
EXPORT_DIR="${ROOT_DIR}/context/obsidian/exports"

if [[ -z "${VAULT_PATH}" ]]; then
  echo "OBSIDIAN_VAULT_PATH is not set."
  echo "Example: OBSIDIAN_VAULT_PATH=/Users/jbm/Documents/Obsidian/Projects/ai-project-workbench"
  exit 1
fi

if [[ ! -d "${VAULT_PATH}" ]]; then
  echo "Obsidian vault not found: ${VAULT_PATH}"
  exit 1
fi

mkdir -p "${EXPORT_DIR}"

timestamp="$(date +%Y%m%d%H%M%S)"
target="${EXPORT_DIR}/obsidian-context-${timestamp}.md"

{
  echo "# Obsidian Context Export"
  echo
  echo "Source vault: ${VAULT_PATH}"
  echo "Exported at: ${timestamp}"
  echo
  echo "> Review and sanitize this export before promoting content into official docs."
  echo

  find "${VAULT_PATH}" -type f -name "*.md" \
    ! -path "*/.obsidian/*" \
    ! -path "*/90-archive/*" \
    | sort \
    | while read -r note; do
        relative="${note#${VAULT_PATH}/}"
        echo
        echo "---"
        echo
        echo "## ${relative}"
        echo
        sed -n '1,220p' "${note}"
      done
} > "${target}"

echo "Exported Obsidian context to ${target}"

