///<reference types='cypress'/>

import * as Start from '../support/tasks/Start';

describe('Registration', () => {
  it('Register User', () => {
    cy.visit('http://localhost:3000/registration');

    const name = Cypress.env('name');
    const email = Cypress.env('email');
    const password = Cypress.env('password');

    cy.get('[type="name"]').type(name);
    cy.get('[type="email"]').type(email);
    cy.get('[type="password"]').type(password);
    cy.get('[type="submit"]').click();
  });
});
