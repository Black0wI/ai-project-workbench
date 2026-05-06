# Spec: Feature Name

Status: Draft
Owner: TBD
Last updated: YYYY-MM-DD

## Summary

Briefly describe the feature or change.

## Problem

What user or business problem does this solve?

## Goals

- Goal 1
- Goal 2

## Non-Goals

- Explicitly out-of-scope item

## Users And Workflows

Describe primary users and the workflow they need to complete.

## Functional Requirements

- Requirement 1
- Requirement 2

## AI Behavior

Use this section for model, prompt, agent, tool, or eval behavior. Remove if not applicable.

- Provider/model assumptions:
- Prompt artifacts:
- Input schema:
- Output schema:
- Tool permissions:
- Human review points:
- Failure modes:
- Eval strategy:

## Data And Contracts

Define API contracts, events, schemas, storage changes, and compatibility constraints.

## Database And Persistence

Use this section when persistence is in scope.

Data model:

Access patterns:

Relational storage required: Yes/No

Database standard: PostgreSQL when relational storage is required

AWS service options:

| Option | AWS service | Cost profile | Operational complexity | Fit | Risks |
| --- | --- | --- | --- | --- | --- |
| A | RDS PostgreSQL | Instance-based cost floor | Medium | TBD | TBD |
| B | Aurora PostgreSQL | Higher baseline, stronger scaling options | Medium | TBD | TBD |

Migration plan:

Backup and retention:

Rollback plan:

User validation status: Pending

## Deployment And AWS Service Options

Use this section when deployment or infrastructure is in scope.

| Option | AWS services | Cost profile | Operational complexity | Fit | Risks |
| --- | --- | --- | --- | --- | --- |
| Option A | Lambda, API Gateway, DynamoDB | Pay-per-use | Low | TBD | TBD |
| Option B | ECS Fargate, ALB, RDS | Usage-based containers | Medium | TBD | TBD |

Recommended option:

User validation status: Pending

## DNS And Domain Management

Use this section when domains, SSL validation, routing, or DNS records are in scope.

Cloudflare zone:

Required records:

| Type | Name | Value | Proxy mode | TTL | Purpose |
| --- | --- | --- | --- | --- | --- |
| CNAME | app | example-target | DNS only | Auto | Application route |

Cloudflare API token scope:

Rollback plan:

User validation status: Pending

## GitHub Versioning And Release Impact

Use this section when repository setup, release workflow, tags, branches, or GitHub automation are in scope.

Repository:

Branch strategy:

Required checks:

Branch protection:

Release/tagging impact:

User validation status: Pending

## Security And Privacy

List sensitive data, permission checks, redaction, retention, and abuse cases.

## Observability

Define logs, metrics, traces, evals, alerts, and audit events.

## Acceptance Criteria

- [ ] Criterion 1
- [ ] Criterion 2

## Rollout

Describe deployment, migration, feature flags, and rollback.

## Open Questions

- Question 1
