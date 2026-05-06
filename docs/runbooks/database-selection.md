# Database Selection Runbook

Use this runbook before adding persistence or database infrastructure.

## Rule

Use PostgreSQL whenever a relational database is required.

On AWS, choose between RDS PostgreSQL and Aurora PostgreSQL based on workload, cost profile, scaling needs, and operational complexity. Get user validation before implementing database infrastructure.

## Required Inputs

- Data model
- Access patterns
- Expected storage size
- Expected read/write volume
- Connection count and concurrency
- Transaction requirements
- Search or analytics needs
- Backup and retention requirements
- Compliance or residency needs
- Budget sensitivity

## Selection Guide

| Need | Recommended direction | Notes |
| --- | --- | --- |
| Relational data, modest usage | RDS PostgreSQL | Usually simplest and cost-effective |
| Relational data, variable scaling needs | Aurora PostgreSQL | Consider cost floor carefully |
| Serverless-style relational needs | Aurora PostgreSQL Serverless | Validate cold starts, scaling, and baseline cost |
| Known key-value access patterns | DynamoDB | Not for relational modeling |
| Temporary local-only storage | PostgreSQL in Docker | Keep production compatibility |

## Proposal Format

Before implementing database infrastructure, propose:

| Option | Service | Cost profile | Operational complexity | Strengths | Risks |
| --- | --- | --- | --- | --- | --- |
| A | RDS PostgreSQL |  |  |  |  |
| B | Aurora PostgreSQL |  |  |  |  |

Recommended option:

Reason:

User validation: Pending

## Implementation Requirements

- Use environment-driven connection strings.
- Include migrations.
- Define backup and restore approach.
- Define schema rollback strategy.
- Avoid storing secrets in code.
- Set connection limits and pooling strategy when relevant.
- Add cost tags and environment tags for AWS resources.

## Do Not Proceed If

- Relational vs non-relational need is unclear.
- User has not validated the AWS database service choice.
- Backup and rollback are undefined.
- Always-on cost is not justified for early-stage usage.

