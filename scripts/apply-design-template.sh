#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DESIGN_TEMPLATE="${1:-}"

if [[ -z "${DESIGN_TEMPLATE}" ]]; then
  echo "Usage: $0 templates/design/<preset>.DESIGN.md"
  exit 1
fi

SOURCE_PATH="${ROOT_DIR}/${DESIGN_TEMPLATE}"

if [[ ! -f "${SOURCE_PATH}" ]]; then
  echo "Design template not found: ${DESIGN_TEMPLATE}"
  exit 1
fi

if [[ "$(sed -n '1p' "${SOURCE_PATH}")" != "---" ]]; then
  echo "Design template must start with YAML front matter: ${DESIGN_TEMPLATE}"
  exit 1
fi

if ! rg -n "^tokens:" "${SOURCE_PATH}" >/dev/null 2>&1; then
  echo "Design template must include a tokens section: ${DESIGN_TEMPLATE}"
  exit 1
fi

timestamp="$(date +%Y%m%d%H%M%S)"
backup_path="${ROOT_DIR}/DESIGN.md.backup.${timestamp}"

cp "${ROOT_DIR}/DESIGN.md" "${backup_path}"
cp "${SOURCE_PATH}" "${ROOT_DIR}/DESIGN.md"

echo "Applied design template: ${DESIGN_TEMPLATE}"
echo "Previous DESIGN.md backed up to: ${backup_path}"

