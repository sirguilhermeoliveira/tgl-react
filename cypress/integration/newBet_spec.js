///<reference types='cypress'/>

import * as Start from '../support/tasks/Start';

describe('newBets', () => {
  it('Should Enter in Login', () => {
    Start.withLogin();
  });
  it('Should change to newBets', () => {
    cy.get('[data-cy="click-newBet"]').click();
  });
  it('Should change game to Mega-Sena', () => {
    cy.get('[data-cy="click-2"]').click();
  });
  it('Should complete game', () => {
    cy.get('[data-cy="click-completeGame"]').click();
  });
  it('Should save cart', () => {
    cy.get('[data-cy="click-saveCart"]').click();
  });
});
