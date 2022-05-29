describe('Zero Bank', () => {
    it('Zero Bank bill', () => {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')

        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

        cy.login(username, password)

        cy.paybills()
    
        })
    })
})