# Cloudflare DNS Template Notes

Use for DNS records managed through Cloudflare API.

## Required Fields

| Type | Name | Value | Proxy mode | TTL | Purpose |
| --- | --- | --- | --- | --- | --- |
| CNAME |  |  | DNS only | Auto |  |

## Token Scope

- Zone DNS edit
- Single-zone scope where possible
- No global API key

## Validation Required

- User-approved DNS proposal
- Rollback record values
- Service verification command

