# AI Prompts – Test Data

## Entry 1
- Prompt: Design safe reusable test data for Toolshop registration and API invoice testing without hard-coded secrets.
- AI Response Summary: Suggested runtime unique emails and fixed non-sensitive baseline address data.
- Validation Notes: Passwords/tokens are generated or held in runtime variables and are not committed as secrets.

## Entry 2
- Prompt: Generate invalid API invoice payload variations for negative validation.
- AI Response Summary: Suggested missing/blank address fields and invalid cart identifiers.
- Validation Notes: Final payload is validated against the current API contract before execution.
