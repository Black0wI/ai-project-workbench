# Secrets Management Runbook

Use this before adding credentials, API keys, tokens, or secret-dependent automation.

## Rule

Never commit secrets. Store secrets in environment variables, GitHub Secrets, AWS Secrets Manager, AWS Systems Manager Parameter Store, or another approved secret manager.

## Common Secrets

- `OPENAI_API_KEY`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `CLOUDFLARE_API_TOKEN`
- Database credentials
- OAuth client secrets

## GitHub Actions

- Use GitHub Secrets or OIDC where possible.
- Prefer AWS OIDC federation over long-lived AWS access keys.
- Restrict workflow permissions.
- Do not print secrets in logs.

## AWS

- Prefer AWS Secrets Manager for application runtime secrets.
- Use SSM Parameter Store for lower-cost configuration when rotation is not needed.
- Scope IAM permissions to exact secret paths.

## Cloudflare

- Use least-privilege API tokens.
- Scope tokens to a single zone where possible.
- Do not use global API keys.

## Rotation

Document for each secret:

- Owner
- Storage location
- Rotation cadence
- Last rotated date
- Impact of rotation

## Incident Response

If a secret is exposed:

1. Revoke or rotate it immediately.
2. Remove it from code and history where possible.
3. Audit access logs.
4. Update affected deployments.
5. Document the incident privately.

