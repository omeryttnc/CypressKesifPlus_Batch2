// Cypress.env('login_url') // '/login'
// Cypress.env("name")

describe('environment', () => {
    it('environment',{env:{base:"https://docs.cypress.io/guides/guides/environment-variables"}}, () => {
        cy.viewport('iphone-6')
        cy.visit(Cypress.env('base'))
    });
});