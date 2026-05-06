# SPECS.md

Specification workflow for this repository.

Specs are the contract between product intent, architecture, implementation, and review. Keep them short enough to use and specific enough to test.

## When To Write A Spec

Write a spec when the change:

- Introduces a feature or workflow
- Changes user-visible behavior
- Adds an AI agent, tool, prompt, or model workflow
- Changes storage, auth, billing, deployment, or integrations
- Has meaningful security, privacy, or operational risk

Small bug fixes can use an issue or PR description instead.

## Spec Lifecycle

1. Draft in `docs/specs`.
2. Review assumptions and non-goals.
3. Create ADRs for architectural decisions.
4. Implement against acceptance criteria.
5. Update the spec if scope changes.
6. Link the spec from the PR.

## Required Sections

- Summary
- Problem
- Goals
- Non-goals
- Users and workflows
- Functional requirements
- AI behavior, if applicable
- Data and contracts
- Database and persistence
- Deployment and AWS service options
- DNS and domain management
- GitHub versioning and release impact
- Security and privacy
- Observability
- Acceptance criteria
- Rollout and rollback

## AI-Specific Spec Additions

For AI workflows, include:

- Model/provider assumptions
- Prompt ownership and versioning
- Input and output schemas
- Tool permissions
- Human review points
- Failure modes
- Eval strategy
- Logging and redaction requirements

## AWS Deployment Requirements

For deployable applications, include:

- Candidate AWS services
- Cost-effectiveness rationale
- Expected traffic and workload profile
- Operational complexity
- Security and compliance considerations
- Recommended option
- Explicit user validation status

## Database Requirements

When persistence is in scope, include:

- Data model and access patterns
- Relational vs non-relational rationale
- PostgreSQL plan when relational storage is required
- AWS service option: RDS PostgreSQL or Aurora PostgreSQL
- Backup, retention, migration, and rollback plan
- Cost profile and expected storage/connection load
- Explicit user validation status when infrastructure is touched

## Cloudflare DNS Requirements

For domain or DNS changes, include:

- Domain and Cloudflare zone
- Required records
- Proxy mode
- TTL strategy
- Validation records for AWS, email, SSL, or third-party services
- Required API token scope
- Rollback plan
- Explicit user validation status

## GitHub Versioning Requirements

When repository governance, releases, or delivery workflow are in scope, include:

- Repository name and visibility
- Branch strategy
- Required PR checks
- Branch protection rules
- Release/tagging strategy
- GitHub Actions requirements
- User validation status

## Definition Of Ready

- Problem and goals are clear.
- Non-goals are explicit.
- Acceptance criteria are testable.
- Dependencies and risks are named.
- Required decisions have ADRs.
- Database requirements are defined when persistence is in scope.
- AWS deployment options are proposed when deployment is in scope.
- Cloudflare DNS changes are proposed when domains are in scope.
- GitHub repository workflow is defined when versioning or releases are in scope.

## Definition Of Done

- Acceptance criteria pass.
- Tests/checks match risk.
- Docs are updated.
- Security and privacy concerns are addressed.
- PostgreSQL is used for relational persistence unless explicitly overridden.
- AWS service choices are documented and user-approved when infrastructure is touched.
- Cloudflare DNS changes are documented and user-approved when DNS is touched.
- GitHub release, branch, or repository governance changes are documented and user-approved when touched.
- Rollout and rollback path is documented where relevant.
