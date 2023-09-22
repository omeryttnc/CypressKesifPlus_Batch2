describe("alias 3", () => {
  beforeEach(() => {
    cy.fixture("userInfo").as("userInfoAlias");
  });

  it("alias get", function () {
    cy.get("@userInfoAlias").then((alias) => {
      cy.visit("/auth/login");
      cy.get("[name='email']").type(alias.email); // get ten almis oldugum biligiyi kullaniyorum
      cy.get("[name='password']").type(this.userInfoAlias.password); // fat function dan dolayi aldigim bilgiyi kullaniyorum
    });
  });
});
