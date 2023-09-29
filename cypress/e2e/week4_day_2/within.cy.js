import colors from "../../fixtures/Colors.json";
describe("within calismasi", () => {
  it("1", () => {
    cy.loginAlici();
    cy.visit("/account/weekly-order");
    cy.get("[name='zipcode']").type("95109{enter}");

    cy.get("li.weeklyOrder_cardContainer__ykebk") // 10 tane cart verdi
      .first() // 10 tane kartin ilkini verdi
      .within(() => {
        cy.get("div.ImageSlider_dot__3hWJ3")
          .first() // 3 noktanin ilkini verecek
          .should("have.css", "color", colors.resim.greenColor);

        cy.get("div.ImageSlider_dot__3hWJ3") // ilk kartin 3 tane noktasini verdi
          .eq(1) // 3 noktanin ilkini verecek
          .should("have.css", "color", colors.resim.greyColor);
      });
  });
});
