describe('promise', () => {
    it.skip('promise 1', () => {
      cy.wrap(  abDenBuyuk(4,3)).should('eq','a b den buyuktur')
    });

    it('promise 2', () => {
        abDenBuyuk(3,4)
    });

    function abDenBuyuk(a,b){
        return new Promise((resolve,reject)=>{
            if(a>b){
                resolve('a b den buyuktur')
            }else{
                reject('a b den buyuk degilmis')
            }
        })
    }


    

});