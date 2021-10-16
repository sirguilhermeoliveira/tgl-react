///<reference types='cypress'/>

import * as Start from '../support/tasks/Start';

describe('Login', () => {
  it('Login User', () => {
    Start.withRegistration();

    cy.visit('http://localhost:3000/login');

    const email = Cypress.env('email');
    const password = Cypress.env('password');

    cy.get('[type="email"]').type(email);
    cy.get('[type="password"]').type(password);

    cy.server();
    cy.route('POST', '**/authentication_spec').as('postAuthentication');
    cy.get('[type="submit"]').click();
  });
});
