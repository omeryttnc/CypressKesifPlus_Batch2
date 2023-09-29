describe('xpath',()=>{
    it('xpath', () => {
        cy.loginAlici()
        cy.visit('/account/weekly-order') 

        cy.xpath("//input[@name='zipcode']").type('95109{enter}')
    });
})