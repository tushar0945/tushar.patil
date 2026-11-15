---
applyTo: "**/*"
---

# General Repository Engineering Instructions

- Follow `AGENTS.md`.
- Inspect existing code and configuration before creating new patterns.
- Prefer existing dependencies and utilities.
- Keep changes focused and backwards compatible.
- Never commit secrets or environment-specific credentials.
- Add tests for meaningful behavior changes.
- Run applicable lint, typecheck, tests, and build checks before completion.
- Never claim validation passed unless it was actually executed.
- Do not remove or weaken tests/security controls to bypass failures.
