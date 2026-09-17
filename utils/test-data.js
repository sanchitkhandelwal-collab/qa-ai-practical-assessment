function uniqueEmail(prefix = 'qa.ai') {
  return `${prefix}.${Date.now()}@example.com`;
}

function validUser(overrides = {}) {
  return {
    firstName: 'QA',
    lastName: 'Automation',
    dob: '1990-01-01',
    country: 'India',
    postalCode: '121001',
    houseNumber: '42',
    street: 'Test Street',
    city: 'Faridabad',
    state: 'Haryana',
    phone: '9876543210',
    email: uniqueEmail(),
    password: 'Qa@12345!',
    ...overrides
  };
}

function defaultUser() {
  return {
    email: process.env.DEFAULT_USER_EMAIL || 'customer2@practicesoftwaretesting.com',
    password: process.env.DEFAULT_USER_PASSWORD || 'welcome01'
  };
}

module.exports = { uniqueEmail, validUser, defaultUser };