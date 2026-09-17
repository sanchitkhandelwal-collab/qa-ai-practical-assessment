# Execution Evidence — QA AI Practical Assessment

## Execution status

**Evidence status:** Prepared for final local execution.

> Do not fabricate execution results. Final Passed/Failed/Skipped counts, dates, screenshots, traces and report references must come from an actual Playwright run against the Toolshop SUT.

## Environment

| Item | Value |
|---|---|
| SUT | Practice Software Testing Toolshop |
| UI URL | https://practicesoftwaretesting.com/ |
| API URL | https://api.practicesoftwaretesting.com/ |
| Framework | Playwright |
| Runtime | Node.js 18+ |
| Browser | Chromium |
| AI tools | Cursor AI, ChatGPT |

## Test inventory

| Suite | Cases | Tags | Coverage |
|---|---:|---|---|
| Manual | 6 | Smoke / regression | Registration, login, logout, cart, quantity, checkout/invoice |
| UI | 6 | @Smoke / @regression | Registration, login, negative login, search, cart, checkout/invoice |
| API | 6 | @Smoke / @regression | Registration, login/token, identity, products, cart, invoices |
| **Total** | **18** | | |

## Execution commands

```bash
npm install
npx playwright install chromium
npm test
npm run test:smoke
npm run test:regression
npm run report
```

## Run 1 — Baseline

**Date/time:** To be populated from actual run  
**Command:** `npm test`  
**Environment:** To be populated  
**Browser:** Chromium  

| Result | Count |
|---|---:|
| Planned | 18 |
| Passed | To be populated |
| Failed | To be populated |
| Skipped | To be populated |

**Duration:** To be populated  
**HTML report:** `artifacts/playwright-report/`  
**JSON report:** `artifacts/results.json`

### Baseline failures

Record only failures actually observed:

| Test ID | Actual failure | Root cause | Evidence | Fix |
|---|---|---|---|---|
| To be populated | To be populated | To be populated | Screenshot/trace | To be populated |

## Run 2 — After fixes

**Date/time:** To be populated from actual run  
**Command:** `npm test`  
**Environment:** To be populated  
**Browser:** Chromium  

| Result | Count |
|---|---:|
| Planned | 18 |
| Passed | To be populated |
| Failed | To be populated |
| Skipped | To be populated |

**Duration:** To be populated  
**HTML report:** `artifacts/playwright-report/`  
**JSON report:** `artifacts/results.json`

### Fix validation

| Test ID | Fix validated | Re-run result | Evidence |
|---|---|---|---|
| To be populated | To be populated | To be populated | Screenshot/trace/report |

## Final execution summary

Populate this table only after the final actual run.

| Suite | Planned | Passed | Failed | Skipped | Evidence |
|---|---:|---:|---:|---:|---|
| Manual | 6 | To be populated | To be populated | To be populated | `FunctionalTestCase.csv` |
| UI | 6 | To be populated | To be populated | To be populated | `artifacts/playwright-report/` |
| API | 6 | To be populated | To be populated | To be populated | `artifacts/playwright-report/` |
| **Total** | **18** | **To be populated** | **To be populated** | **To be populated** | |

## Assessment-specific validation

The final run must explicitly verify:

- Registration with valid details.
- Login using registered credentials.
- Profile/account verification.
- Invalid-login error handling.
- Logout.
- Product browse/search.
- Adding multiple products.
- Quantity update and cart total.
- Cash on Delivery selection.
- **Both required confirmation actions.**
- Generated invoice number.
- My Invoices listing.
- API registration.
- API login and bearer token.
- Authenticated API identity.
- Product retrieval.
- API cart creation and product addition.
- API invoice listing/contract.

## Evidence checklist

- [ ] Actual Playwright HTML report committed.
- [ ] Actual `artifacts/results.json` committed.
- [ ] Failure screenshots/traces committed where applicable.
- [ ] Actual execution date/time entered.
- [ ] Actual environment/browser entered.
- [ ] Actual counts entered.
- [ ] `FunctionalTestCase.csv` statuses updated from `Not Run` to actual results.
- [ ] Real Cursor prompt iterations documented.
- [ ] No fabricated Passed result.
- [ ] No `TODO`/`TBD` remains in final execution evidence.
- [ ] Multiple meaningful Git commits exist.

## Final sign-off

**Final command:** To be populated  
**Final date/time:** To be populated  
**Total:** To be populated  
**Passed:** To be populated  
**Failed:** To be populated  
**Skipped:** To be populated  

**Final result:** Populate only after the complete suite has actually executed successfully.
