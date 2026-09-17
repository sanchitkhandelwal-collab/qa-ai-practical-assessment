# AI Prompt Log — Requirements & Planning

## RP-01 — Requirement decomposition

### Prompt
> Read the Toolshop QA assessment requirements. Decompose AC1 and AC2 into atomic functional requirements, including positive cases, negative cases, important state transitions, risks, and traceability IDs. Keep the assessment terminology and do not invent unrelated business requirements.

### AI response summary
The requirements were decomposed into two major flows:

**AC1 — Account**
- Register with valid details.
- Login with registered credentials.
- Verify the authenticated profile/account.
- Validate invalid credentials.
- Validate mandatory registration fields.
- Logout.

**AC2 — Purchase**
- Browse/search products.
- Add multiple products to the cart.
- Update quantity.
- Validate cart total.
- Checkout using Cash on Delivery.
- Perform both required confirmation actions.
- Verify generated invoice number.
- Verify the invoice under My Invoices.

The API flow was separated into registration, login/token, authenticated identity, products, cart and invoice coverage.

### Human validation
The decomposition was checked against the assessment acceptance criteria and the evaluator feedback. The previously missing areas — invoice number, two-step confirmation and logout — were explicitly added to the requirements and traceability matrix.

### Refinement
The initial decomposition focused mainly on happy paths. It was refined to include negative login, missing mandatory registration data, empty-cart behavior, invalid/expired authentication, quantity persistence and invoice verification.

### Result
The final requirements are represented in `TRACEABILITY.md` and mapped to manual, UI and API test IDs.

---

## RP-02 — Risk and state analysis

### Prompt
> Create a risk-based test view for the Toolshop flows. Identify which failures would block the purchase journey and model the main application state transitions from logged-out user through invoice generation. Map the risks to test IDs.

### AI response summary
The risk analysis identified authentication, cart integrity, checkout confirmation and invoice creation as the main business-critical areas.

The state model produced was:

`Logged out → Registered → Logged in → Browsing → Cart with 1+ items → Checkout → Payment method selected → Confirmation 1 → Confirmation 2 → Invoice generated → My Invoices`

Negative transitions include:
- Invalid login → remains logged out + error.
- Missing registration field → registration blocked + validation.
- Empty cart → checkout must not create an invoice.
- Invalid/expired token → protected API returns unauthorized response.

### Human validation
The state transitions were compared with the assessment's required UI purchase flow and API flow. The two confirmation states were kept explicitly because they are an assessment requirement.

### Result
The state model and risk mapping were added to `TRACEABILITY.md` and `project-info.md`.

---

## RP-03 — Traceability review

### Prompt
> Review the requirement-to-test mapping and identify coverage gaps for registration, login, profile, logout, product discovery, multi-item cart, quantity update, Cash on Delivery, two-step confirmation, invoice number and My Invoices. Also check that API coverage exists for registration, login/token, products, cart and invoices.

### AI response summary
The review identified the need for explicit coverage of:
- Logout.
- Invoice number format.
- Two-step confirmation.
- Negative login.
- Quantity update.
- Authenticated API identity.

### Human validation
These cases were added to the manual, UI and API inventory where applicable.

### Result
The final traceability matrix contains coverage for all assessment-critical areas without adding unrelated scope.
