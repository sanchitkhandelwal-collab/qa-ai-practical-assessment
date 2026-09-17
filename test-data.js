function uniqueEmail() {
  return `qa.assessment.${Date.now()}@example.com`;
}

function userData() {
  return {
    firstName: 'QA',
    lastName: 'Assessment',
    dob: '1995-05-15',
    postalCode: '1234AA',
    houseNumber: '42',
    phone: '0123456789',
    email: uniqueEmail(),
    password: 'Qa@Assessment123!'
  };
}

module.exports = { uniqueEmail, userData };