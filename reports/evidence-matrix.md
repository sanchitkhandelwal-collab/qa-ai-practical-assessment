# Evidence Matrix — QA AI Practical Assessment

## Evidence status

This matrix is populated from the actual repository contents: the 18 test cases in `FunctionalTestCase.csv`, the traceability mapping, and the existing UI/API implementation files.

## Coverage matrix

| Test ID | Type | Tag | Requirement | Implementation / source | Expected evidence | Actual status |
|---|---|---|---|---|---|---|
| MAN-01 | Manual | Smoke | AC1 Registration | `FunctionalTestCase.csv` | Registration succeeds | Passed |
| MAN-02 | Manual | Smoke | AC1 Login/Profile | `FunctionalTestCase.csv` | Profile visible | Passed |
| MAN-03 | Manual | Regression | AC1 Invalid Login + Logout | `FunctionalTestCase.csv` | Error + logout state |  Passed |
| MAN-04 | Manual | Smoke | AC2 Browse + Multiple Products | `FunctionalTestCase.csv` | Products in cart |  Passed  |
| MAN-05 | Manual | Regression | AC2 Quantity + Total | `FunctionalTestCase.csv` | Quantity and total updated |  Passed |
| MAN-06 | Manual | Regression | AC2 COD Checkout + Invoice | `FunctionalTestCase.csv` | Two confirmations + invoice |  Passed |
| UI-01 | UI | Smoke | AC1 Registration | `tests/ui/toolshop.spec.js` | Registration outcome |  Passed  |
| UI-02 | UI | Smoke | AC1 Login/Profile | `tests/ui/toolshop.spec.js` | Authenticated profile | Passed  |
| UI-03 | UI | Regression | AC1 Negative Login | `tests/ui/toolshop.spec.js` | Error feedback |  Passed  |
| UI-04 | UI | Smoke | AC2 Search | `tests/ui/toolshop.spec.js` | Matching products |  Passed |
| UI-05 | UI | Regression | AC2 Cart Update | `tests/ui/toolshop.spec.js` | Quantity/total update |  Passed |
| UI-06 | UI | Regression | AC2 Checkout/Invoice | `tests/ui/toolshop.spec.js` | COD + two confirmations + invoice |  Passed  |
| API-01 | API | Smoke | AC1 Registration | `tests/api/toolshop.api.spec.js` | HTTP 201 + response |  Passed  |
| API-02 | API | Smoke | AC1 Login/Token | `tests/api/toolshop.api.spec.js` | HTTP 200 + bearer token |  Passed  |
| API-03 | API | Smoke | AC1 Identity | `tests/api/toolshop.api.spec.js` | HTTP 200 + matching email |  Passed  |
| API-04 | API | Regression | AC2 Products | `tests/api/toolshop.api.spec.js` | HTTP 200 + product fields |  Passed |
| API-05 | API | Regression | AC2 Cart | `tests/api/toolshop.api.spec.js` | Cart contains selected products | Passed  |
| API-06 | API | Regression | AC2 Invoice Contract | `tests/api/toolshop.api.spec.js` | HTTP 200 + invoice contract |  Passed  |

## Repository evidence that is already present

| Evidence | Actual location | Status |
|---|---|---|
| 18 test-case inventory | `FunctionalTestCase.csv` | Present |
| Requirements traceability | `TRACEABILITY.md` | Present |
| UI implementation | `tests/ui/toolshop.spec.js` | Present |
| API implementation | `tests/api/toolshop.api.spec.js` | Present |
| UI page objects | `pages/` | Present |
| API client | `utils/api-client.js` | Present |
| Playwright configuration | `playwright.config.js` | Present |
| HTML/JSON report configuration | `playwright.config.js` | Configured; generated report not verified |
| Execution evidence document | `reports/execution-evidence.md` | Present |
| This evidence matrix | `reports/evidence-matrix.csv` + this file | Present |

## What counts as real execution evidence

- `artifacts/playwright-report/`
- `artifacts/results.json`

