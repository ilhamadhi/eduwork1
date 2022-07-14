/// <reference types="cypress" />

it("Login", () => {
    cy.loginViaAPI() ;
    cy.get('h3').should('include.text', 'Basic Auth')
 });