const URL = 'http://zero.webappsecurity.com/index.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SIGN_IN = 'input[name="submit"]'
const SEARCHBAR = '#searchTerm'
const RESULTS = 'http://zero.webappsecurity.com/search.html?searchTerm=transfer+funds'

class LoginPage{
    static visit() {
        cy.visit(URL)
    }
    static fillUsername(username) {
        cy.get(USERNAME).type(username)
    }
    static signIn() {
        cy.get(SIGN_IN).click()
    }
    static searchbar() {
        cy.get(SEARCHBAR).type('Transfer Funds{enter}')
    }
    static results() {
        cy.url(RESULTS).should('include', '/search.html?searchTerm=Transfer+Funds')
    }
}

export default LoginPage