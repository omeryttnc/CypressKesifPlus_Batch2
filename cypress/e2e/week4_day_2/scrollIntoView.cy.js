describe("scroll into view", () => {
    it("scroll into view", () => {
      cy.loginAlici();
      cy.visit("/account/weekly-order");
      cy.get("[name='zipcode']").type("95109{enter}");
      cy.pause();
      
      cy.get(".weeklyOrder_addBtn__IXHnS.py-2").first().scrollIntoView()
    });
    it.only('scroll into view', () => {
        cy.visit("https://docs.cypress.io/api/commands/find")

        cy.get("h2#Rules").scrollIntoView({offset:{top:-150}})
    });
  });
  