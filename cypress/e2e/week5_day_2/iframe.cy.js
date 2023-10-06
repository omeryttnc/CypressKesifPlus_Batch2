import BrowserUtilities from "../../support/BrowserUtilities"
describe('iframe',()=>{

    // beforeEach(()=>{
    //     cy.visit("https://demoqa.com/")
    //     cy.get(':nth-child(3) > :nth-child(1) > .card-up').click()
    //     cy.get(':nth-child(3) > .element-list > .menu-list > #item-2').click()

    // })
    it('iframe 1 yanlis kullanim', () => {
       
        cy.get("#sampleHeading").first()
        
        .should('have.text','This is a sample page')
    });

    it('iframe 1 dogru kullanim', () => {
        cy.get("#frame1")
        .its('0.contentDocument.body')
        .should('have.text','This is a sample page')
    });

    
    it('iframe 2 dogru kullanim utilities alias', () => {
        
        BrowserUtilities.iframe("#frame1")

       cy.get("@iframe") .should('have.text','This is a sample page')
    });

    it.only('iframe real sample', () => {
        cy.allure().step('siteye git')
        cy.visit("https://vimeo.com/blog/post/how-to-embed-videos/")

        cy.allure().step('video ya git')
        cy.get(':nth-child(31) > .wp-block-embed__wrapper > .jetpack-video-wrapper > iframe')
        .first()
        .scrollIntoView()
        
        
        
        cy.get(".jetpack-video-wrapper iframe")
        .first()
        .its('0.contentDocument.body').within(()=>{
        
            cy.allure().step('3 saniye bekle')
            cy.wait(3000)

            cy.allure().step('play butonuna bas')
            cy.get(".PlayButton_module_playIcon__fc6bec57").click()

            cy.allure().step('5 saniye bekle')
            cy.wait(5000)

            cy.allure().step('surenin degistiginin assertion ini yap')
            cy.get(".FocusTarget_module_focusTarget__02e194b8").invoke('prop','ariaValueNow')
            .then(parseInt)
            .should('be.greaterThan',0)

        })


       
    });
})