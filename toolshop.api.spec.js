const { test, expect } = require('@playwright/test');
const { ToolshopApi } = require('../../utils/api-client');
const { uniqueEmail } = require('../../utils/test-data');

test.describe('Toolshop API', () => {
  let api;
  let user;
  let cartId;

  test.beforeEach(async ({ request }) => {
    api = new ToolshopApi(request);
    user = {
      first_name: 'QA',
      last_name: 'Assessment',
      dob: '1995-05-15',
      address: {
        street: 'QA Street',
        city: 'Test City',
        state: 'Test State',
        country: 'IN',
        postal_code: '1234AA'
      },
      phone: '0123456789',
      email: uniqueEmail(),
      password: 'Qa@Assessment123!'
    };
  });

  test('API-01 @Smoke register user', async () => {
    const response = await api.register(user);
    expect(response.ok()).toBeTruthy();
  });

  test('API-02 @Smoke login and obtain token', async () => {
    const register = await api.register(user);
    expect(register.ok()).toBeTruthy();

    const login = await api.login(user.email, user.password);
    expect(login.ok()).toBeTruthy();

    const body = await login.json();
    api.token = body.access_token || body.token;
    expect(api.token).toBeTruthy();
  });

  test('API-03 @Smoke create cart with token', async () => {
    const register = await api.register(user);
    expect(register.ok()).toBeTruthy();

    const login = await api.login(user.email, user.password);
    const body = await login.json();
    api.token = body.access_token || body.token;
    expect(api.token).toBeTruthy();

    const response = await api.createCart();
    expect(response.ok()).toBeTruthy();
    const cart = await response.json();
    cartId = cart.id;
    expect(cartId).toBeTruthy();
  });

  test('API-04 @Regression retrieve products', async () => {
    const response = await api.products();
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toBeTruthy();
  });

  test('API-05 @Regression add item and verify cart', async () => {
    const register = await api.register(user);
    expect(register.ok()).toBeTruthy();
    const login = await api.login(user.email, user.password);
    const loginBody = await login.json();
    api.token = loginBody.access_token || loginBody.token;

    const cartResponse = await api.createCart();
    expect(cartResponse.ok()).toBeTruthy();
    const cart = await cartResponse.json();

    const productsResponse = await api.products();
    expect(productsResponse.ok()).toBeTruthy();
    const products = await productsResponse.json();
    const product = products.data?.[0] || products[0];
    expect(product?.id).toBeTruthy();

    const add = await api.addCartItem(cart.id, product.id, 1);
    expect(add.ok()).toBeTruthy();

    const getCart = await api.cart(cart.id);
    expect(getCart.ok()).toBeTruthy();
  });

  test('API-06 @Regression invalid invoice payload is rejected', async () => {
    const register = await api.register(user);
    expect(register.ok()).toBeTruthy();
    const login = await api.login(user.email, user.password);
    const loginBody = await login.json();
    api.token = loginBody.access_token || loginBody.token;

    const response = await api.createInvoice({
      billing_street: '',
      billing_city: '',
      billing_state: '',
      billing_country: '',
      billing_postal_code: '',
      payment_method: 'cash-on-delivery',
      cart_id: 'invalid-cart-id',
      payment_details: {}
    });

    expect(response.status()).toBeGreaterThanOrEqual(400);
    expect(response.status()).toBeLessThan(500);
  });
});