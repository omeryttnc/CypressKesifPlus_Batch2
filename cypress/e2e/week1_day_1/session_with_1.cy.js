describe("session olmasaydi", () => {
  const email = "kesifplusalici@mailsac.com";
  const password = "e*y7G2xhsTVAi5u";

  beforeEach(()=>{
    cy.session("alici",()=>{
      cy.visit("https://test.urbanicfarm.com/auth/login"); // siteye gitmemi saglayacak
    
      cy.get("[placeholder='Email']").type(email); // email yazdirildi
      cy.get("[placeholder='Password']").type(password); // passworld yazdirildi
      cy.get(".btn.alazea-btn").click(); // submit buttonuna bastik
      cy.url().should('contain',"urbanic")
    })

  })


  it("test 1", () => {
    cy.visit("https://test.urbanicfarm.com/auth/login"); // siteye gitmemi saglayacak

    cy.url().should('contain',"urbanic")
  });
  it("test 2", () => {

    cy.visit("https://test.urbanicfarm.com/auth/login"); // siteye gitmemi saglayacak

    cy.url().should('contain',"urbanic")
  });
  it("test 3", () => {
    cy.visit("https://test.urbanicfarm.com/auth/login"); // siteye gitmemi saglayacak


    cy.url().should('contain',"urbanic")
  });
  it("test 4", () => {
    cy.visit("https://test.urbanicfarm.com/auth/login"); // siteye gitmemi saglayacak


    cy.url().should('contain',"urbanic")
  });
  it("test 5", () => {
    cy.visit("https://test.urbanicfarm.com/auth/login"); // siteye gitmemi saglayacak


    cy.url().should('contain',"urbanic")
  });
  it("test 6", () => {

    cy.visit("https://test.urbanicfarm.com/auth/login"); // siteye gitmemi saglayacak

    cy.url().should('contain',"urbanic")
  });
  it("test 7", () => {

    cy.visit("https://test.urbanicfarm.com/auth/login"); // siteye gitmemi saglayacak

    cy.url().should('contain',"urbanic")
  });
  it("test 8", () => {
    cy.visit("https://test.urbanicfarm.com/auth/login"); // siteye gitmemi saglayacak


    cy.url().should('contain',"urbanic")
  });
  it("test 9", () => {
 
    cy.visit("https://test.urbanicfarm.com/auth/login"); // siteye gitmemi saglayacak

    cy.url().should('contain',"urbanic")
  });
  it("test 10", () => {

    cy.visit("https://test.urbanicfarm.com/auth/login"); // siteye gitmemi saglayacak

    cy.url().should('contain',"urbanic")
  });
});
