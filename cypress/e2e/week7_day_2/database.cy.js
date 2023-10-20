describe('database', () => {
    it.skip('get users info', () => {
        
        cy.task('queryDb','Select * from `user`').then(data=>{
            cy.log(data)
        })
    });


    it('urun approve etme', () => {
        /**
         * siteye gidip bir urun ekledigimizi varsayalim
         */

        cy.task('queryDb',"UPDATE `hub_product` SET `product_listing_state` = 'APPROVED'")
    });
});