/// <reference types="cypress" />

describe('Navbar test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    })

    it('Should display feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
    })

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    })

    it('Go to Transfer Funds', () => {
        cy.contains('Transfer Funds').click()
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')
        cy.contains('Sign in').click()
        cy.url().should('include', '/bank/transfer-funds.html')
    })

    it('Go to Money Map', () => {
        cy.contains('Money Map').click()
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')
        cy.contains('Sign in').click()
        cy.url().should('include', '/bank/money-map.html')
    })
})