# AI Prompts – Requirements and Planning

> Record the actual Cursor/ChatGPT prompts used during the assessment. The entries below are starter evidence/templates; replace or supplement them with the real session summaries.

## Entry 1
- Prompt: Extract the assessment acceptance criteria and convert them into a traceability matrix for Toolshop UI and API.
- AI Response Summary: Identified registration/login and purchase/cart/invoice as the core flows.
- Validation Notes: Compared against the participant guide and retained only explicitly supported requirements.

## Entry 2
- Prompt: Identify the highest-risk ecommerce states and suggest Smoke vs Regression coverage within 5–8 tests per type.
- AI Response Summary: Prioritized authentication and checkout/invoice for Smoke; search/cart/validation for Regression.
- Validation Notes: Human review required against live application behaviour.

## Entry 3
- Prompt: Create a compact test strategy for Playwright UI + API without expanding scope beyond the assessment.
- AI Response Summary: Recommended Page Objects for UI and APIRequestContext for service-level tests.
- Validation Notes: Maintained separate UI/API layers and shared data helpers.
