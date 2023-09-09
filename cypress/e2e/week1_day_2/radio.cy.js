describe("checkbox ", () => {
  beforeEach(() => {
    cy.visit("https://demo.automationtesting.in/Register.html");
  });


  it('radio kullanimi',()=>{
    cy.get("[name='radiooptions']").should('not.be.checked')

    cy.get("[name='radiooptions']").first().check().should('be.checked') // male i checked ettim
    cy.get("[name='radiooptions']").last().should('not.be.checked') // female unchecked assertion yapildi


    cy.get("[name='radiooptions']").last().check().should('be.checked') // female should be checked
    cy.get("[name='radiooptions']").first().should('not.be.checked') // male should be unchecked

  })
});
