/// <reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open the Zero Webappsecurity website', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
})

When('I typed the word "Transfer Funds" on the searchbar and pressed Enter', () => {
    cy.get('#searchTerm').type('Transfer Funds{enter}')
})

Then('I should get the search result about "Transfer Funds" in the Zero Webappsecurity', () => {
    cy.url().should('include', '/search.html?searchTerm=Transfer+Funds')
})