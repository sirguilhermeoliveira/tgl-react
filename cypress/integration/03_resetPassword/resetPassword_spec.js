///<reference types='cypress'/>

import * as Start from '../support/tasks/Start';

describe('Recovery Password', () => {
  it('Recovery User Password', () => {
    Start.withRecoveryPassword();

    cy.visit('http://localhost:3000/recoveryPassword');

    const password = Cypress.env('password');

    cy.get('[type="password"]').type(password);

    cy.intercept('POST', 'http://192.168.56.1:3333/passwords').as('passwords');

    cy.get('[type="submit"]').click();

    cy.wait('@passwords').then(({ response }) => {
      expect(response.statusCode).to.eq(200);
    });
  });
});
