# Project Info

## Primary AI Tool(s) Used
- Cursor AI
- ChatGPT for requirement review, planning and documentation support

## Application Under Test
Practice Software Testing Toolshop – UI and REST API:
- UI: https://practicesoftwaretesting.com/
- API documentation: https://api.practicesoftwaretesting.com/api/documentation

## Assessment Dates
- Start Date: 2026-09-17
- Submission Date: TBD

## Project Summary
This project validates the Toolshop ecommerce journey from product discovery through cart and checkout/invoice, together with the supporting API lifecycle. The Core scope intentionally stays small and traceable: 6 manual cases, 6 UI cases and 6 API cases, split across Smoke and Regression.

## Setup Summary
1. **Context provided to AI:** the assessment guide, application URLs, acceptance criteria, expected repository structure, scope limits, and observed UI/API behaviour.
2. **Requirement analysis:** convert ACs into test objectives, risks, state transitions and traceability IDs before generating code.
3. **Test planning:** Smoke covers registration/login and the critical purchase path; Regression covers search/filter/cart/checkout and API negative/validation paths.
4. **Manual test design:** include positive, negative and edge cases; review every AI-generated case against the live application and API contract.
5. **Automation design:** Playwright Test with Page Objects for UI and APIRequestContext for API. Shared data and environment configuration are isolated from test logic.
6. **Validation/refinement:** selectors are checked against the live DOM; API paths/payloads are checked against the published Swagger contract; assertions are kept specific to observable behaviour.
7. **Test data:** unique email addresses are generated at runtime. API payloads are kept in data builders and environment variables are used for secrets.
8. **Debugging:** failed tests are investigated using Playwright trace, screenshot, video and request/response logging before changing assertions.
9. **Data not shared unnecessarily:** passwords, tokens, cookies, customer PII and production secrets are never committed. `.env` is ignored.
10. **Reuse:** the same workflow can be applied to any ecommerce/API project: requirements → risk → manual cases → automation → execution evidence → prompt history → review.

## Risk Analysis
| Risk | Impact | Coverage |
|---|---|---|
| Registration/login failure | High | UI Smoke + API Smoke |
| Product cannot be searched/selected | High | UI Regression |
| Cart quantity/update failure | High | UI Regression + API Regression |
| Checkout/invoice failure | Critical | UI Smoke + API Smoke |
| Invalid API payload accepted | Medium/High | API Regression |
| Test data collision | Medium | Runtime unique data |

## Traceability
| Requirement | Manual | UI | API |
|---|---|---|---|
| AC1 Registration & Login | MAN-01, MAN-02 | UI-01, UI-02 | API-01, API-02 |
| AC2 Purchase / Cart / Invoice | MAN-03..06 | UI-03..06 | API-03..06 |

## AI Validation Rule
AI output is treated as a draft. No generated test case or script is accepted without a human check against the application, the API contract, expected business behaviour, and maintainability requirements.
