# AI Prompt Log — Test Data

## DATA-01 — Registration data

### Prompt
> Design test data for a public demo ecommerce application. Registration must use unique email addresses so repeated executions do not collide. Avoid real personal information and never commit secrets.

### AI response summary
A timestamp-based unique email strategy was selected:

`qa.ai.<timestamp>@example.com`

The remaining registration values use synthetic QA data.

### Human validation
The generated values are deterministic enough for test execution while remaining unique between runs. The data does not represent real customer information.

### Result
The strategy is implemented in `utils/test-data.js` using `uniqueEmail()` and `validUser()`.

---

## DATA-02 — Authentication data

### Prompt
> Design a safe authentication-data strategy for the Toolshop assessment. Use environment variables for credentials where possible and do not commit bearer tokens, API keys or private credentials.

### AI response summary
The project uses:
- `DEFAULT_USER_EMAIL`
- `DEFAULT_USER_PASSWORD`
- `BASE_URL`
- `API_URL`

A documented demo account can be supplied through environment variables rather than embedding private credentials in source code.

### Human validation
`.env` is excluded by `.gitignore`. API tokens are generated during execution and kept in memory only.

### Result
The configuration is documented in `README.md` and `project-info.md`.

---

## DATA-03 — Cart and invoice data

### Prompt
> Identify data dependencies for cart, checkout and invoice tests. Make the tests repeatable and avoid depending on a fixed cart state left by another test.

### AI response summary
Cart tests select products during the test and create their own cart context where supported. Product IDs for API tests are retrieved from the products endpoint instead of relying exclusively on hard-coded IDs.

For registration, unique users prevent duplicate-email collisions.

### Human validation
The approach was reviewed for test independence and repeatability.

### Result
Product discovery and cart creation are performed within the API test flow. UI tests add products as part of their own setup.
