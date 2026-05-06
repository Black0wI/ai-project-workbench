# IaC Selection Runbook

Use this before adding infrastructure-as-code.

## Rule

Default to OpenTofu/Terraform-compatible IaC for generic AWS and Cloudflare infrastructure.

SST can be proposed for TypeScript serverless applications when it is clearly a better fit. User validation is required before implementing IaC.

## Required Inputs

- Application stack
- AWS services under consideration
- Cloudflare DNS needs
- Environment count
- State backend requirements
- Team familiarity
- CI/CD expectations
- Cost sensitivity

## Proposal Format

| Option | Tool | Fit | Cost impact | Operational complexity | Risks |
| --- | --- | --- | --- | --- | --- |
| A | OpenTofu/Terraform | Generic infra | Low tooling cost | Medium | State management |
| B | SST | TypeScript serverless | Low tooling cost | Low/Medium | Stack-specific |

Recommended option:

Reason:

User validation: Pending

## Production Requirements

- Remote state backend.
- State locking.
- Secrets excluded from state where possible.
- Provider versions pinned.
- Plan output reviewed before apply.
- Rollback approach documented.

