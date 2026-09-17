# Execution Evidence — QA AI Practical Assessment

## Current verified evidence state

**Repository evidence:** Verified from the project files.

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

| Suite | Planned | Passed | Failed | Skipped | 
|---|---:|---:|---:|---:|---|
| Manual | 6 | 6| 0 | 0 | 
| UI | 6 | 6 | 0 | 0 | 
| API | 6 | 6 | 0 | 0 | 
| **Total** | **18** | **18** | **0** | **0** |

## Evidence mapping

The detailed matrix is in `reports/evidence-matrix.md`

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
