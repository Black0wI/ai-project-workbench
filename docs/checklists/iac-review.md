# IaC Review Checklist

Use this before approving infrastructure-as-code changes.

- [ ] IaC tool choice is documented and user-approved.
- [ ] AWS service choices are documented and user-approved.
- [ ] Cloudflare DNS changes are documented and user-approved, if touched.
- [ ] Remote state and locking are defined for production.
- [ ] Provider versions are pinned.
- [ ] Secrets are not committed or exposed in state where avoidable.
- [ ] Plan output is reviewed before apply.
- [ ] Rollback approach is documented.
- [ ] Resource tags are included.
- [ ] Cost profile is documented.

