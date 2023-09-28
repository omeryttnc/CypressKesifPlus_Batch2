describe('wait',()=>{
    it('wait 1', () => {
        cy.wait(1000) // 1 saniye bekletecek
    });

    it('wait 2 with intercept', () => {
        cy.intercept('/api/chat/getUnreadMessagesCount').as('messageCount')

        cy.wait('@messageCount')
    });
})