it('title ', () => {
    cy.visit('/')
cy.title().then(data=>{
    cy.log(data)
})

cy.title().should('contains','Urbanic Farm')
    // Get Your Locally Sourced Veggies&Fruits from neighbors | Urbanic Farm
});