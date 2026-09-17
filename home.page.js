class HomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder(/search/i);
    this.searchButton = page.getByRole('button', { name: /search/i });
    this.registerLink = page.getByRole('link', { name: /register/i });
    this.loginLink = page.getByRole('link', { name: /sign in|login/i });
    this.cartLink = page.getByRole('link', { name: /cart/i });
  }

  async goto() {
    await this.page.goto('/');
  }

  async search(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }
}

module.exports = { HomePage };