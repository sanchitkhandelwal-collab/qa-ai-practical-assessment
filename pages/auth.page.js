const { expect } = require('@playwright/test');

class AuthPage {
  constructor(page) {
    this.page = page;
    this.email = page.getByLabel(/email/i).first();
    this.password = page.getByLabel(/password/i).first();
  }

  async gotoLogin() {
    await this.page.goto('/auth/login');
    await expect(this.page).toHaveURL(/auth\/login/);
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.page.getByRole('button', { name: /login/i }).click();
  }

  async gotoRegister() {
    await this.page.goto('/auth/register');
    await expect(this.page).toHaveURL(/auth\/register/);
  }

  async register(user) {
    const fill = async (pattern, value) => {
      const locator = this.page.getByLabel(pattern).first();
      await locator.fill(value);
    };

    await fill(/first name/i, user.firstName);
    await fill(/last name/i, user.lastName);
    await fill(/date of birth|dob/i, user.dob);

    const country = this.page.getByLabel(/country/i).first();
    if (await country.count()) {
      try { await country.selectOption({ label: user.country }); } catch {}
    }

    await fill(/postcode|postal code/i, user.postalCode);
    await fill(/house number/i, user.houseNumber);
    await fill(/^street/i, user.street);
    await fill(/^city/i, user.city);
    await fill(/^state/i, user.state);
    await fill(/phone/i, user.phone);
    await fill(/email/i, user.email);
    await fill(/^password/i, user.password);

    await this.page.getByRole('button', { name: /register/i }).click();
  }
}

module.exports = { AuthPage };