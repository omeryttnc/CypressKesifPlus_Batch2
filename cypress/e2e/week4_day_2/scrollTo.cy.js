describe("scrollTo", () => {
  it("scroll to", () => {
    cy.loginAlici();
    cy.visit("/account/weekly-order");
    cy.get("[name='zipcode']").type("95109{enter}");
    cy.pause();
    cy.scrollTo("bottom");

    cy.scrollTo("top");
  });
});
