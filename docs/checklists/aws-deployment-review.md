# AWS Deployment Review Checklist

Use this before approving infrastructure or deployment changes.

- [ ] AWS service options were proposed.
- [ ] User validated the selected option.
- [ ] Cost profile is documented.
- [ ] Always-on resources are justified.
- [ ] Dev/staging/prod cost differences are considered.
- [ ] Secrets use AWS-managed storage or environment-specific secret handling.
- [ ] IAM permissions are least privilege.
- [ ] Logs, metrics, and alarms are defined.
- [ ] Rollback path is documented.
- [ ] Resource tags include project, environment, owner, and cost center where relevant.
- [ ] Data storage choices match retention and privacy requirements.
- [ ] Network exposure is intentional and minimal.
