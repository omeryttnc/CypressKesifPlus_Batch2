/// <reference types="cypress" />
import ApiUtilities from '../../support/ApiUtilities';
describe("API", () => {
  it("api plug in kullanmadan", () => {
    cy.request("POST", "/api/public/login", {
      email: "kesifplussatici@mailsac.com",
      password: "e*y7G2xhsTVAi5u",
    }).then((response) => {
      cy.log(response);
    });
  });

  it("api plug in kullanarak", () => {
    cy.api("POST", "/api/public/login", {
      email: "kesifplussatici@mailsac.com",
      password: "e*y7G2xhsTVAi5u",
    }).then((response) => {
      cy.log(response);
    });
  });

  it("api optionslar kullanarak", () => {
    cy.request({
      method: "POST",
      url: "/api/public/login",
      body: {
        email: "kesifplussatici@mailsac.com",
        password: "e*y7G2xhsTVAi5u",
      },
    }).then((response) => {
      cy.log(response);
    });
  });


  it('create a user in spec', () => {
    const faker =require('faker')
    cy.api(
        
        'POST',
        '/api/public/register',
        { 
            firstName:"kesif",
            email:faker.internet.email(),
            plainPassword:"123asd,asdASD"

        }).then(res=>{
            cy.log(res)
        })
  });

it('create user by alias', () => {
    ApiUtilities.createUser()

    cy.get('@createUser').then(res=>{
        
        expect(res).to.have.property("statusText","OK")

        expect(res.body).to.have.property("success",true)

    })
});


it.only('get Address Info', () => {
  const email = "kesifplusalici@mailsac.com";
  const password = "e*y7G2xhsTVAi5u";
  ApiUtilities.getToken(email,password) // alias icini doldurduk

 cy.get('@getToken').its('token').then(token=>{ // token i cektik
  ApiUtilities.getAddress(token) // cekmis oldugumuz token i kullanarak kullanici adreslerine ulastik

  cy.get("@getAddress").then(address=>{ // adress leri artik kullanabiliriz
    cy.log(address)
  })

 })
});


});
