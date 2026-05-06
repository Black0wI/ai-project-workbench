# Database Review Checklist

Use this before approving persistence or database changes.

- [ ] Persistence need is documented.
- [ ] Relational vs non-relational rationale is clear.
- [ ] PostgreSQL is used for relational storage unless explicitly overridden.
- [ ] AWS database service choice is user-approved if infrastructure is touched.
- [ ] Cost profile and always-on cost are reviewed.
- [ ] Migrations are included for schema changes.
- [ ] Rollback strategy is documented.
- [ ] Backup and retention are defined.
- [ ] Secrets are environment-driven or stored in a secret manager.
- [ ] Connection pooling and limits are considered.
- [ ] Data privacy and retention requirements are addressed.
