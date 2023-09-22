describe("alias 1", () => {
  it("alias fat function", function() {
    cy.fixture("userInfo").as("userInfoAlias");

    cy.visit("https://test.urbanicfarm.com/auth/login").then(() => {

      cy.get("[name='email']").type(this.userInfoAlias.email);
    
    
    });
  });
});
