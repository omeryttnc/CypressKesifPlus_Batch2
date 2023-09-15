describe("genel test", () => {
  beforeEach(() => {
    cy.visit("/auth/login");
  });
  it("test 1", () => {
    const email = "[name='email']";

    // omer yazip entere basacagim
    cy.get(email)
      .type("omer{enter}") // yaziyi yazdik ve enter a tikladik
      .should(
        "have.prop",
        "validationMessage",
        "Please include an '@' in the email address. 'omer' is missing an '@'."
      ) // validationMessage beklemis oldugumuz deger olduguna bakik
      .and("have.css", "color", "rgb(245, 110, 105)") // ve burda rengin kirmizi olduguna baktik
      .type("@gmail{enter}") // tekrar yazi yazdik
      .and("have.css", "color", "rgb(72, 72, 72)"); // ve rengin kirmizidan siyaha dondugunun assertion yaptik

    cy.get(":nth-child(2) > .col-sm-12 > .form-control").type("123{enter}"); // yanlis sifre girilip entera basdik
    cy.get(".Toastify__toast")
      .should("have.text", "Invalid creds")  // toast mesajindaki yazinin assertion text kullandik
      .should('have.prop','innerText','Invalid creds') // toast mesajindaki yazinin assertion property kullandik 
      .and("have.css", "background-color", "rgb(231, 76, 60)"); // toast messajinin arka plan renginin assertion 
  });
});
