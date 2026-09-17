# AI Prompt Log — Automation & Debugging

## AD-01 — UI implementation

### Prompt
> Implement the Toolshop UI tests in Playwright using page objects. Prefer accessible labels and roles. Add assertions for business outcomes such as authentication state, cart contents, quantity and invoice number. Do not use arbitrary waits.

### AI response summary
The automation was separated into:
- `AuthPage`
- `HomePage`
- `CheckoutPage`

The tests were separated into Smoke and regression groups and retain UI test IDs such as UI-01 through UI-06.

### Human validation
The generated structure was reviewed for maintainability and traceability. Assertions were strengthened where navigation alone was insufficient.

### Result
The page objects are stored under `pages/` and UI tests under `tests/ui/`.

---

## AD-02 — Checkout refinement

### Prompt
> Review the checkout automation against the assessment requirement: Cash on Delivery must be selected, the confirmation action must occur twice, and the generated invoice must be verified. Strengthen the test so it validates the business outcome rather than only navigation.

### AI response summary
The checkout flow was changed to:
1. Select Cash on Delivery.
2. Perform the first proceed/confirmation action.
3. Perform the second confirmation action.
4. Verify an invoice is displayed.
5. Verify an invoice number matching the expected `INV` format.
6. Open My Invoices and verify the invoice is listed.

### Human validation
This directly addresses the evaluator's previous finding that UI-05/checkout was stubbed and invoice verification was missing.

### Result
The implementation is in `pages/checkout.page.js` and `tests/ui/toolshop.spec.js`.

---

## AD-03 — API contract assertions

### Prompt
> Review the API automation so each workflow checks the HTTP status and important response fields. Login must produce a bearer token, authenticated identity must match the logged-in user, products must contain IDs/prices, cart must contain selected products, and invoices must expose an invoice number when data exists.

### AI response summary
Assertions were added for:
- Registration HTTP 201.
- Login HTTP 200 and non-empty token.
- `/users/me` HTTP 200 and matching email.
- Products HTTP 200, non-empty data and product fields.
- Cart creation and product count.
- Invoice list response and invoice-number format when invoices exist.

### Human validation
The response contract was reviewed against the documented API scope and kept focused on business-relevant fields.

### Result
The implementation is in `tests/api/toolshop.api.spec.js`.

---

## AD-04 — Failure-driven debugging workflow

### Prompt
> When a Playwright test fails, inspect the exact error, locator/response, trace and screenshot. Identify the smallest root-cause fix. Do not hide failures with arbitrary waits or excessive retries. After the fix, rerun the affected test and then the full suite.

### AI response summary
The debugging workflow was documented as:

`Failure → inspect error → inspect trace/screenshot → identify root cause → smallest fix → focused rerun → full-suite rerun → record evidence`

### Human validation
This workflow is intentionally included so future Cursor sessions can record actual failure/refinement cycles without inventing results.

### Result
The workflow is encoded in `.cursor/rules/qa-assessment.md` and `reports/execution-evidence.md`.
