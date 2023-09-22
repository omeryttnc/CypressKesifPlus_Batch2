describe('fixture',()=>{

    it('fixture 1', () => {
        
        cy.fixture('example').then(val=>{
            console.log(val.name);
        })
    });

    it('fixture 2', () => {
        
        cy.fixture('example').then(val=>{
            console.log(val.email);
        })
    });


})