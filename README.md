# QA AI Practical Assessment — Toolshop

This is a completed assessment-ready project structure for the Practice Software Testing Toolshop. It addresses the review findings: detailed manual CSV, complete checkout/invoice path, smoke/regression tagging, traceability, real Playwright execution artifacts, and phase-wise AI prompt documentation.

## Important
The code is prepared for execution but this environment cannot truthfully claim a live Playwright run against the external SUT. Run it locally and only then change `Not Run` to `Passed` in the evidence/CSV.

## Prerequisites
- Node.js 18+
- Git
- Cursor AI
- Internet access

## Setup

```bash
npm install
npx playwright install chromium
```

Optional `.env` values:

```text
BASE_URL=https://practicesoftwaretesting.com
API_URL=https://api.practicesoftwaretesting.com
DEFAULT_USER_EMAIL=customer2@practicesoftwaretesting.com
DEFAULT_USER_PASSWORD=welcome01
```

## Run

```bash
npm test
npm run test:smoke
npm run test:regression
npm run test:ui
npm run test:api
npm run report
```

## Test inventory
- Manual: MAN-01 to MAN-06
- UI: UI-01 to UI-06
- API: API-01 to API-06
- Tags: `@Smoke` and `@regression`

## Assessment coverage
- AC1 registration
- AC1 login/profile
- AC1 invalid login
- AC1 logout
- AC2 browse/search
- AC2 multiple products
- AC2 quantity update
- AC2 Cash on Delivery
- AC2 two confirmation steps
- AC2 invoice number
- AC2 My Invoices
- API bearer token
- API products
- API cart
- API invoice listing/contract

## Evidence workflow
1. Run the suite.
2. Fix any environment/SUT-specific locator or API differences.
3. Re-run until all intended assessment cases pass.
4. Commit `artifacts/playwright-report`, `artifacts/results.json`, and screenshots/traces if required by your Git policy.
5. Populate `reports/execution-evidence.md` with the actual run date, counts, and report location.
6. Update `FunctionalTestCase.csv` statuses from `Not Run` to the actual result.
7. Commit in multiple meaningful Git commits.

## Suggested iterative commits
```text
docs: add requirement analysis and traceability
test: add detailed manual cases
test: add smoke UI automation
test: add regression UI checkout and invoice flow
test: add API registration login cart invoice checks
docs: add real execution evidence
fix: refine selectors and assertions after execution
```

## Folder structure
```text
qa-ai-practical-assessment-fixed/
├── FunctionalTestCase.csv
├── TRACEABILITY.md
├── project-info.md
├── README.md
├── SUBMISSION.md
├── package.json
├── playwright.config.js
├── pages/
├── tests/ui/
├── tests/api/
├── utils/
├── test-data/
├── ai-prompts/
├── .cursor/rules/
├── reports/
└── artifacts/
```

## Official references
- SUT: https://practicesoftwaretesting.com/
- API docs: https://api.practicesoftwaretesting.com/api/documentation
