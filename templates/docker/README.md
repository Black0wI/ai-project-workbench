# Docker Baseline

This directory contains stack-neutral Docker starting points.

## Defaults

- PostgreSQL for relational local development.
- Redis only when a project needs cache, queues, or ephemeral coordination.
- Non-root runtime user in Dockerfiles.
- Minimal runtime images.

## Usage

Copy these templates into the concrete project stack and adapt them. Do not treat the placeholder Dockerfile as production-ready until the stack is selected.

