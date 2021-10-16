///<reference types='cypress'/>

describe('Recovery Password', () => {
  it('Recovery User Password', () => {
    cy.visit('http://localhost:3000/resetPassword');

    const email = Cypress.env('email');

    cy.get('[type="email"]').type(email);

    cy.intercept('POST', 'http://192.168.56.1:3333/passwords').as('passwords');

    cy.get('[type="submit"]').click();

    cy.wait('@recoveryPassword').then(({ response }) => {
      expect(response.statusCode).to.eq(200);
    });
  });
});
