import allPages from "../../fixtures/AllPages.json";
import { alertPage } from "../../pages/AlertPage";
import { commonPage } from "../../pages/CommonPages";
describe("alert", () => {
  beforeEach(() => {
    cy.allure().step("siteye gittik");
    cy.visit("https://demoqa.com/");
    cy.get(":nth-child(3) > :nth-child(1) > .card-up").click();
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-1").click();
  });
  it("alert 1", () => {
    cy.get(allPages.AlertPage.alertButton).click();

    cy.on("window:alert", (alert) => {
      expect(alert).equal("You clicked a button");
    });
  });

  it("alert 2", () => {
    cy.get(allPages.AlertPage.timerAlertButton).click();

    cy.on("window:alert", (alert) => {
      expect(alert).equal("This alert appeared after 5 seconds");
    });
  });

  it("alert 3 positive", () => {
    cy.get(allPages.AlertPage.confirmButton).click();

    cy.get(allPages.AlertPage.confirmResult).should(
      "have.text",
      "You selected Ok"
    );
  });

  it.only("alert 3 negative", () => {
    cy.allure().step("confirm button a tikladik");
    commonPage.getAlertPage().elements.confirmButton().click();
    cy.allure().step("windows engelledik");

    cy.on("window:confirm", () => {
      return false;
    });
    cy.allure().step("assertion yaptik");
    cy.get("#confirmResult").should("have.text", "You selected OK");
  });

  it.only("alert 4", () => {
    cy.allure().epic('epic 1')
    cy.allure().feature('feature 1')
    cy.allure().issue('issue 1')
    cy.allure().severity('blocker')
    cy.window().then((window) => {
      cy.stub(window, "prompt").returns("omer");
      cy.get("#promtButton").click();
    });

    cy.get("#promptResult").should("have.text", "You entered omer");
  });

  it.only("alert 4 with POM", () => {
    cy.allure().epic('epic 1')
    cy.allure().feature('feature 2')
    cy.allure().issue('issue 2')
    cy.allure().severity('trivial')
    // alertPage.sendKeysToPrompt("Kesif") // way 1
    commonPage.getAlertPage().sendKeysToPrompt("Plus"); //way 2
  });
});
