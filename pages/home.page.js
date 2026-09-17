const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/Practice Software Testing|Toolshop/i);
  }

  async search(term) {
    const input = this.page.getByPlaceholder(/search/i).first();
    await input.fill(term);
    const button = this.page.getByRole('button', { name: /^search$/i }).first();
    if (await button.count()) await button.click();
    else await input.press('Enter');
  }

  async addProducts(names) {
    for (const name of names) {
      const card = this.page.getByText(name, { exact: true }).first().locator('..');
      const add = card.getByRole('button', { name: /add to cart/i }).first();
      if (await add.count()) {
        await add.click();
      } else {
        await this.page.getByText(name, { exact: true }).first().click();
        await this.page.getByRole('button', { name: /add to cart/i }).click();
        await this.page.goBack();
      }
    }
  }

  async openCart() {
    const cart = this.page.getByRole('link', { name: /cart/i }).first();
    if (await cart.count()) return cart.click();
    await this.page.locator('a[href*="cart"]').first().click();
  }
}

module.exports = { HomePage };