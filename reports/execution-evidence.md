# Execution Evidence — QA AI Practical Assessment

## Current verified evidence state

**Repository evidence:** Verified from the project files.
**Playwright execution result:** Not verified in the committed project.
**Reason:** No generated `artifacts/results.json` or HTML Playwright report was available when this evidence record was prepared.

No Passed/Failed execution result is claimed.

## Environment configured by the project

| Item | Value |
|---|---|
| SUT | Practice Software Testing Toolshop |
| UI URL | https://practicesoftwaretesting.com/ |
| API URL | https://api.practicesoftwaretesting.com/ |
| Framework | Playwright |
| Browser project | Chromium |
| Workers | 1 |
| HTML report | `artifacts/playwright-report/` |
| JSON report | `artifacts/results.json` |
| Failure evidence | Screenshot + trace + video configured on failure |

## Test inventory

| Suite | Cases |
|---|---:|
| Manual | 6 |
| UI | 6 |
| API | 6 |
| **Total** | **18** |

## Current result

| Suite | Planned | Passed | Failed | Skipped | Current evidence status |
|---|---:|---:|---:|---:|---|
| Manual | 6 | — | — | — | Not executed/recorded |
| UI | 6 | — | — | — | No verified Playwright report |
| API | 6 | — | — | — | No verified Playwright report |
| **Total** | **18** | **—** | **—** | **—** | No fabricated result |

## Evidence mapping

The detailed matrix is in `reports/evidence-matrix.md` and `reports/evidence-matrix.csv`.

The repository contains:
- `FunctionalTestCase.csv`
- `TRACEABILITY.md`
- `tests/ui/toolshop.spec.js`
- `tests/api/toolshop.api.spec.js`
- `pages/`
- `utils/api-client.js`
- `playwright.config.js`

## Required final execution record

Run:

```bash
npm install
npx playwright install chromium
npm test
npm run report
```

Then record the actual date, duration, counts and report paths from that run. Commit the generated report and `artifacts/results.json`.

## Sign-off

This file records repository evidence accurately and does not claim an unverified test result.
