#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REQUIRED_FILES=(
  "README.md"
  "AGENTS.md"
  "DESIGN.md"
  "SPECS.md"
  "LICENSE"
  "NOTICE"
  "CODE_OF_CONDUCT.md"
  "CHANGELOG.md"
  ".gitattributes"
  ".env.example"
  ".codex/README.md"
  ".skills/README.md"
  "prompts/README.md"
  "evals/README.md"
  "evals/cases/project-planner-basic.yaml"
  "docs/runbooks/skill-management.md"
  "docs/runbooks/aws-deployment-selection.md"
  "docs/runbooks/cloudflare-dns-management.md"
  "docs/runbooks/github-versioning.md"
  "docs/runbooks/database-selection.md"
  "docs/runbooks/design-system-management.md"
  "docs/runbooks/design-template-selection.md"
  "docs/runbooks/sub-agent-management.md"
  "docs/runbooks/iac-selection.md"
  "docs/runbooks/secrets-management.md"
  "docs/runbooks/cost-governance.md"
  "docs/release/release-process.md"
  "docs/github/repository-metadata.md"
  "docs/checklists/skill-review.md"
  "docs/checklists/aws-deployment-review.md"
  "docs/checklists/cloudflare-dns-review.md"
  "docs/checklists/github-repository-review.md"
  "docs/checklists/database-review.md"
  "docs/checklists/design-review.md"
  "docs/checklists/iac-review.md"
  "docs/checklists/secrets-review.md"
  "docs/checklists/cost-review.md"
  "docs/checklists/new-project.md"
  "docs/checklists/sub-agent-review.md"
  "docs/specs/000-template.md"
  "docs/specs/README.md"
  "docs/adr/README.md"
  "docs/adr/0001-template.md"
  "docs/adr/0002-aws-first-hosting.md"
  "docs/adr/0003-cloudflare-dns-api-management.md"
  "docs/adr/0004-github-version-control.md"
  "docs/adr/0005-postgresql-for-relational-data.md"
  "docs/adr/0006-design-md-design-system-contract.md"
  "docs/adr/0007-iac-standard-opentofu-terraform.md"
  "templates/infrastructure/aws-lambda.md"
  "templates/infrastructure/ecs-fargate.md"
  "templates/infrastructure/s3-cloudfront.md"
  "templates/infrastructure/rds-postgresql.md"
  "templates/infrastructure/cloudflare-dns.md"
  "templates/docker/README.md"
  "templates/docker/Dockerfile.template"
  "templates/docker/compose.yaml"
  "templates/design/README.md"
  "templates/design/saas-ops.DESIGN.md"
  "templates/design/ai-dashboard.DESIGN.md"
  "templates/design/developer-tool.DESIGN.md"
  "templates/design/public-product.DESIGN.md"
  "templates/design/internal-admin.DESIGN.md"
  "templates/design/previews/index.html"
  "templates/design/previews/saas-ops.html"
  "templates/design/previews/ai-dashboard.html"
  "templates/design/previews/developer-tool.html"
  "templates/design/previews/public-product.html"
  "templates/design/previews/internal-admin.html"
  "templates/tasks/implementation-task.md"
  "templates/tasks/review-task.md"
  "templates/tasks/bugfix-task.md"
  "templates/tasks/refactor-task.md"
  "templates/tasks/architecture-decision-task.md"
  "templates/tasks/sub-agent-explorer-task.md"
  "templates/tasks/sub-agent-worker-task.md"
  "templates/tasks/sub-agent-review-task.md"
  "scripts/bootstrap.sh"
  "scripts/check-template.sh"
  "scripts/doctor.sh"
  "scripts/skillkit-scan.sh"
  "scripts/new-project-check.sh"
  "scripts/apply-design-template.sh"
  "scripts/design/generate-design-previews.mjs"
)

missing=0

for file in "${REQUIRED_FILES[@]}"; do
  if [[ ! -f "${ROOT_DIR}/${file}" ]]; then
    echo "Missing required file: ${file}"
    missing=1
  fi
done

if [[ "${missing}" -ne 0 ]]; then
  exit 1
fi

if [[ "$(sed -n '1p' "${ROOT_DIR}/DESIGN.md")" != "---" ]]; then
  echo "DESIGN.md must start with YAML front matter."
  exit 1
fi

if ! rg -n "^tokens:" "${ROOT_DIR}/DESIGN.md" >/dev/null 2>&1; then
  echo "DESIGN.md must include a tokens section in YAML front matter."
  exit 1
fi

if command -v rg >/dev/null 2>&1; then
  if rg -n --glob '!scripts/check-template.sh' "TODO_PLACEHOLDER|CHANGE_ME" "${ROOT_DIR}" >/dev/null; then
    echo "Template placeholders remain:"
    rg -n --glob '!scripts/check-template.sh' "TODO_PLACEHOLDER|CHANGE_ME" "${ROOT_DIR}"
    exit 1
  fi
fi

echo "Template checks passed."
