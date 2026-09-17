class AuthPage {
  constructor(page) {
    this.page = page;
    this.email = page.getByLabel(/email/i);
    this.password = page.getByLabel(/password/i);
    this.firstName = page.getByLabel(/first name/i);
    this.lastName = page.getByLabel(/last name/i);
    this.registerButton = page.getByRole('button', { name: /register/i });
    this.loginButton = page.getByRole('button', { name: /login|sign in/i });
  }

  async register(data) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.page.getByLabel(/date of birth/i).fill(data.dob);
    await this.page.getByLabel(/postal code/i).fill(data.postalCode);
    await this.page.getByLabel(/house number/i).fill(data.houseNumber);
    await this.page.getByLabel(/phone/i).fill(data.phone);
    await this.email.fill(data.email);
    await this.password.fill(data.password);
    await this.registerButton.click();
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { AuthPage };