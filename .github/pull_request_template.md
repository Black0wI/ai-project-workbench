## Summary

- 

## Spec / Issue

- 

## Changes

- 

## Validation

- [ ] Automated checks pass
- [ ] Manual workflow checked, if applicable
- [ ] Docs updated, if applicable

## Sub-Agent Review

- [ ] Sub-agent scopes were bounded, if sub-agents were used
- [ ] File/module ownership was respected, if sub-agents were used
- [ ] Delegated output was reviewed before integration, if sub-agents were used

## GitHub Versioning Review

- [ ] Issue, spec, or ADR is linked, if applicable
- [ ] Branch/release/tag impact is documented, if applicable
- [ ] Required checks are expected to pass before merge

## Database Review

- [ ] PostgreSQL is used for relational persistence, if applicable
- [ ] Migrations and rollback are documented, if schema changes are included
- [ ] AWS database service choice is user-approved, if infrastructure is touched

## Design Review

- [ ] `DESIGN.md` was followed, if UI is touched
- [ ] Token changes are documented, if design system values changed
- [ ] Responsive and accessibility states are considered, if UI is touched

## AI / Security Review

- [ ] Prompts, tools, and model behavior reviewed, if applicable
- [ ] Secrets and sensitive data are not exposed
- [ ] Untrusted input handling considered

## AWS Deployment Review

- [ ] AWS service choices are documented, if infrastructure is touched
- [ ] User validation is linked, if infrastructure is touched
- [ ] Cost profile is considered, if infrastructure is touched

## IaC / Cost / Secrets Review

- [ ] IaC tool choice is documented, if infrastructure is touched
- [ ] Cost profile and tags are documented, if AWS resources are touched
- [ ] Secrets are stored through approved mechanisms, if secrets are touched

## Cloudflare DNS Review

- [ ] DNS records are documented, if domains are touched
- [ ] Cloudflare API token scope is least privilege, if DNS automation is touched
- [ ] User validation is linked, if DNS is touched
- [ ] Rollback records are documented, if DNS is touched

## Rollout

- 
