class AlertPage {
  elements = {
    confirmButton: () => cy.get("#confirmButton"),
    confirmResult: () => cy.get("#confirmResult"),
    promptButton: () => cy.get("#promtButton"),
    promptResult: () => cy.get("#promptResult"),
  };

  sendKeysToPrompt(text){
    cy.window().then((window)=>{
        cy.stub(window,'prompt').returns(text)
        this.elements.promptButton().click()
    })

    this.elements.promptResult().should("have.text","You entered "+text)
  }
}

//  export default AlertPage
 export const alertPage = new AlertPage()