# Cloudflare DNS Management Runbook

Use this runbook before creating, updating, or deleting DNS records.

## Rule

DNS is managed through Cloudflare via API. DNS changes require user validation before execution.

## Required Inputs

- Domain name
- Cloudflare zone ID
- Target environment
- Required DNS records
- AWS target: CloudFront, ALB, API Gateway, App Runner, static site, or other
- Proxy mode requirement: proxied or DNS only
- TTL requirement
- Validation records for SSL, email, ownership, or third-party services
- Rollback records

## Credentials

Use environment variables or a secret manager:

```bash
CLOUDFLARE_API_TOKEN=
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_ZONE_ID=
```

API token requirements:

- Scope to the smallest possible zone.
- Grant only DNS edit permissions unless broader access is required.
- Do not use global API keys.
- Do not commit tokens.

## Proposal Format

Before changing DNS, propose:

| Type | Name | Value | Proxy mode | TTL | Purpose | Rollback |
| --- | --- | --- | --- | --- | --- | --- |
| CNAME |  |  | DNS only | Auto |  |  |

User validation: Pending

## Implementation Options

- Cloudflare API directly for simple scripts.
- Terraform/OpenTofu Cloudflare provider when infrastructure is managed as code.
- Framework deployment plugin only if it supports explicit reviewable DNS changes.

## Safety Rules

- Prefer `DNS only` for AWS validation records.
- Confirm whether Cloudflare proxying is compatible with the AWS target before enabling it.
- Do not proxy records required for certificate or ownership validation unless explicitly supported.
- Keep rollback values available before applying changes.
- Avoid deleting existing records without listing impact first.

## Verification

After changes:

```bash
dig <record>
```

Also verify target-specific status in AWS or the consuming service.

