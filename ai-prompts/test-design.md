# AI Prompt Log — Test Design

## TD-01 — Manual test design

### Prompt
> Create a compact manual test suite for AC1 and AC2. Use six cases. Each case must have a precondition, test data, exact steps, expected results, priority and Smoke/regression classification. Include registration, login/profile, invalid login/logout, multi-product cart, quantity update and checkout/invoice with Cash on Delivery and two confirmation steps.

### AI response summary
The six manual cases were structured as:

| ID | Coverage | Classification |
|---|---|---|
| MAN-01 | Valid registration | Smoke |
| MAN-02 | Login and profile | Smoke |
| MAN-03 | Invalid login and logout | Regression |
| MAN-04 | Browse and multi-product cart | Smoke |
| MAN-05 | Quantity and total update | Regression |
| MAN-06 | COD checkout, two confirmations and invoice | Regression |

### Human validation
The cases were checked for independence, business-value assertions and traceability to AC1/AC2.

### Refinement
The checkout case was strengthened to explicitly require both confirmation actions and invoice-number verification instead of only checking that checkout navigation completed.

### Result
The detailed cases are stored in `FunctionalTestCase.csv`.

---

## TD-02 — UI automation design

### Prompt
> Convert the core manual scenarios into six Playwright UI tests. Use page objects, stable accessible locators where available, independent test data, and business assertions. Separate Smoke and regression tests. Do not use arbitrary sleeps.

### AI response summary
The UI suite was organized around:
- Registration.
- Login/profile.
- Negative login.
- Product search.
- Multi-product cart and quantity update.
- Checkout, Cash on Delivery, two confirmations and invoice verification.

Page objects were separated into authentication, home/product interaction and checkout responsibilities.

### Human validation
The test structure was checked for separation of concerns and traceability IDs.

### Refinement
The checkout flow was changed from a stub to an explicit business flow. Assertions were added for invoice visibility and invoice-number format.

### Result
The implementation is in `tests/ui/toolshop.spec.js` and the page objects are under `pages/`.

---

## TD-03 — API automation design

### Prompt
> Design six Playwright API tests for the Toolshop. Cover registration, login and bearer token, authenticated identity, products, cart creation/product addition, and invoice listing. Assert HTTP status and important response fields rather than only checking that a request completed.

### AI response summary
The API suite was organized as:
- API-01 registration.
- API-02 login/token.
- API-03 authenticated identity.
- API-04 product retrieval.
- API-05 cart creation and product addition.
- API-06 invoice listing and invoice contract.

### Human validation
The design was checked against the API acceptance criteria and kept within the six-case limit.

### Result
The implementation is in `tests/api/toolshop.api.spec.js`.
