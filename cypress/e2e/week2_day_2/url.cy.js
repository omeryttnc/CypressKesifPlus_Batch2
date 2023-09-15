

describe('url calismasi',()=>{
    it('url', () => {
        cy.visit('/')
        cy.url().then(url=>{
            console.log(url)
        })
    });
})