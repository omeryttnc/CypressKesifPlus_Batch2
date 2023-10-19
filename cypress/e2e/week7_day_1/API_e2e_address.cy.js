import userInfo from "../../fixtures/userInfo.json";
import ApiUtilities from "../../support/ApiUtilities";
ApiUtilities;
describe("API e2e test ", () => {
  it.skip("add address", () => {
    ApiUtilities.creatAddress(userInfo.token);
  });


  it.skip('get address', () => {
      ApiUtilities.creatAddress(userInfo.token); // adres olusturacak ve bana olusturulan adresin id sini verecek

      ApiUtilities.getAllAddresses(userInfo.token) // butun adreslerin idsini cekecek

    cy.get("@creatAddress").then(createdAddressId=>{ // olusturmus oldugum adres id me ulasmis oldum

        cy.get("@getAllAddresses").then(array=>{ // butun idlerime ulasmis oldum
      
            let flag = false 
            for (let i = 0; i < array.length; i++) { // dongu icerisinde butun adres id ler arasinda benim adres id im var mi diye baktim
              if(array[i]==createdAddressId){
                flag=true
              }
            }
    
            expect(flag).true
        })

    })
  });

it('delete adres', () => {
    ApiUtilities.creatAddress(userInfo.token)

    cy.get("@creatAddress").then(createdAddressId=>{

        ApiUtilities.deleteAddress(createdAddressId,userInfo.token)

        cy.get("@deleteAddress").then(responseDeleteAddress=>{
            cy.log(responseDeleteAddress)
            expect(responseDeleteAddress.body).to.have.property("success",true)
        })
    })


});
 // butun kayitli adresleri silelim

});
