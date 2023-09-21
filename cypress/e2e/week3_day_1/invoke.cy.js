/// <reference types="cypress" />

describe("invoke kullanimi", () => {
  beforeEach(() => {
      cy.visit('https://test.urbanicfarm.com/auth/login')
  });

  // DOM -> Document Object Module
  it("invoke text", () => {
    // element.getText()
    cy.get(".text-info").invoke("text"); // webelementin yazisini aldik
  });
  it("invoke value", () => {
    // element.getAttribute('value')
    cy.get("[name='email']").invoke("val"); // webelementin value sini aldik
  });
  it("invoke css", () => {
    // element.getCss('color')
    cy.get("[name='email']").invoke("css", "color"); // webelementin yazi rengini aldik
  });
  it("invoke attr", () => {
    // element.getAttribute('maxlength')
    cy.get("[name='email']").invoke("attr", "maxlength"); // webelementin max length attr degerini aldik
  });
  it("invoke prop", () => {
    // element.getAttribute('clientWidth')
    cy.get("[name='email']").invoke("prop", "clientWidth"); // webelementin clientWidth property sini aldik
  });

  it("invoke remove attr", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get("a[href^='/windows']").invoke("removeAttr", "target").click(); // webelementin target attr kaldirdik
    cy.get("h3").should('have.text','New Window')
    //   .invoke("text")
    //   .then((text) => {
    //     console.log(text);
    //   });
  });

  it("invoke show-hide", () => {
    cy.get("[name='email']").invoke('hide').should('not.be.visible') // webelement gizlenmis olacak

    cy.get("[name='email']").invoke('show').should('be.visible') // webelement gozukecek

  });

  it.only("invoke function", () => {

    cy.wrap({user:getToken}).invoke('user').should('eq','token')
  });

  const getToken=()=>{


    return "token"
  }
});
