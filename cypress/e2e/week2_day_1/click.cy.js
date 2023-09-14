describe('click',()=>{
    it('click 1', () => {
        cy.get(".btn.alazea-btn").click({force:true});
        cy.get('img').click('topRight')
        cy.get('#top-banner').click(15, 40)
    });

    it('double click', () => {
        cy.get(".btn.alazea-btn").dblclick()
    });

    it('rightClick', () => {
        cy.get(".btn.alazea-btn").rightclick()
})

})