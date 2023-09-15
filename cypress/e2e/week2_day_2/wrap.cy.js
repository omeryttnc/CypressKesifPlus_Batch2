import dataUserInfo from "../../fixtures/userInfo.json";

describe("wrap calismasi", () => {
  it("wrap 1", () => {
    const name = "omer";

    cy.wrap(name).should("equal", "omer");
  });
  it("wrap 2", () => {
    cy.visit("/");
    // 1. yol direk should kullandim
    cy.get(".section-2_title__1fvmB").should("have.text", "Join the Movement!");

    cy.get(".section-2_title__1fvmB")
      .invoke("text") // webElemet.getText()
      .then((webElementText) => {
        // ikinci yol wrap-then kullandim
        cy.wrap(webElementText).should("equal", "Join the Movement!");

        // ucuncu yol expect-then
        expect(webElementText).to.equal("Join the Movement!");
      });
  });

  it("wrap 3", () => {
    let fruits = ["elma", "armut", "ayva"];

    cy.wrap(fruits).should("include", "elma");
  });

  it("wrap 4", () => {
    cy.wrap(dataUserInfo.email).should("equal", "kesifplussatici@mailsac.com");
  });

  it("wrap 5 promisler", () => {

    cy.wrap(myPromise.message).should('eq','It worked!')
  });


  it('wrap 6',()=>{
    cy.wrap({amount:20}).should('have.property','amount').eq(20)
  })

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        type:"success",
        message:"It worked!"
      });
    }, 2500);
  });

  /**
   * try{
   *
   *
   * } catch(Exception e){
   * e.print();
   * }
   */
});
