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


export default{
  createUser,
  apiLogin,
  waitSearch,
  getToken,
  getAddress
}