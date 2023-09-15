describe('location',()=>{
    it('location ', () => {
        cy.visit('/')
        cy.location().then((location)=>{
            console.log(location);
            console.log(location.protocol)
            expect(location.protocol).to.equal('https:')

            // assert.assertEqual("expected","actual") -> selenium da assertion
        })
    });
})