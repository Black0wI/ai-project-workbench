#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
failed=0

check_absent() {
  local pattern="$1"
  local message="$2"

  if rg -n --glob '!scripts/new-project-check.sh' "${pattern}" "${ROOT_DIR}" >/dev/null; then
    echo "${message}"
    rg -n --glob '!scripts/new-project-check.sh' "${pattern}" "${ROOT_DIR}"
    failed=1
  fi
}

check_absent "AI Project Workbench" "Template project name still appears. Replace it with the derived project name where appropriate."
check_absent "ai-project-workbench" "Template slug still appears. Replace it with the derived project slug where appropriate."
check_absent "TBD" "TBD values remain. Resolve or intentionally document them."

if [[ "${failed}" -ne 0 ]]; then
  exit 1
fi

echo "New project check passed."

