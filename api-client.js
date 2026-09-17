const { expect } = require('@playwright/test');

class ToolshopApi {
  constructor(request) {
    this.request = request;
    this.baseURL = process.env.API_BASE_URL || 'https://api.practicesoftwaretesting.com/api';
    this.token = null;
  }

  async register(user) {
    const response = await this.request.post(`${this.baseURL}/users/register`, { data: user });
    return response;
  }

  async login(email, password) {
    const response = await this.request.post(`${this.baseURL}/users/login`, {
      data: { email, password }
    });
    return response;
  }

  authHeaders() {
    if (!this.token) throw new Error('API token has not been set');
    return { Authorization: `Bearer ${this.token}` };
  }

  async createCart() {
    return this.request.post(`${this.baseURL}/carts`, { headers: this.authHeaders() });
  }

  async products(params = '') {
    return this.request.get(`${this.baseURL}/products${params}`, {
      headers: this.token ? this.authHeaders() : {}
    });
  }

  async cart(cartId) {
    return this.request.get(`${this.baseURL}/carts/${cartId}`, {
      headers: this.authHeaders()
    });
  }

  async addCartItem(cartId, productId, quantity = 1) {
    return this.request.post(`${this.baseURL}/carts/${cartId}/items`, {
      headers: this.authHeaders(),
      data: { product_id: productId, quantity }
    });
  }

  async createInvoice(payload) {
    return this.request.post(`${this.baseURL}/invoices`, {
      headers: { ...this.authHeaders(), 'Content-Type': 'application/json' },
      data: payload
    });
  }
}

module.exports = { ToolshopApi };