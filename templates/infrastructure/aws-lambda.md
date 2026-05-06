# AWS Lambda Template Notes

Use for short-lived APIs, event handlers, schedules, and async jobs with variable or low idle traffic.

## Good Fit

- Spiky traffic
- Short execution duration
- Event-driven workflows
- Low idle usage

## Watch Outs

- Cold starts
- Runtime limits
- Connection pooling with PostgreSQL
- Payload and timeout limits

## Common Services

- Lambda
- API Gateway
- EventBridge
- SQS
- CloudWatch Logs
- AWS Secrets Manager

## Validation Required

- User-approved AWS option matrix
- Cost profile
- Rollback path

