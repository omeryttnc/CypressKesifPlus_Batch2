/// <reference types="cypress" />
import colors from '../../fixtures/Colors.json'
describe('clear',()=>{
    const emails =["omer","omer@","omergmail."]
    it('clear 1', () => {
        //Given user goes to url
        cy.visit('/auth/login')
        //When user enter password
        cy.get("[name='password']").type('23423rfgg')
        //And user send wrong email
        cy.get("[name='email']").type('omer')
        //Then assert color is red
        cy.get("[name='email']").should('have.css','color',colors.text.redColor)
        //And clear email
       // cy.get("[name='email']").type('{selectall}{backspace}') -> way 1
       cy.get("[name='email']").clear()

    });
    it.only('clear 2', () => {
        cy.visit('/auth/login')
        cy.get("[name='password']").type('23423rfgg')
       for (let i = 0; i < emails.length; i++) { //-> negative scenario
        cy.get("[name='email']").type(emails[i])
        //Then assert color is red
        cy.get("[name='email']").should('have.css','color',colors.text.redColor)
        //And clear email
       // cy.get("[name='email']").type('{selectall}{backspace}')   -> way 1
       cy.get("[name='email']").clear()                          // -> way 2
        
       }

       cy.get("[name='email']").type("omer@gmail.com") // -> positive scenario
       cy.get("[name='email']").should('have.css','color',colors.text.blackColor)
    });
})