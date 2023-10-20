describe("spread", () => {
  const email = "kesifplusalici@mailsac.com";
  const password = "e*y7G2xhsTVAi5u";
  it("spread yerine then kullanimi", () => {
    cy.visit("https://test.urbanicfarm.com/auth/login"); // siteye gitmemi saglayacak

    cy.get("[placeholder='Email']").type(email); // email yazdirildi
    cy.get("[placeholder='Password']").type(password); // passworld yazdirildi
    cy.get(".btn.alazea-btn").click(); // submit buttonuna bastik

    cy.get(".input-group").should("be.visible");

    cy.getAllCookies().then((cook) => {
      cy.log(cook[5].value);
    });
  });
  it("spread kullanimi 1", () => {
    cy.visit("https://test.urbanicfarm.com/auth/login"); // siteye gitmemi saglayacak

    cy.get("[placeholder='Email']").type(email); // email yazdirildi
    cy.get("[placeholder='Password']").type(password); // passworld yazdirildi
    cy.get(".btn.alazea-btn").click(); // submit buttonuna bastik

    cy.get(".input-group").should("be.visible");

    cy.getAllCookies().spread(
      (cookie0, cookie1, cookie2, cookie3, cookie4, PHPsess_cookie5) => {
        cy.log(PHPsess_cookie5.value);
      }
    );
  });

  it.only('spread 2', () => {
    
    const names = ["omer","kesif","plus"]

cy.wrap(names).spread((isim1,isim2,isim3)=>{
    cy.log(`isim 1 ${isim1} isim 2 ${isim2}`)
})


  });
});
