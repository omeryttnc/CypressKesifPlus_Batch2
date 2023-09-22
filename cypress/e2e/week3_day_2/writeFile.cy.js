describe('write file',()=>{
    it('write update', () => {
        // C:\Users\HAVVA\Documents\CypressKesifPlus_Batch2\cypress\fixtures
        // cypress\fixtures
        cy.writeFile('cypress/fixtures/fakeData.txt','Hello Kesif Plus 2')
    });

    it.only('write append', () => {
        cy.writeFile('cypress/fixtures/fakeData.txt','Hayat daha guzel',{flag:'a+',log:false})

    });
})