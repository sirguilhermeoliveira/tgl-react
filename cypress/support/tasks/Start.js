/// <reference types="cypress" />

export function withRecoveryPassword() {
  const email = Cypress.env('email');

  cy.request({
    method: 'POST',
    url: 'http://192.168.56.1:3333/passwords',
    headers: { Accept: 'application/json' },
    body: {
      email: email,
    },
  }).then((res) => {
    cy.log(res);
    cy.log(res.data);
    /*         cy.log(res.body.id);
        cy.writeFile('cypress/fixtures/ongId.json', 
        { 
            id: res.body.id,
            name: res.body.name 
        }); */
  });
}

export function withLogin() {
  const email = Cypress.env('email');
  const password = Cypress.env('password');

  cy.request({
    method: 'POST',
    url: 'http://192.168.56.1:3333/login',
    headers: { Accept: 'application/json' },
    body: {
      email: email,
      password: password,
    },
  }).then((res) => {
    cy.log(res.data);
    /*         cy.log(res.body.id);
        cy.writeFile('cypress/fixtures/ongId.json', 
        { 
            id: res.body.id,
            name: res.body.name 
        }); */
  });
}
