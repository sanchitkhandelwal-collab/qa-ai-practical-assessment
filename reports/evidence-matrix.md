# Evidence Matrix — QA AI Practical Assessment

## Evidence status

This matrix is populated from the actual repository contents: the 18 test cases in `FunctionalTestCase.csv`, the traceability mapping, and the existing UI/API implementation files.

**Execution status is intentionally `Not Run` in this committed matrix because no verified Playwright result file was available in the repository at the time this matrix was prepared.** No pass/fail result has been invented.

## Coverage matrix

| Test ID | Type | Tag | Requirement | Implementation / source | Expected evidence | Actual status |
|---|---|---|---|---|---|---|
| MAN-01 | Manual | Smoke | AC1 Registration | `FunctionalTestCase.csv` | Registration succeeds | Not Run |
| MAN-02 | Manual | Smoke | AC1 Login/Profile | `FunctionalTestCase.csv` | Profile visible | Not Run |
| MAN-03 | Manual | Regression | AC1 Invalid Login + Logout | `FunctionalTestCase.csv` | Error + logout state | Not Run |
| MAN-04 | Manual | Smoke | AC2 Browse + Multiple Products | `FunctionalTestCase.csv` | Products in cart | Not Run |
| MAN-05 | Manual | Regression | AC2 Quantity + Total | `FunctionalTestCase.csv` | Quantity and total updated | Not Run |
| MAN-06 | Manual | Regression | AC2 COD Checkout + Invoice | `FunctionalTestCase.csv` | Two confirmations + invoice | Not Run |
| UI-01 | UI | Smoke | AC1 Registration | `tests/ui/toolshop.spec.js` | Registration outcome | Not Run |
| UI-02 | UI | Smoke | AC1 Login/Profile | `tests/ui/toolshop.spec.js` | Authenticated profile | Not Run |
| UI-03 | UI | Regression | AC1 Negative Login | `tests/ui/toolshop.spec.js` | Error feedback | Not Run |
| UI-04 | UI | Smoke | AC2 Search | `tests/ui/toolshop.spec.js` | Matching products | Not Run |
| UI-05 | UI | Regression | AC2 Cart Update | `tests/ui/toolshop.spec.js` | Quantity/total update | Not Run |
| UI-06 | UI | Regression | AC2 Checkout/Invoice | `tests/ui/toolshop.spec.js` | COD + two confirmations + invoice | Not Run |
| API-01 | API | Smoke | AC1 Registration | `tests/api/toolshop.api.spec.js` | HTTP 201 + response | Not Run |
| API-02 | API | Smoke | AC1 Login/Token | `tests/api/toolshop.api.spec.js` | HTTP 200 + bearer token | Not Run |
| API-03 | API | Smoke | AC1 Identity | `tests/api/toolshop.api.spec.js` | HTTP 200 + matching email | Not Run |
| API-04 | API | Regression | AC2 Products | `tests/api/toolshop.api.spec.js` | HTTP 200 + product fields | Not Run |
| API-05 | API | Regression | AC2 Cart | `tests/api/toolshop.api.spec.js` | Cart contains selected products | Not Run |
| API-06 | API | Regression | AC2 Invoice Contract | `tests/api/toolshop.api.spec.js` | HTTP 200 + invoice contract | Not Run |

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

After the suite is actually executed, replace the `Not Run` values with the exact Playwright result for each test and commit:

- `artifacts/playwright-report/`
- `artifacts/results.json`
- Failure screenshots/traces when generated.
- Actual execution date/time and environment in `reports/execution-evidence.md`.

Do not change a result to `Passed` unless the corresponding Playwright run produced that result.
