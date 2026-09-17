# project-info.md — QA AI Practical Assessment

## 1. Project summary
SUT: Practice Software Testing Toolshop v5.0  
UI: https://practicesoftwaretesting.com/  
API documentation: https://api.practicesoftwaretesting.com/api/documentation

Objective: validate registration/login/profile, product discovery, multi-item cart, quantity update, Cash on Delivery checkout, two-step confirmation, invoice generation/listing, and the corresponding REST API flows.

## 2. Primary AI tools
- Cursor AI: requirement decomposition, test design, Playwright implementation, debugging/refactoring.
- ChatGPT: review, traceability, risk analysis, documentation.

## 3. Context supplied to AI
- Participant guide and acceptance criteria.
- SUT URL and API documentation.
- Repository structure.
- Existing failing/placeholder test output when debugging.
- DOM snippets, Playwright traces/screenshots, and API response bodies when needed.
- No passwords, tokens, private customer data, or secrets.

## 4. Requirement analysis
### AC1 — Account
1. Register with valid mandatory data.
2. Login using registered credentials.
3. Verify profile/account.
4. Negative: invalid credentials.
5. Negative: missing mandatory registration data.
6. Logout.

### AC2 — Purchase
1. Browse/search products.
2. Add multiple products.
3. Update quantity.
4. Verify cart totals.
5. Checkout with Cash on Delivery.
6. Press confirmation twice as required by the assessment.
7. Verify generated invoice number.
8. Verify invoice is listed under My Invoices.

## 5. Risk analysis
| Risk | Impact | Likelihood | Coverage |
|---|---|---|---|
| Login failure blocks purchase | High | Medium | UI-02, API-02/03 |
| Cart loses quantity/product | High | Medium | UI-05, API-05 |
| Checkout confirmation skipped | Critical | Medium | MAN-06, UI-06 |
| Invoice not created | Critical | Medium | MAN-06, UI-06, API-06 |
| Invalid credentials accepted | High | Low/Medium | UI-03 |
| Registration validation weak | Medium | Medium | MAN-01/03, UI-01 |
| API token not enforced | Critical | Low | API-02/03 |

## 6. Test strategy
- Smoke: registration, login, product discovery, core API health, authenticated identity.
- Regression: negative login, cart update, checkout/invoice, API cart and invoice contract.
- Test level: manual + Playwright UI + Playwright API.
- Assertions focus on state changes and business outcomes, not only page navigation.
- Test data is generated dynamically where uniqueness is required.
- Cleanup: use unique users; do not hard-code credentials beyond the documented public demo account used by the SUT.

## 7. Environment/data strategy
Environment variables:
- BASE_URL
- API_URL
- DEFAULT_USER_EMAIL
- DEFAULT_USER_PASSWORD

Generated user data is unique by timestamp. Do not store real personal data or bearer tokens in Git.

## 8. AI validation/refinement
Every AI-generated test must be reviewed against:
1. acceptance criteria,
2. actual UI/API behavior,
3. Playwright locator stability,
4. positive and negative paths,
5. expected status codes/response fields,
6. test independence and cleanup.

The `ai-prompts/` directory contains the prompt plan. Actual Cursor session excerpts must be added by the author after running the prompts; do not fabricate AI history.

## 9. Evidence
The repository must contain actual execution evidence after local execution:
- `artifacts/playwright-report/`
- `artifacts/results.json`
- screenshots/traces for failures where applicable
- completed `reports/execution-evidence.md`

Do not mark tests as Passed until they have actually executed successfully.

## 10. Information not to share with AI
- real passwords
- access tokens
- API keys
- personal customer information
- internal company credentials
- private URLs not required for the assessment

## 11. Reusable AI workflow
Requirement → risk → scenario → manual case → prompt Cursor → implement → run → inspect failure → refine locator/assertion → rerun → capture evidence → update traceability → document.
