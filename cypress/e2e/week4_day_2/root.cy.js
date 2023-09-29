describe("root kullanimi", () => {
  it("root", () => {
    cy.visit("/auth/login");

    const email_alici = "kesifplusalici@mailsac.com";
    const password = "e*y7G2xhsTVAi5u";
    cy.get("[method='post']").within(() => {
      cy.get("[name='email']").type(email_alici);
      cy.get("[name='password']").type(password);

      cy.root().submit()
      // root   -> within ile icine girmis oldugumuz blogun disina cikariyor
      // submit -> type i submit olan webelementi kabul edip gonderme islemini yapar 
    });
  });
});
