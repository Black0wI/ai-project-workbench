# ADR 0005: PostgreSQL For Relational Data

Status: Accepted
Date: 2026-05-06

## Context

Projects created from this workbench may need relational persistence. Standardizing the relational database engine reduces decision overhead, improves reuse of tooling, and keeps operational patterns consistent across projects.

AWS remains the hosting platform, so managed PostgreSQL options should be evaluated for production deployments.

## Decision

When a relational database is required, use PostgreSQL.

On AWS, evaluate Amazon RDS for PostgreSQL and Aurora PostgreSQL based on workload needs, cost profile, scalability, and operational complexity. The selected AWS database service must be proposed and validated by the user before infrastructure implementation.

## Consequences

- Relational schema design, migrations, backups, and local development defaults target PostgreSQL.
- MySQL, MariaDB, SQLite, SQL Server, or other relational engines require explicit user override.
- DynamoDB remains available only for non-relational workloads with clear access patterns.
- Database service selection remains cost-aware and user-approved.

## Alternatives Considered

- MySQL or MariaDB: rejected as the default to keep relational tooling standardized.
- SQLite: useful for embedded/local cases but rejected as the production relational default.
- DynamoDB: useful for specific non-relational patterns but not a relational database replacement.

## Validation

- Specs identify whether persistence is relational.
- Relational projects use PostgreSQL-compatible local and production configuration.
- AWS database service choices are documented before implementation.
- Migrations and rollback plans are included when schema changes are made.

