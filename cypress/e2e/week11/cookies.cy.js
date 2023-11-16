describe("cookies sessionStorage localStorage", () => {
  it("storages 1", () => {
    const key1 = "e3e1601fca9c429344c15527cd542142";
    const key2 = "a27c6fac85ae1295535e42c9d3e3f305";
    const cookieKey = "PHPSESSID";
    cy.loginAlici();
    cy.visit("/");

    cy.getCookies().then((cookie) => {
      // hedefledigimiz cookie yi inceledik
      cy.log(cookie);
      expect(cookie[5]).to.have.property("name", cookieKey);
      expect(cookie[5]).to.have.property("hostOnly", true);
    });

    cy.getCookie(cookieKey).should("exist").as("PHPSESSID"); // ilk once PHPSESSID var mi diye assert ettim
    // daha sonra da kullanmak icin alias a atadim

    cy.clearAllCookies(); // butun cookie leri temizleyecek

    cy.getCookies().should("be.empty").should("have.length", 0); // cookie lerin silindiginin assertion i

    cy.getAllSessionStorage().should("be.empty"); // session storage bos oldugunun assertion yaptik


    cy.getAllLocalStorage().then(localStorage=>{
        cy.log(localStorage["https://test.urbanicfarm.com"][key1])
    })

    cy.clearAllLocalStorage() // local storage temizlemis oluyoruz 

  });

  it.skip("strorage 2", () => {
    cy.visit("/")
    const key1 = "e3e1601fca9c429344c15527cd542142";
    const key2 = "a27c6fac85ae1295535e42c9d3e3f305";
    cy.request({
      method: "POST",
      url: "/api/public/login",
      body: {
        email: "cristal_thompson@gmail.com",
        password: "e*y7G2xhsTVAi5u",
      },
    }).then((res) => {
     const value1= res.body.token;
     const value2= res.body.token.split(".")[1];

     window.localStorage.setItem(key1,value1)
     window.localStorage.setItem(key2,value2)
    });
    cy.visit('/')
  });
});
