# RDS PostgreSQL Template Notes

Use when relational persistence is required and a straightforward managed PostgreSQL database is cost-effective.

## Good Fit

- Relational domain model
- Transactions
- Moderate predictable load
- Standard PostgreSQL tooling

## Watch Outs

- Always-on cost
- Backups and retention
- Connection limits
- Migrations and rollback
- Network access

## Common Services

- RDS PostgreSQL
- AWS Secrets Manager
- Security groups
- Subnet groups
- Optional RDS Proxy

## Validation Required

- User-approved database option matrix
- Backup and retention plan
- Migration and rollback strategy

