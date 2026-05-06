# Cloudflare DNS Review Checklist

Use this before approving DNS changes.

- [ ] User validated the DNS change.
- [ ] Cloudflare zone is identified.
- [ ] Records are listed with type, name, value, TTL, and proxy mode.
- [ ] API token scope is least privilege.
- [ ] No global API key is used.
- [ ] AWS target compatibility is checked.
- [ ] Validation records are `DNS only` unless explicitly supported otherwise.
- [ ] Rollback record values are documented.
- [ ] Existing records and conflicts are reviewed before deletion or overwrite.
- [ ] DNS propagation and service verification steps are documented.
