describe("session olmasaydi", () => {
  const email = "kesifplusalici@mailsac.com";
  const password = "e*y7G2xhsTVAi5u";
  it("test 1", () => {
    cy.visit("https://test.urbanicfarm.com/"); // siteye gitmemi saglayacak
    cy.get("[href$='login'].mr-4").click(); // login buttonuna tikladim
    cy.get("[placeholder='Email']").type(email); // email yazdirildi
    cy.get("[placeholder='Password']").type(password); // passworld yazdirildi
    cy.get(".btn.alazea-btn").click(); // submit buttonuna bastik

    cy.get(".CheckDistrictModal_x-btn__sVOij > a").should("be.visible"); // locator gozukuyor mu diye bakildi
  });
  it("test 2", () => {
    cy.visit("https://test.urbanicfarm.com/"); // siteye gitmemi saglayacak
    cy.get("[href$='login'].mr-4").click(); // login buttonuna tikladim
    cy.get("[placeholder='Email']").type(email); // email yazdirildi
    cy.get("[placeholder='Password']").type(password); // passworld yazdirildi
    cy.get(".btn.alazea-btn").click(); // submit buttonuna bastik

    cy.get(".CheckDistrictModal_x-btn__sVOij > a").should("be.visible"); // locator gozukuyor mu diye bakildi
  });
  it("test 3", () => {
    cy.visit("https://test.urbanicfarm.com/"); // siteye gitmemi saglayacak
    cy.get("[href$='login'].mr-4").click(); // login buttonuna tikladim
    cy.get("[placeholder='Email']").type(email); // email yazdirildi
    cy.get("[placeholder='Password']").type(password); // passworld yazdirildi
    cy.get(".btn.alazea-btn").click(); // submit buttonuna bastik

    cy.get(".CheckDistrictModal_x-btn__sVOij > a").should("be.visible"); // locator gozukuyor mu diye bakildi
  });
  it("test 4", () => {
    cy.visit("https://test.urbanicfarm.com/"); // siteye gitmemi saglayacak
    cy.get("[href$='login'].mr-4").click(); // login buttonuna tikladim
    cy.get("[placeholder='Email']").type(email); // email yazdirildi
    cy.get("[placeholder='Password']").type(password); // passworld yazdirildi
    cy.get(".btn.alazea-btn").click(); // submit buttonuna bastik

    cy.get(".CheckDistrictModal_x-btn__sVOij > a").should("be.visible"); // locator gozukuyor mu diye bakildi
  });
  it("test 5", () => {
    cy.visit("https://test.urbanicfarm.com/"); // siteye gitmemi saglayacak
    cy.get("[href$='login'].mr-4").click(); // login buttonuna tikladim
    cy.get("[placeholder='Email']").type(email); // email yazdirildi
    cy.get("[placeholder='Password']").type(password); // passworld yazdirildi
    cy.get(".btn.alazea-btn").click(); // submit buttonuna bastik

    cy.get(".CheckDistrictModal_x-btn__sVOij > a").should("be.visible"); // locator gozukuyor mu diye bakildi
  });
  it("test 6", () => {
    cy.visit("https://test.urbanicfarm.com/"); // siteye gitmemi saglayacak
    cy.get("[href$='login'].mr-4").click(); // login buttonuna tikladim
    cy.get("[placeholder='Email']").type(email); // email yazdirildi
    cy.get("[placeholder='Password']").type(password); // passworld yazdirildi
    cy.get(".btn.alazea-btn").click(); // submit buttonuna bastik

    cy.get(".CheckDistrictModal_x-btn__sVOij > a").should("be.visible"); // locator gozukuyor mu diye bakildi
  });
  it("test 7", () => {
    cy.visit("https://test.urbanicfarm.com/"); // siteye gitmemi saglayacak
    cy.get("[href$='login'].mr-4").click(); // login buttonuna tikladim
    cy.get("[placeholder='Email']").type(email); // email yazdirildi
    cy.get("[placeholder='Password']").type(password); // passworld yazdirildi
    cy.get(".btn.alazea-btn").click(); // submit buttonuna bastik

    cy.get(".CheckDistrictModal_x-btn__sVOij > a").should("be.visible"); // locator gozukuyor mu diye bakildi
  });
  it("test 8", () => {
    cy.visit("https://test.urbanicfarm.com/"); // siteye gitmemi saglayacak
    cy.get("[href$='login'].mr-4").click(); // login buttonuna tikladim
    cy.get("[placeholder='Email']").type(email); // email yazdirildi
    cy.get("[placeholder='Password']").type(password); // passworld yazdirildi
    cy.get(".btn.alazea-btn").click(); // submit buttonuna bastik

    cy.get(".CheckDistrictModal_x-btn__sVOij > a").should("be.visible"); // locator gozukuyor mu diye bakildi
  });
  it("test 9", () => {
    cy.visit("https://test.urbanicfarm.com/"); // siteye gitmemi saglayacak
    cy.get("[href$='login'].mr-4").click(); // login buttonuna tikladim
    cy.get("[placeholder='Email']").type(email); // email yazdirildi
    cy.get("[placeholder='Password']").type(password); // passworld yazdirildi
    cy.get(".btn.alazea-btn").click(); // submit buttonuna bastik

    cy.get(".CheckDistrictModal_x-btn__sVOij > a").should("be.visible"); // locator gozukuyor mu diye bakildi
  });
  it("test 10", () => {
    cy.visit("https://test.urbanicfarm.com/"); // siteye gitmemi saglayacak
    cy.get("[href$='login'].mr-4").click(); // login buttonuna tikladim
    cy.get("[placeholder='Email']").type(email); // email yazdirildi
    cy.get("[placeholder='Password']").type(password); // passworld yazdirildi
    cy.get(".btn.alazea-btn").click(); // submit buttonuna bastik

    cy.get(".CheckDistrictModal_x-btn__sVOij > a").should("be.visible"); // locator gozukuyor mu diye bakildi
  });
});
