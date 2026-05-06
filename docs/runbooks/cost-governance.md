# Cost Governance Runbook

Use this before adding AWS infrastructure or services with recurring cost.

## Rule

Choose cost-effective architecture by default. Always-on resources need explicit justification.

## Required For AWS Infrastructure

- Cost profile by environment
- Always-on resource list
- Scaling assumptions
- Budget alert plan
- Resource tagging plan
- Data transfer considerations
- Storage growth estimate

## Required Tags

Use these tags where supported:

| Tag | Purpose |
| --- | --- |
| `Project` | Project/repository name |
| `Environment` | dev, staging, production |
| `Owner` | Responsible person/team |
| `ManagedBy` | IaC tool or automation |
| `CostCenter` | Billing group, if applicable |

## Cost-Effective Defaults

- Prefer pay-per-use for unknown or spiky workloads.
- Avoid idle containers, databases, NAT gateways, and caches until justified.
- Prefer S3 + CloudFront for static assets.
- Prefer Lambda for short, variable workloads.
- Use RDS PostgreSQL only when relational persistence is required.
- Revisit architecture after real usage data exists.

## Review Triggers

Review cost when:

- Traffic changes materially.
- Always-on infrastructure is added.
- Database class or storage changes.
- NAT gateways, load balancers, or caches are introduced.
- Logs or traces increase significantly.

