# AI Prompts – Automation and Debugging

## Entry 1
- Prompt: Create a maintainable Playwright Page Object for Toolshop authentication.
- AI Response Summary: Proposed a compact AuthPage with registration and login methods.
- Debugging Outcome: Selectors must be verified against the live DOM before being considered stable.

## Entry 2
- Prompt: Diagnose a failed invoice test where confirmation is required twice.
- AI Response Summary: Highlighted the explicit assessment requirement and recommended capturing the second confirmation as a business-flow step.
- Debugging Outcome: Keep the behaviour visible in the test rather than burying it in an opaque helper.
