///<reference types='cypress'/>

import * as Start from '../support/tasks/Start';

describe('newBets', () => {
  it('NewBet User', () => {
    Start.withLogin();

    cy.visit('http://localhost:3000/home');

    cy.intercept('GET', 'http://192.168.56.1:3333/games').as('games');

    cy.wait('@games').then(({ response }) => {
      expect(response.statusCode).to.eq(200);
      expect(response.body.id).to.be.a('number');
      expect(response.body.id).is.not.null;
      expect(response.body.type).to.be.a('string');
      expect(response.body.type).is.not.null;
      expect(response.body.description).to.be.a('string');
      expect(response.body.description).is.not.null;
      expect(response.body.range).to.be.a('number');
      expect(response.body.range).is.not.null;
      expect(response.body.price).to.be.a('string');
      expect(response.body.price).is.not.null;
      expect(response.body.max_number).to.be.a('number');
      expect(response.body.max_number).is.not.null;
      expect(response.body.color).to.be.a('string');
      expect(response.body.color).is.not.null;
      expect(response.body.min_cart_value).to.be.a('number');
      expect(response.body.min_cart_value).is.not.null;
      expect(response.body.created_at).to.be.a('string');
      expect(response.body.created_at).is.not.null;
      expect(response.body.updated_at).to.be.a('string');
      expect(response.body.updated_at).is.not.null;
    });
  });
});
