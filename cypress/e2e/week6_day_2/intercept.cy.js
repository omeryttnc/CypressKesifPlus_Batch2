import ApiUtilities from "../../support/ApiUtilities";

describe("intercept", () => {
  const email = "kesifplusalici@mailsac.com";
  const password = "e*y7G2xhsTVAi5u";
  it("intercept wait", () => {
    cy.visit("/auth/login");
    cy.get("[placeholder='Email']").type(email);
    cy.get("[placeholder='Password']").type(password);
    cy.get(".btn.alazea-btn").click();
    cy.get("[name='zipcode']").type("95109");

    cy.intercept("/api/public/map/search").as("search");
    cy.visit("/");

    cy.wait("@search");

    cy.get(".col-11  .ProductCard_productTitle__3K4rg").each(
      ($el, index, $list) => {
        cy.log($el.text());
      }
    );
  });

  it("intercept wait 2", () => {
    cy.visit("/auth/login");
    cy.get("[placeholder='Email']").type(email);
    cy.get("[placeholder='Password']").type(password);
    cy.get(".btn.alazea-btn").click();
    cy.get("[name='zipcode']").type("95109");
    ApiUtilities.waitSearch();

    cy.visit("/");

    cy.wait("@waitSearch");

    cy.get(".col-11  .ProductCard_productTitle__3K4rg").each(
      ($el, index, $list) => {
        cy.log($el.text());
      }
    );
  });

  it("intercept manupule bos kullanici ile", () => {
    cy.visit("/auth/login");
    cy.get("[placeholder='Email']").type(email);
    cy.get("[placeholder='Password']").type(password);
    cy.get(".btn.alazea-btn").click();
    cy.get("[name='zipcode']").type("95109");

    cy.intercept("POST", "/api/public/map/search", {
      fixture: "userFakeSellerInfo.json",
    });
    cy.visit("/");

    cy.get("h2").should("have.text", "Great opportunity!");
  });

  it("intercept manupule karakter uzunlugu 50 den fazla olursa", () => {
    cy.visit("/auth/login");
    cy.get("[placeholder='Email']").type(email);
    cy.get("[placeholder='Password']").type(password);
    cy.get(".btn.alazea-btn").click();
    cy.get("[name='zipcode']").type("95109");

    cy.intercept("POST", "/api/public/map/search", {
      fixture: "wrongFakeSellerInfo.json",
    });
    cy.visit("/");
  });
});
