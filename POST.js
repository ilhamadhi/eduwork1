describe('Method POST', () => {
    it('Add a new user', () => {
        var user = {
            "name": "ilham",
            "job": "QA"
    }
    cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
        expect(response.status).equal(201)
        expect(response.body.name).equal(user.name)
        expect(response.body.job).equal(user.job)   
    }) 
    })

})