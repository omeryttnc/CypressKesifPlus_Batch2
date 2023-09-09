describe('checkbox ',()=>{

    beforeEach(()=>{
        cy.visit('https://demo.automationtesting.in/Register.html')

    })

    it.skip('check box kullanimi 1', () => {
        cy.get("#checkbox1").should('not.be.checked') // default check degildi
        cy.get("#checkbox1").check() // cricket checked edildi
        cy.get("#checkbox1").should('be.checked') // check oldugunun assertion i yapildi
        cy.get("#checkbox1").uncheck() // crcket unchecked yapildi
        cy.get("#checkbox1").should('not.be.checked')  // uncheck oldugunun assertion i yapildi
    });

    it('check box kullanimi 2', () => {
        cy.get("[id^='checkbox']").first().check().should('be.checked') // listenin ilk elemanini kullaniyorum
        cy.get("[id^='checkbox']").last().check().should('be.checked') // listenin son elemanini kullaniyorum
        cy.get("[id^='checkbox']").eq(1).check().should('be.checked')  // liste icerisinde index verilenen elemani kullaniyorum
    });

})