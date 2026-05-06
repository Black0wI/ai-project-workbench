#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if ! command -v npx >/dev/null 2>&1; then
  echo "npx is required to run SkillKit without installing it globally."
  exit 1
fi

echo "Scanning local Codex skills with SkillKit..."
npx --yes --omit=optional skillkit scan "${ROOT_DIR}/.codex/skills"

if [[ -d "${ROOT_DIR}/.skills" ]]; then
  echo "Scanning SkillKit metadata..."
  npx --yes --omit=optional skillkit scan "${ROOT_DIR}/.skills"
fi
