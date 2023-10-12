describe('download', () => {
    it('download 1', () => {
        cy.visit("https://demoqa.com/upload-download")


        
        cy.readFile('cypress/downloads/sampleFile.jpeg').should('not.exist')

        cy.get("#downloadButton").click()

        cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist')

    });
});