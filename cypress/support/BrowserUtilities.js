const loginMethod = (email, password) => {
    cy.session([email, password], () => {
      cy.visit("https://test.urbanicfarm.com/auth/login"); // siteye gitmemi saglayacak

      cy.get("[placeholder='Email']").type(email); // email yazdirildi
      cy.get("[placeholder='Password']").type(password); // passworld yazdirildi
      cy.get(".btn.alazea-btn").click(); // submit buttonuna bastik

      cy.get(".input-group").should('be.visible')

    });
  };

  const iframe =(webelement)=>{
    cy.get(webelement)
        .its('0.contentDocument.body')
        .as("iframe")
  }

  export default {
    loginMethod,
    iframe
  }