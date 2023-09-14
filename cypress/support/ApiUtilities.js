const apiLogin = ()=>{
  return  cy.request("POST", "/api/public/login", {
        email: "kesifplussatici@mailsac.com",
        password: "e*y7G2xhsTVAi5u",
      }).then(cy.wrap())

}