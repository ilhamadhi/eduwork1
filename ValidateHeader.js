it.only('Tugas Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    cy.get('@pokemon').its('body').its('name')
        .should('include', 'ditto')
})
