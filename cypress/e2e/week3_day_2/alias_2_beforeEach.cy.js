describe("alias 2", () => {
  beforeEach(() => {
    cy.fixture("userInfo").as("userInfoAlias");
  });

  it("alias beforeEach function", function () {
    cy.visit("https://test.urbanicfarm.com/auth/login").then(() => {
      cy.get("[name='email']").type(this.userInfoAlias.email);
    });
  });

  it("alias beforeEach function", function () {
    cy.visit("https://test.urbanicfarm.com/auth/login").then(() => {
      cy.get("[name='email']").type(this.userInfoAlias.email);
    });
  });
});
