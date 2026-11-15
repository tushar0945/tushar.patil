# AGENTS.md — Repository AI Agent Contract

## Purpose
This repository is designed to be safely developed by human developers and AI coding agents. These rules are mandatory for every AI agent working in this repository.

## 1. First-Run Protocol
Before changing code:
1. Read this file completely.
2. Read `.github/copilot-instructions.md` when present.
3. Read any applicable files under `.github/instructions/`.
4. Read `CLAUDE.md` or `GEMINI.md` when using those agents.
5. Inspect the repository structure and existing configuration before inventing architecture.
6. Identify the package manager, runtime, framework, build command, test command, lint command, and type-check command from the actual repository files.
7. Never assume a dependency, script, environment variable, API contract, or directory exists without verifying it.

## 2. Core Engineering Rules
- Preserve existing behavior unless the task explicitly requires a behavior change.
- Prefer small, focused, reversible changes.
- Reuse existing utilities, components, types, services, and patterns before creating new abstractions.
- Do not introduce a new library when the existing stack can solve the problem cleanly.
- Keep TypeScript strongly typed when TypeScript is used; avoid `any` unless there is a documented reason.
- Keep secrets, credentials, tokens, private keys, and production configuration out of source control.
- Never hard-code environment-specific secrets or URLs.
- Validate all external input at trust boundaries.
- Handle errors explicitly; do not silently swallow failures.
- Do not remove tests or weaken validation merely to make a change pass.
- Do not modify unrelated files just for formatting or cleanup.
- Do not rewrite working architecture without a clear requirement.

## 3. Before Coding
Write a short internal plan:
- What is changing?
- Which files are affected?
- What existing code/config is being reused?
- What could break?
- How will the change be validated?

For ambiguous requirements, inspect the codebase first. Ask the human only when a safe, evidence-based interpretation is not possible.

## 4. Implementation
- Follow the repository's existing naming, formatting, folder, and architectural conventions.
- Keep functions/modules cohesive and avoid unnecessary complexity.
- Maintain backwards compatibility unless explicitly told otherwise.
- Update documentation when behavior, setup, APIs, architecture, or developer workflow changes.
- Add or update tests for meaningful behavior changes and bug fixes.
- For database/schema changes, include the appropriate migration and verify affected queries/indexes.
- For API changes, update validation, types/contracts, error handling, and relevant documentation/tests.
- For UI changes, preserve accessibility, responsive behavior, loading/error/empty states, and existing design conventions.

## 5. Validation Gate
Before declaring work complete:
1. Run the repository's relevant formatter/linter.
2. Run type checking when available.
3. Run targeted tests for changed behavior.
4. Run the broader test suite when practical.
5. Run the production/build command when relevant.
6. Inspect the final diff for accidental changes, secrets, debug code, TODOs, and generated files.
7. If a check cannot be run, state exactly why and what remains unverified.

Never claim a test/build passed unless it was actually run.

## 6. Git Rules
- Use clear, conventional commit messages.
- Keep commits focused and reviewable.
- Do not force-push or rewrite shared history unless explicitly requested.
- Do not commit secrets, local environment files, credentials, logs, caches, or generated artifacts unless the repository explicitly requires them.
- Prefer a feature branch for non-trivial work when branch/PR workflow is available.
- Never merge or close a PR unless explicitly authorized.

## 7. Security Rules
Treat security as a default requirement, not an optional enhancement.
- Never expose credentials or sensitive user data in logs.
- Use least privilege for permissions.
- Validate authorization server-side; never trust UI-only checks.
- Protect authentication/session flows against common attacks.
- Avoid SQL/NoSQL/command injection by using safe parameterization and validated inputs.
- Review file uploads, webhooks, redirects, CORS, rate limits, and external integrations carefully.
- Do not disable security controls to make development easier.
- Flag security-sensitive changes clearly.

## 8. AI-Agent Boundaries
AI agents must not:
- fabricate test results, API responses, credentials, screenshots, or implementation details;
- invent project requirements;
- silently change public contracts;
- delete working code without understanding its purpose;
- add dependencies without checking whether an existing dependency already solves the need;
- store private conversation/user data in the repository;
- make production/destructive changes without explicit authorization.

## 9. Completion Report
Every completed task should report:
- What changed
- Files/modules changed
- Tests/checks run and their results
- Any limitations or remaining risks
- Any follow-up work that is genuinely required

This file is a living contract. Update it when repository-wide engineering rules materially change.
