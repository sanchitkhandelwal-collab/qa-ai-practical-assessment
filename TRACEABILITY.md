# Requirements → Tests Traceability

| Requirement | Manual | UI | API | Risk |
|---|---|---|---|---|
| AC1 Registration with valid details | MAN-01 | UI-01 | API-01 | High |
| AC1 Login with registered credentials | MAN-02 | UI-02 | API-02 | Critical |
| AC1 Profile verification | MAN-02 | UI-02 | API-03 | High |
| AC1 Invalid login | MAN-03 | UI-03 | API-02 | Medium |
| AC1 Logout | MAN-03 | UI-02 | — | Medium |
| AC2 Browse/search products | MAN-04 | UI-04 | API-04 | Medium |
| AC2 Add multiple products | MAN-04 | UI-05 | API-05 | Critical |
| AC2 Update quantity | MAN-05 | UI-05 | API-05 | High |
| AC2 Cash on Delivery checkout | MAN-06 | UI-06 | — | Critical |
| AC2 Two-step confirmation | MAN-06 | UI-06 | — | Critical |
| AC2 Invoice creation/number | MAN-06 | UI-06 | API-06* | Critical |
| AC2 My Invoices listing | MAN-06 | UI-06 | API-06 | High |

\*API-06 validates the invoice contract/listing. Invoice creation itself is exercised through the UI flow because the assignment explicitly requires the checkout flow and two confirmation actions.

## State model

`Logged out → Registered → Logged in → Browsing → Cart with 1+ items → Checkout → Payment method selected → Confirmation 1 → Confirmation 2 → Invoice generated → My Invoices`

Negative transitions:
- Invalid login → remains logged out + error
- Missing mandatory registration field → registration blocked + field validation
- Empty cart → checkout must not create an invoice
- Invalid/expired token → protected API returns unauthorized response
