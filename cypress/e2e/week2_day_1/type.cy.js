describe('type kullanimi',()=>{
    it('type 1', () => {
        cy.visit('/auth/login')
        cy.get("[name='email']").type('omer{enter}')
    });

    /*
    Actions action = new Actions(driver);
    action.sendKeys(Keys.Enter).build().perform();
    */
   it.only('type 2', () => {
       cy.visit('/auth/register')
       cy.get("[name='firstName']").type('omer', {force: true}).tab().type('sssssss')

   });
})