///<reference types='cypress'/>

describe('Account', () => {
  it('Account Change Username', () => {
    cy.visit('http://localhost:3000/account');

    const name = Cypress.env('name');

    cy.get('[type="name"]').type(name);

    cy.intercept('PUT', 'http://192.168.56.1:3333/users/' + userId).as(
      'username'
    );

    cy.get('[data-cy=name_submit]').click();

    cy.wait('@username').then(({ response }) => {
      expect(response.statusCode).to.eq(200);
    });
  });
  it('Account Change Password', () => {
    cy.visit('http://localhost:3000/account');

    const password = Cypress.env('password');

    cy.get('[type="password"]').type(password);

    cy.intercept('PUT', 'http://192.168.56.1:3333/users/' + userId).as(
      'password'
    );

    cy.get('[data-cy=password_submit]').click();

    cy.wait('@password').then(({ response }) => {
      expect(response.statusCode).to.eq(200);
    });
  });
});
