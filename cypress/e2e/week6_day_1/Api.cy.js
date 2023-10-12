describe("API", () => {
  /**
   * GET   -> bilgi cekmek icin kullanilir
   * POST  -> yeni bir sey eklemek icin kullanilir
   * PUT   -> update etmek icin kullanilir (butun body verilmesi gerekir)
   * PATCH -> update etmek icin kullanilir (partial update denir, butun bilgilere gerek yok degistirmek istediginiz bilgiyi girersiniz)
   * DELETE -> silmek islemi icin kullanilir
   */

  const baseUrl = "https://countriesnow.space/api/v0.1/countries";

  it("currency", () => {
    cy.request("GET", baseUrl + "/currency").then((response) => {
      cy.log(response);

      expect(response).to.have.property("status", 200); // status code un 200 oldugunun assertion ini yaptik
      expect(response).to.have.property("statusText", "OK"); // status text i OK olduguna baktik

      expect(response.body.data[0]).to.have.property("currency", "BDT");

      expect(response.headers).to.have.property("connection", "keep-alive");

      expect(response.headers).to.have.property("content-type");
    });
  });

  it.only("currency 2", () => {
    cy.request(
        "POST", 
        baseUrl + "/currency", {
      country: "nigeria",
    }).then((res)=>{
        cy.log(res)

      //  expect(res).to.have.property("duration",392)  yanlis kullanim duration degisen bir yapi

    cy.wrap(res).its('duration').then((dur)=>{
        cy.log(dur)

        expect(dur).below(1000)
    })
    })
  });
});
