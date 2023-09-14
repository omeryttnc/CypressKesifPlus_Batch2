describe("then kullanimi", () => {
  it("then 1 backend", () => {
    cy.request("POST", "/api/public/login", {
      email: "kesifplussatici@mailsac.com",
      password: "e*y7G2xhsTVAi5u",
    }) // -> yield
      .then((resData) => {
        console.log(resData);

        cy.log(resData.body.email);
      });
  });

  it("then 2 database", () => {
    cy.task("queryDB", "select * from users").then((data) => {});
  });

  it("then 3 method", () => {
    /**
     * yanlis kullanim cunku isin icinde cypress var
     * const upName=   upperCaseMethod("omer")

   console.log(upName);
     */
    upperCaseMethod("omer").then((newName) => {
      cy.log(newName);
    });
  });

  it("then 4 fixture", () => {
    cy.fixture("example").then((fixtureData) => {
      cy.log(fixtureData.email);
    });

    cy.fixture("userInfo").then((userData) => {


      cy.request("POST", "/api/public/login", {
        email: userData.email,
        password: userData.password,
      }) // -> yield


        .then((resData) => {


          console.log(resData);

          cy.log(resData.body.email);

          upperCaseMethod(resData.body.email).then(lastThen=>{
            console.log(lastThen);
          })

        });



    });
  });

  const upperCaseMethod = (name) => {
    return cy.wrap(name.toUpperCase());
  };

  /**
   * public String upperCaseMehod(String name){
   * return name.toUpperCase();
   * }
   */
});
