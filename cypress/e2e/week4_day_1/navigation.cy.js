describe('navigation',()=>{
    it('navigation 1', () => {
        cy.visit('https://example.cypress.io/commands/navigation')
        cy.visit('https://test.urbanicfarm.com/account/hub')
        
        cy.go('back') // bir onceki sayafaya geri donmus olurum
        cy.go(-1)  // bir onceki sayafaya geri donmus olurum

        cy.go(-2) // iki geri sayfaya gitmis olacagiz 

        cy.go('forward') // bir sonraki sayfaya gecmis oluruz
        cy.go(1) // bir sonraki sayfaya gecmis oluruz
        cy.go(2) // iki sonraki sayfaya gecmis oluruz


        cy.reload()
    });
})