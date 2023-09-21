describe("expect assertion", () => {
    const email = "kesifplusalici@mailsac.com";
    const password = "e*y7G2xhsTVAi5u";
    it("test 1", () => {
      cy.visit("https://test.urbanicfarm.com/auth/login"); // siteye gitmemi saglayacak
  
      cy.get("[placeholder='Email']").type(email); // email yazdirildi
      cy.get("[placeholder='Password']").type(password); // passworld yazdirildi
      cy.get(".btn.alazea-btn").click(); // submit buttonuna bastik
  
      // go buttonu yesil mi
      cy.get(".CheckDistrictModal_alazeaBtn__2yYBf").invoke('css','background-color').then((cssBackground)=>{

        expect(cssBackground).to.equal("rgb(108, 117, 125)")
      })

        // // css assertion
        // .should("have.css", "background-color", "rgb(112, 199, 69)") // go buttonu yesil mi // -> selennium --> webelement.getCssValue("background-color")
        // .and("have.css", "color", "rgb(255, 255, 255)") // go nun rengi beyaz mi
  
        // property
        cy.get(".CheckDistrictModal_alazeaBtn__2yYBf").invoke('prop','offsetTop').then((offsetTopProp)=>{
            expect(offsetTopProp).equal(0)
        })
        // .and("have.prop", "offsetTop", 0)
        // .and("have.prop", "tagName", "BUTTON");
  
      // attribute
      cy.get("[name='zipcode']").invoke('prop','placeholder').then((placeholderData)=>{
        expect(placeholderData).includes('Enter')
      })

        // .should("have.attr", "placeholder", "Enter your zip code")
        // .and("have.attr", "maxlength", "5")
        // .type(95109,{force:true})
  
        // // value
        // .should("have.value", 95109);
  
      // text
      cy.get(".CheckDistrictModal_alazeaBtn__2yYBf")
        .should("have.text", "go")
  
        // visible
        .and("be.visible")
        // exist
        .and("exist");
      // equal
      cy.url().should(
        "equal",
        "https://test.urbanicfarm.com/account/weekly-order"
      );
      // include
      cy.url()
        .should("include", "account/weekly-order")
        .and("contain", "account/weekly-order");
    });
  });
  