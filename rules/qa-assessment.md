# QA Assessment Cursor Rules

- Use the participant acceptance criteria as the source of truth.
- Do not invent test results.
- Do not convert Not Run to Passed without an actual execution.
- Prefer role/label/test-id locators; avoid brittle CSS/XPath where possible.
- No arbitrary `waitForTimeout`.
- Every automated test must have a business assertion.
- Keep UI and API tests independent.
- Never hard-code secrets.
- When debugging, use the exact failure output and make the smallest maintainable change.
- Keep Smoke fast and critical; keep regression broader.
- Preserve traceability IDs in test titles.
