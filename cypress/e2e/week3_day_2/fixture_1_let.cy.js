describe('fixture kullanimi',()=>{

    let data;
    
    before(()=>{
    //  data=  cy.fixture('example') // yanlis kullanim

    cy.fixture('example').then((exampleDataOrnek)=>{
        data = exampleDataOrnek
    })
    })


    it('fixture 1', () => {
        console.log(data.name);
    });

    

    it('fixture 2', () => {
        console.log(data.email);
    });


})