describe("get kullanimi", () => {
  it("get 1", () => {
    cy.get("[placeholder='Email']"); // webelement interact -> css
    // driver.findElement(By.cssSelector("[placeholder='Email']")) -> selenium syntex
  });

  it("get 2", () => {
    cy.url().as("saticiUrl"); // -> alias
    cy.request("POST", "/api/public/login").as("responseLogin");

    cy.get("@saticiUrl");
    cy.get("@responseLogin");
  });
});
