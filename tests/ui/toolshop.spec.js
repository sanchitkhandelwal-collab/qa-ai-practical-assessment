const { test, expect } = require('@playwright/test');
const { AuthPage } = require('../../pages/auth.page');
const { HomePage } = require('../../pages/home.page');
const { CheckoutPage } = require('../../pages/checkout.page');
const { validUser, defaultUser } = require('../../utils/test-data');

test.describe('Toolshop UI', () => {
  test('UI-01 @Smoke registration accepts valid data and reaches login', async ({ page }) => {
    const auth = new AuthPage(page);
    await auth.gotoRegister();
    const user = validUser();
    await auth.register(user);
    await expect(page).toHaveURL(/auth\/login/);
  });

  test('UI-02 @Smoke valid login exposes authenticated account', async ({ page }) => {
    const auth = new AuthPage(page);
    const user = defaultUser();
    await auth.gotoLogin();
    await auth.login(user.email, user.password);
    await expect(page).not.toHaveURL(/auth\/login/);
    await expect(page.locator('body')).toContainText(/profile|account|logout/i);
  });

  test('UI-03 @regression invalid login shows validation/error feedback', async ({ page }) => {
    const auth = new AuthPage(page);
    await auth.gotoLogin();
    await auth.login('invalid@example.com', 'WrongPassword1!');
    await expect(page.locator('body')).toContainText(/invalid|incorrect|wrong|error/i);
  });

  test('UI-04 @Smoke product search returns matching product', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.search('pliers');
    await expect(page.locator('body')).toContainText(/pliers/i);
  });

  test('UI-05 @regression add multiple products and update quantity', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await page.getByText(/Combination Pliers/i).first().click();
    await page.getByRole('button', { name: /add to cart/i }).click();
    await page.goBack();

    await page.getByText(/Hammer/i).first().click();
    await page.getByRole('button', { name: /add to cart/i }).click();

    await home.openCart();
    await expect(page.locator('body')).toContainText(/Combination Pliers/i);
    await expect(page.locator('body')).toContainText(/Hammer/i);

    const quantity = page.locator('input[type="number"]').first();
    if (await quantity.count()) {
      await quantity.fill('2');
      await quantity.press('Enter');
      await expect(quantity).toHaveValue('2');
    }
  });

  test('UI-06 @regression checkout Cash on Delivery, confirm twice, verify invoice', async ({ page }) => {
    const auth = new AuthPage(page);
    const home = new HomePage(page);
    const checkout = new CheckoutPage(page);
    const user = defaultUser();

    await auth.gotoLogin();
    await auth.login(user.email, user.password);
    await home.goto();

    await page.getByText(/Combination Pliers/i).first().click();
    await page.getByRole('button', { name: /add to cart/i }).click();
    await page.goto('/checkout');

    await checkout.confirmTwice();
    await checkout.verifyInvoice();

    await page.goto('/account/invoices');
    await expect(page.locator('body')).toContainText(/INV[-\s]?\d+/i);
  });
});