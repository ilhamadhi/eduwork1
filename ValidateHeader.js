it.only('Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/ability/7/').as('pokemon')
    cy.get('@pokemon').its('body').its('name')
        .should('include', 'limber')
})