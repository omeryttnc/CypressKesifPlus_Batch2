import faker from "faker";
import fakeDATAYanlisKullanim from '../../fixtures/fakeDataYanlis.json'

describe("write read", () => {
  it("dogru kullanim", () => {
    cy.writeFile("cypress/fixtures/fakeData.json", {
      name: faker.name.firstName(),
      email: faker.internet.email(),
    });

    cy.fixture("fakeData").then((fakeData) => {
      console.log(fakeData.email);
    });
  });

  it.only("yanlis kullanim", () => {
    cy.writeFile("cypress/fixtures/fakeDataYanlis.json", {
      name: faker.name.firstName(),
      email: faker.internet.email(),
    });

  
      console.log(fakeDATAYanlisKullanim.email);
    
  });
});
