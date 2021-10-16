///<reference types='cypress'/>

import * as Start from '../support/tasks/Start';

describe('newBets', () => {
  it('NewBet User', () => {
    Start.withLogin();

    cy.visit('http://localhost:3000/newbets');

    cy.get('[data-cy="click-2"]').click();
    cy.get('[data-cy="click-completeGame"]').click();
    cy.get('[data-cy="click-saveCart"]').click();
  });
});
