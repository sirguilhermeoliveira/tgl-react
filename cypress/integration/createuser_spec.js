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

    cy.intercept('POST', 'http://192.168.56.1:3333/users').as('users');

    cy.get('[type="submit"]').click();

    cy.wait('@users').then(({ response }) => {
      if (response.statusCode === 500) {
        cy.log('This email already exists on the database');
        expect(response.statusCode).to.eq(500);
        expect(response.body).is.not.null;
      }
      if (response.statusCode === 200) {
        cy.log('New User Added with sucess');
        expect(response.statusCode).to.eq(200);
        expect(response.body).to.eq('true');
        expect(response.body).is.not.null;
      }
    });
  });
});
