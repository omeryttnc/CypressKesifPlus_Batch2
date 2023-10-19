const apiLogin = ()=>{
  return  cy.request("POST", "/api/public/login", {
        email: "kesifplussatici@mailsac.com",
        password: "e*y7G2xhsTVAi5u",
      }).then(cy.wrap())

}

const waitSearch=()=>{
  cy.intercept('/api/public/map/search').as('waitSearch')
}

const createUser=()=>{
  const faker =require('faker')
  cy.request(
      'POST',
      '/api/public/register',
      { 
          firstName:"kesif",
          email:faker.internet.email(),
          plainPassword:"123asd,asdASD"

      }).as('createUser')
}

const getToken=(userEmail,userPassword)=>{
  cy.request('POST','/api/public/login',{email:userEmail,password:userPassword}).its('body').as('getToken')
}

const getAddress=(token)=>{
cy.request({
  method:'POST',
  url:'/api/public/basket/getAddress',
  headers:{
    authorization:"Bearer "+token
  }
}).as('getAddress')
}


const creatAddress=(token)=>{
  
  const adresdata={"isDefault":false,"isSellerAddress":false,"title":"Home","address":"San Jose, CA 95193, USA","city":"San Jose","state":"Santa Clara County","postal":"95193"}
  cy.request({
      method:"POST",
      url:"/api/account/address/addAddress",
      body:adresdata,
      headers:{
          authorization: token
      }
  }).then(data=>{
      
      expect(data).to.have.property("status",200)
      expect(data.body).to.have.property("success",true)

    let createdId=  data.body.address.id
   
    cy.wrap(createdId).as("creatAddress")

  })

}


const getAllAddresses=(token)=>{
  let allAddressId =[]  // bos array olusturduk
    cy.request({ // istegimizi gonderdik
        method:"POST",
        url:"/api/account/address/getAddress",
        headers:{
            authorization: token
        }
    }).then(allIds=>{ // gonderdigimiz istegi okuduk

        for (let i = 0; i < allIds.body.addresses.length; i++) { // butun adresleri icine alan bir dongu olusturduk
          //  cy.log(allIds.body.addresses[i].id)
            allAddressId.push(allIds.body.addresses[i].id) // adres id lerimizi teker teker bos olan array a gonderdik
        }

        cy.wrap(allAddressId).as("getAllAddresses") // icini doldurmus oldugumuz array i method ismi ayni olacak sekilde alias olusturduk
    })

}


const deleteAddress=(addressId,token)=>{
  cy.request({
    method:"POST",
    url:"/api/account/address/delete",
    body:{"addressId":addressId},
    headers:{
        authorization: token
    }
}).as("deleteAddress")
}


export default{
  createUser,
  apiLogin,
  waitSearch,
  getToken,
  getAddress,
  creatAddress,
  getAllAddresses,
  deleteAddress
}