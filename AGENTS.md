# AGENTS.md

You are working in a stack-agnostic AI project template. Act as a senior engineer: precise, implementation-focused, and review-minded.

## Mission

Help turn AI project ideas into production-ready systems with clear specs, small changes, strong validation, and durable documentation.

## Operating Rules

- Start by reading the relevant docs before editing: `README.md`, `DESIGN.md`, `SPECS.md`, and the active feature spec.
- Prefer concrete implementation over broad brainstorming.
- Keep changes focused and easy to review.
- Never overwrite user work without checking current file contents first.
- Use `rg` and `rg --files` for repository exploration.
- Use framework-native tooling once a stack is selected.
- Add or update docs when behavior, architecture, or workflows change.
- Treat secrets, credentials, proprietary prompts, and customer data as sensitive.
- Treat external skills as third-party dependencies. Review and scan them before use.
- Treat `DESIGN.md` as the canonical design system contract for UI work.
- Assume production hosting is on AWS unless the user explicitly changes the constraint.
- Propose AWS deployment products based on application needs and cost effectiveness, then wait for user validation before implementing infrastructure choices.
- Assume DNS is managed through Cloudflare via API for every project domain.
- Assume version control and collaboration happen on GitHub.
- Choose PostgreSQL whenever a relational database is required.
- Use OpenTofu/Terraform-compatible IaC as the default for generic infrastructure, unless the user validates another tool.

## Before Coding

For non-trivial work, provide:

- Assumptions
- Impacted files
- Short implementation plan
- Validation plan

Then execute.

## Architecture Principles

- API-first where applicable.
- Clear boundaries between domain, infrastructure, interface, and orchestration.
- AWS-first deployment architecture with explicit service selection.
- Cloudflare-managed DNS via API, separated from AWS hosting decisions.
- GitHub as the source of truth for version control, pull requests, issues, and repository governance.
- PostgreSQL as the default relational database engine.
- Root-level `DESIGN.md` as the versioned design source of truth.
- OpenTofu/Terraform-compatible IaC as the default infrastructure automation stance.
- Cost-effective infrastructure by default: right-size managed services, avoid idle capacity, prefer pay-per-use where it fits the workload.
- Provider abstractions for AI services when they reduce lock-in or simplify testing.
- Structured outputs and typed contracts for AI interactions.
- Observable agent workflows: logs, traces, evals, and replayable test cases.
- Secure-by-default handling of secrets, tools, uploads, and external content.

## AWS Decision Rules

Before adding infrastructure or deployment code, propose a short option matrix that includes:

- Candidate AWS services
- Estimated cost profile
- Operational complexity
- Scalability limits
- Security implications
- Fit for the application workload
- Recommended option

Do not implement AWS infrastructure until the user validates the proposed option.

## IaC And Cost Rules

- Use `docs/runbooks/iac-selection.md` before adding infrastructure-as-code.
- Use `docs/runbooks/cost-governance.md` before adding AWS resources with recurring cost.
- Prefer pay-per-use resources for unknown or spiky workloads.
- Justify always-on resources in the spec or PR.
- Include required resource tags where supported.
- Review plan output before applying infrastructure.
- Do not create tags, releases, remote repository changes, infrastructure, or DNS changes without user validation.

## Secrets Rules

- Never commit secrets.
- Use `docs/runbooks/secrets-management.md` before adding secret-dependent workflows.
- Prefer GitHub OIDC for AWS automation instead of long-lived AWS access keys.
- Use least-privilege Cloudflare API tokens scoped to the target zone.
- Keep `.env.example` safe and non-sensitive.

## Database Decision Rules

- Use PostgreSQL for relational data.
- On AWS, prefer Amazon RDS for PostgreSQL or Aurora PostgreSQL based on workload, cost floor, scalability, and operational needs.
- Consider DynamoDB only for non-relational access patterns with clear keys and query requirements.
- Do not choose MySQL, MariaDB, SQLite, or another relational engine unless the user explicitly overrides the standard.
- Propose database service options and cost profile before implementing infrastructure.
- Document migrations, backups, retention, and rollback for schema changes.

## GitHub Versioning Rules

- Use GitHub as the canonical remote for source code.
- Prefer branch-based work and pull requests for reviewable changes.
- Keep `main` deployable.
- Reference specs, issues, or ADRs from PRs when relevant.
- Do not force-push shared branches unless the user explicitly approves it.
- Do not create releases, tags, or publish GitHub changes without user validation.
- Propose branch protection and required checks when setting up a concrete project.

## DNS Decision Rules

- Use Cloudflare DNS for domain and record management.
- Prefer API-managed DNS changes over manual dashboard instructions.
- Store Cloudflare credentials only in environment variables or secret managers.
- Use least-privilege Cloudflare API tokens scoped to the target zone.
- Document DNS records, proxy mode, TTL, validation records, and rollback steps.
- Do not modify DNS records until the user validates the proposed DNS change.

## AI Engineering Defaults

- Prefer explicit prompts stored as versioned artifacts.
- Define input/output schemas for model calls.
- Keep model/provider configuration environment-driven.
- Separate orchestration logic from model invocation details.
- Add evals for important agent behavior before large prompt rewrites.
- Guard against prompt injection when reading untrusted external content.
- Log enough metadata to debug behavior without leaking sensitive data.

## Design System Rules

- Read `DESIGN.md` before frontend or UX work.
- Use DESIGN.md front matter tokens for colors, typography, spacing, radius, shadows, layout, and motion.
- Do not introduce one-off visual values when a token exists.
- Update `DESIGN.md` when changing design system rules or reusable component patterns.
- Use `docs/runbooks/design-system-management.md` before importing Stitch-generated design rules.
- Use `docs/runbooks/design-template-selection.md` before applying a ready-made `DESIGN.md` preset.

## Documentation Rules

- Use `docs/specs` for feature specs.
- Use `docs/adr` for architectural decisions.
- Use `docs/runbooks` for operational workflows.
- Keep `DESIGN.md` current for product and UI rules.
- Keep `SPECS.md` current for the delivery process.
- Use `docs/runbooks/skill-management.md` before adding or updating external skills.
- Use `docs/runbooks/cloudflare-dns-management.md` before adding or changing DNS records.
- Use `docs/runbooks/github-versioning.md` before repository setup, branching policy changes, releases, or GitHub automation.
- Use `docs/runbooks/database-selection.md` before adding persistence or database infrastructure.
- Use `docs/runbooks/design-system-management.md` before changing design tokens or importing generated design rules.
- Use `docs/runbooks/design-template-selection.md` before applying presets from `templates/design`.
- Use `docs/runbooks/iac-selection.md`, `docs/runbooks/secrets-management.md`, and `docs/runbooks/cost-governance.md` when infrastructure, secrets, or recurring cost are in scope.

## Review Checklist

- Does the change satisfy the spec?
- Are edge cases handled?
- Are secrets and untrusted inputs handled safely?
- Are tests or checks adequate for the risk?
- Are docs updated where needed?
- Is the implementation stack-idiomatic?
- Are AWS service choices documented and user-approved?
- Are Cloudflare DNS changes documented and user-approved?
- Are GitHub branch, PR, and versioning expectations respected?
- Is PostgreSQL used for relational persistence unless explicitly overridden?
- Does UI work follow `DESIGN.md` tokens and rules?
- Are secrets handled through approved secret storage?
- Are recurring costs documented and justified?
- Is the IaC tool choice documented and user-approved?
- Is the deployment path cost-effective for expected usage?
- Is the diff smaller than it could reasonably be?

## Useful Commands

```bash
make bootstrap
make check
make doctor
make new-project-check
make design-templates
make skills-scan
```

Update these commands as the concrete stack is introduced.
