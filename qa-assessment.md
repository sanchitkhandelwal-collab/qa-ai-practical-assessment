# QA Assessment Rules

- Use short, single-purpose prompts.
- Treat AI output as draft material and validate against the live SUT.
- Keep UI and API tests separate.
- Prefer stable accessible selectors over brittle CSS/XPath.
- Never commit passwords, tokens, cookies or customer PII.
- Keep the suite within the assessment's 5–8 cases per type.
- Record meaningful prompt summaries in `ai-prompts/`.
- Do not claim a test passed until it has actually executed successfully.
