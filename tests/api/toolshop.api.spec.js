const { test, expect } = require('@playwright/test');
const { createApiContext, loginApi } = require('../../utils/api-client');
const { defaultUser, validUser } = require('../../utils/test-data');

test.describe('Toolshop API', () => {
  test('API-01 @Smoke register a user', async () => {
    const api = await createApiContext();
    const user = validUser();
    const response = await api.post('/users/register', {
      data: {
        first_name: user.firstName,
        last_name: user.lastName,
        dob: user.dob,
        address: {
          street: user.street,
          city: user.city,
          state: user.state,
          country: user.country,
          postal_code: user.postalCode
        },
        phone: user.phone,
        email: user.email,
        password: user.password
      }
    });
    expect(response.status()).toBe(201);
    await api.dispose();
  });

  test('API-02 @Smoke login returns bearer token', async () => {
    const result = await loginApi(defaultUser().email, defaultUser().password);
    expect(result.response.status()).toBe(200);
    expect(result.token).toBeTruthy();
  });

  test('API-03 @Smoke /users/me validates authenticated identity', async () => {
    const result = await loginApi(defaultUser().email, defaultUser().password);
    expect(result.token).toBeTruthy();

    const api = await createApiContext(result.token);
    const response = await api.get('/users/me');
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.email).toBe(defaultUser().email);
    await api.dispose();
  });

  test('API-04 @regression products endpoint returns product data', async () => {
    const api = await createApiContext();
    const response = await api.get('/products?page=1');
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(Array.isArray(body.data)).toBeTruthy();
    expect(body.data.length).toBeGreaterThan(0);
    expect(body.data[0]).toHaveProperty('id');
    expect(body.data[0]).toHaveProperty('price');
    await api.dispose();
  });

  test('API-05 @regression create cart, add selected products and verify cart', async () => {
    const login = await loginApi(defaultUser().email, defaultUser().password);
    const api = await createApiContext(login.token);

    const productsResponse = await api.get('/products?page=1');
    expect(productsResponse.status()).toBe(200);
    const products = (await productsResponse.json()).data;
    expect(products.length).toBeGreaterThanOrEqual(2);

    const cartResponse = await api.post('/carts');
    expect(cartResponse.status()).toBe(201);
    const cart = await cartResponse.json();
    expect(cart.id).toBeTruthy();

    const selected = products.slice(0, 2);
    for (const product of selected) {
      const add = await api.post(`/carts/${cart.id}`, {
        data: { product_id: product.id, quantity: 1 }
      });
      expect(add.status()).toBe(200);
    }

    const verify = await api.get(`/carts/${cart.id}`);
    const verifyBody = await verify.json();
    expect(verify.status()).toBe(200);
    expect(verifyBody.cart_items.length).toBe(2);
    await api.dispose();
  });

  test('API-06 @regression list invoices and validate invoice contract', async () => {
    const login = await loginApi(defaultUser().email, defaultUser().password);
    const api = await createApiContext(login.token);

    const response = await api.get('/invoices');
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(Array.isArray(body.data)).toBeTruthy();

    if (body.data.length > 0) {
      expect(body.data[0]).toHaveProperty('id');
      expect(body.data[0]).toHaveProperty('invoice_number');
      expect(body.data[0].invoice_number).toMatch(/^INV[-\s]?\d+/i);
    }
    await api.dispose();
  });
});