describe('its kullanimi',()=>{
    it('its json javascript', () => {
        cy.wrap({firstname:"omer",lastName:"ali"}) // objenin firstname property sini verecek
        .its('firstname')

        cy.fixture('example').its('name') // json objesinin name property sini verecek
    });

    it('its response', () => {
        cy.request("POST", "/api/public/login", {
            email: "kesifplussatici@mailsac.com",
            password: "e*y7G2xhsTVAi5u",
          })
          .its('headers')
          .then(res=>{
            console.log(res);
          })
    });

    it('its DOM', () => {
        cy.visit("https://test.urbanicfarm.com/auth/login")
        const fruits=["elma","armut","kiraz"]
        cy.get('.justify-content-center').its('length').should('equal',5)
    });
})