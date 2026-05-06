# AI Readiness Checklist

Use this before shipping model, prompt, agent, or tool behavior.

- [ ] Inputs and outputs are defined with schemas or examples.
- [ ] Prompt artifacts are versioned.
- [ ] Tool permissions are scoped to the minimum needed.
- [ ] Untrusted content is isolated from system/developer instructions.
- [ ] Sensitive data handling and redaction are defined.
- [ ] Human review exists for irreversible or high-impact actions.
- [ ] Evals cover happy path, edge cases, and known failure modes.
- [ ] Logs/traces support debugging without leaking secrets.
- [ ] Fallback behavior is defined for provider, model, or tool failure.
- [ ] Rollback path is documented.

