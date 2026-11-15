# Security Policy

## Reporting Security Issues
Do not publish credentials, tokens, private keys, exploit details, or sensitive user data in issues or pull requests.

For a real security vulnerability, use the repository owner's private security reporting channel when available.

## Development Security Rules
- Never commit secrets.
- Use environment variables or a managed secret store for credentials.
- Validate and authorize requests server-side.
- Apply least privilege.
- Protect authentication/session flows.
- Validate external input and uploaded content.
- Review webhooks, redirects, CORS, rate limits, and external integrations.
- Do not disable security controls as a workaround.

Security-sensitive changes must be explicitly documented in the task completion report.
