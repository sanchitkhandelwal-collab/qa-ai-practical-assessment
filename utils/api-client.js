const { request } = require('@playwright/test');

const API_URL = process.env.API_URL || 'https://api.practicesoftwaretesting.com';

async function createApiContext(token) {
  return request.newContext({
    baseURL: API_URL,
    extraHTTPHeaders: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  });
}

async function loginApi(email, password) {
  const api = await createApiContext();
  const response = await api.post('/users/login', { data: { email, password } });
  const body = await response.json();
  await api.dispose();
  return { response, body, token: body.access_token || body.token };
}

module.exports = { API_URL, createApiContext, loginApi };