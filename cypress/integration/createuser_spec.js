///<reference types='cypress'/>

describe('Registration', () => {
  it('Register User', () => {
    cy.visit('http://localhost:3000/registration');

    const name = Cypress.env('name');
    const email = Cypress.env('email');
    const password = Cypress.env('password');

    cy.get('[type="name"]').type(name);
    cy.get('[type="email"]').type(email);
    cy.get('[type="password"]').type(password);

    cy.server();
    cy.route('POST', '**/createuser_spec').as('postCreaterUser');
    cy.get('[type="submit"]').click();
  });
});
