# AI Prompt Log — Documentation & Summary

## DOC-01 — Repository documentation review

### Prompt
> Review the Toolshop QA assessment repository for traceability from requirements to manual cases to UI/API automation. Identify documentation gaps without inventing execution results.

### AI response summary
The documentation should clearly expose:
- Project scope and acceptance criteria.
- Risk analysis.
- Traceability matrix.
- Manual test cases.
- UI/API test inventory.
- Setup and execution commands.
- AI workflow and prompt history.
- Execution evidence.
- Submission checklist.

### Human validation
The repository structure was checked against the assessment submission requirements and evaluator feedback.

### Result
`README.md`, `project-info.md`, `TRACEABILITY.md`, `FunctionalTestCase.csv` and the `ai-prompts/` directory provide the documentation structure.

---

## DOC-02 — Evidence documentation

### Prompt
> Create an execution-evidence document that records the actual date, environment, command, total/passed/failed/skipped counts, failures, fixes, screenshots/traces and report locations. Never invent test results.

### AI response summary
The evidence document was structured into:
- Environment.
- Test inventory.
- Baseline execution.
- Defect/fix records.
- Retest execution.
- Final suite summary.
- Assessment-specific validation.
- Final sign-off.

### Human validation
The document intentionally leaves execution-specific values for the actual local Playwright run. This prevents the common assessment failure of claiming tests passed without evidence.

### Result
The completed structure is stored in `reports/execution-evidence.md`.

---

## DOC-03 — Final submission review

### Prompt
> Perform a final QA assessment readiness review. Check for missing manual CSV, checkout/invoice coverage, logout, traceability, Smoke/regression tags, execution report structure, AI prompt iteration records and Git submission requirements.

### AI response summary
The review identified the following final submission requirements:
- `FunctionalTestCase.csv` must be committed.
- UI checkout must include Cash on Delivery, two confirmations and invoice verification.
- Logout and invalid-login coverage must exist.
- UI/API tests need meaningful assertions.
- Execution evidence must contain real local results.
- AI prompt files should record actual iteration and validation.
- Git history should contain multiple meaningful commits.

### Human validation
The repository was updated to cover these structural and design requirements. Actual execution counts and real Cursor session output must remain evidence from the author's local workflow.

### Result
The final checklist is available in `SUBMISSION.md`.
