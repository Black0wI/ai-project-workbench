# Production Readiness Checklist

Use this before production rollout.

- [ ] Acceptance criteria pass.
- [ ] Tests/checks match the feature risk.
- [ ] Configuration is environment-driven.
- [ ] Secrets are not committed.
- [ ] Secret storage and rotation path are documented.
- [ ] PostgreSQL is used for relational storage unless explicitly overridden.
- [ ] Deployment and rollback steps are documented.
- [ ] AWS service choices are documented and user-approved.
- [ ] Cost profile and always-on resources are reviewed.
- [ ] Budget alerts and cost tags are planned for AWS resources.
- [ ] Cloudflare DNS changes are documented and user-approved, if domains are touched.
- [ ] Observability is in place: logs, metrics, traces, alerts.
- [ ] Error states and failure paths are handled.
- [ ] Data migrations are reversible or have a recovery plan.
- [ ] Security and privacy review is complete.
- [ ] Ownership and support path are clear.
