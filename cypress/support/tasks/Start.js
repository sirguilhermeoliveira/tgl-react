/// <reference types="cypress" />

export function withLogin() {
  cy.visit('http://localhost:3000/login');

  const email = Cypress.env('email');
  const password = Cypress.env('password');

  cy.get('[type="email"]').type(email);
  cy.get('[type="password"]').type(password);

  cy.intercept('POST', 'http://192.168.56.1:3333/login').as('login');

  cy.get('[type="submit"]').click();

  cy.wait('@login').then(({ response }) => {
    expect(response.statusCode).to.eq(200);
    expect(response.body.token).to.be.a('string');
    expect(response.body.token.token).is.not.null;
    expect(response.body.user_id).to.be.a('number');
    expect(response.body.user_id).is.not.null;
  });
}
