describe("select kullanimi", () => {
  beforeEach(() => {
    cy.visit("https://demo.automationtesting.in/Register.html");
  });

  it("by index", () => {
    // selenium kullanimi
    // Select select = new Select(webelement);
    // select.getByIndex(0)

    cy.get("#Skills").select(2).should("have.value", "Adobe Photoshop");

  });

  it('by value', () => {
    //getByValue("")
    cy.get("#Skills").select("Adobe InDesign").should("have.value", "Adobe InDesign");
  });

  it('by text', () => {
    // getByText("")
    cy.get("#Skills").select("APIs").should("have.value", "APIs");
  });
});
