# Secrets Review Checklist

Use this before approving secret-dependent changes.

- [ ] No secrets are committed.
- [ ] `.env.example` contains names only or safe examples.
- [ ] Runtime secrets use an approved secret manager.
- [ ] GitHub Actions secrets use GitHub Secrets or OIDC.
- [ ] AWS permissions are least privilege.
- [ ] Cloudflare tokens are zone-scoped where possible.
- [ ] Secret rotation path is documented.
- [ ] Logs do not expose secret values.

