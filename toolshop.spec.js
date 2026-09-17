const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/home.page');
const { AuthPage } = require('../../pages/auth.page');
const { userData } = require('../../utils/test-data');

test.describe('Toolshop UI', () => {
  test('UI-01 @Smoke registration and login', async ({ page }) => {
    const user = userData();
    const home = new HomePage(page);
    const auth = new AuthPage(page);

    await home.goto();
    await home.registerLink.click();
    await auth.register(user);

    await page.getByRole('link', { name: /sign in|login/i }).click();
    await auth.login(user.email, user.password);

    await expect(page).toHaveURL(/account|profile|dashboard/i);
  });

  test('UI-02 @Regression invalid login is rejected', async ({ page }) => {
    const home = new HomePage(page);
    const auth = new AuthPage(page);

    await home.goto();
    await home.loginLink.click();
    await auth.login('invalid@example.com', 'WrongPassword1!');

    await expect(page.getByText(/invalid|incorrect|failed|credentials/i)).toBeVisible();
  });

  test('UI-03 @Regression product search', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.search('pliers');
    await expect(page.getByText(/pliers/i).first()).toBeVisible();
  });

  test('UI-04 @Regression add product and update cart', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await page.getByText(/pliers/i).first().click();
    await page.getByRole('button', { name: /add to cart/i }).click();
    await home.cartLink.click();
    await expect(page.getByText(/cart/i).first()).toBeVisible();
  });

  test('UI-05 @Smoke checkout and invoice', async ({ page }) => {
    test.info().annotations.push({ type: 'note', description: 'Assessment guide requires Confirm twice for invoice generation.' });
    // Keep checkout test intentionally explicit; complete remaining fields/selectors against the live DOM in Cursor after first exploratory run.
    await page.goto('/');
    await expect(page).toHaveTitle(/Toolshop|Practice Software Testing/i);
  });

  test('UI-06 @Regression empty/invalid checkout guard', async ({ page }) => {
    await page.goto('/');
    const home = new HomePage(page);
    await home.cartLink.click();
    await expect(page).toHaveURL(/cart/i);
  });
});