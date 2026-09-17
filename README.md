# QA AI Practical Assessment – Toolshop

## Scope
Practice Software Testing Toolshop UI + REST API using Playwright and Cursor AI.

## Prerequisites
- Node.js 18+
- npm
- Chromium installed by Playwright
- Internet access to the Toolshop application/API

## Install
```bash
npm install
npx playwright install chromium
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

## Environment
Optional:
```bash
UI_BASE_URL=https://practicesoftwaretesting.com
API_BASE_URL=https://api.practicesoftwaretesting.com/api
```

Do not commit credentials, bearer tokens or `.env` files.

## Test Structure
- `tests/ui` – UI smoke/regression tests
- `tests/api` – API smoke/regression tests
- `pages` – Page Objects
- `utils` – API/data helpers
- `data` – controlled test data
- `FunctionalTestCase.csv` – manual test suite
- `ai-prompts` – prompt history and validation notes
- `reports` – execution evidence generated locally
- `.cursor` – Cursor rules/working guidance

## Important Invoice Note
The assessment guide explicitly calls out that invoice generation requires pressing Confirm twice in the application. The UI test therefore documents this behaviour rather than hiding it in a generic helper.

## Evidence
Playwright HTML reports, screenshots, traces and videos are generated under `reports/playwright-report` when applicable.

## Git Workflow
Use iterative commits, for example:
1. `docs: add requirements and risk analysis`
2. `test: add manual smoke and regression cases`
3. `test: add UI page objects and smoke tests`
4. `test: add API lifecycle tests`
5. `docs: add AI prompt history and execution evidence`

## Public Repository
Create a public repository and replace the placeholder URL in `SUBMISSION.md` before submission.
