const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/checkout');
    await expect(this.page).toHaveURL(/checkout/);
  }

  async chooseCashOnDelivery() {
    const label = this.page.getByText(/cash on delivery/i).first();
    if (await label.count()) {
      await label.click();
    } else {
      const radio = this.page.locator('input[type="radio"]').last();
      await radio.check();
    }
  }

  async continueOrProceed() {
    const button = this.page.getByRole('button', { name: /proceed|continue|next|confirm/i }).last();
    await button.click();
  }

  async confirmTwice() {
    await this.chooseCashOnDelivery();
    await this.continueOrProceed();
    await this.continueOrProceed();
  }

  async verifyInvoice() {
    await expect(this.page.getByText(/invoice/i).first()).toBeVisible();
    const body = await this.page.locator('body').innerText();
    expect(body).toMatch(/INV[-\s]?\d+/i);
  }
}

module.exports = { CheckoutPage };