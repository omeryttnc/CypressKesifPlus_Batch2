describe("session 2 kullanim", () => {
  const email_alici = "kesifplusalici@mailsac.com";
  const email_satici = "kesifplussatici@mailsac.com";
  const password = "e*y7G2xhsTVAi5u";

  const loginMethod = (email, password) => {
    cy.session([email, password], () => {
      cy.visit("https://test.urbanicfarm.com/auth/login"); // siteye gitmemi saglayacak

      cy.get("[placeholder='Email']").type(email); // email yazdirildi
      cy.get("[placeholder='Password']").type(password); // passworld yazdirildi
      cy.get(".btn.alazea-btn").click(); // submit buttonuna bastik

      cy.get(".input-group").should('be.visible')

    });
  };

  it("alici satici iliskisi", () => {
    loginMethod(email_alici, password);
    cy.visit("https://test.urbanicfarm.com/account/home")
    cy.get(".Profile_td__w9cTI.pb-2").should('have.text',email_alici)

    loginMethod(email_satici,password)
    cy.visit("https://test.urbanicfarm.com/account/home")
    cy.get(".Profile_td__w9cTI.pb-2").should('have.text',email_satici)

    loginMethod(email_alici, password);
    cy.visit("https://test.urbanicfarm.com/account/home")
    cy.get(".Profile_td__w9cTI.pb-2").should('have.text',email_alici)

  });
});
