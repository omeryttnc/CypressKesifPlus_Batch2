import YAML from "yamljs";
describe("read file", () => {
  it("read txt", () => {
    cy.fixture("fakeData.txt"); // fixture klasorunden okumaya basliyuruz
    cy.readFile("cypress/fixtures/fakeData.txt"); // project klasorunden okumaya basliyoruz
  });

  it("read json", () => {
    cy.fixture("example"); // fixture klasorunden okumaya basliyuruz
    cy.readFile("cypress/fixtures/example.json"); // project klasorunden okumaya basliyoruz
  });

  it("read png", () => {
    cy.fixture("flagUnitedKingdom.png").then((flag) => {
      console.log(flag);
    });

    cy.readFile("cypress/fixtures/flagTurkey.png", "base64").then(
      (flagReadFile) => {
        console.log(flagReadFile);
      }
    );
  });

  it("read yaml yml", () => {
    cy.readFile("cypress/fixtures/exampleYaml.yml").then((yamlData) => {
      // eski usul
      // const YAML = require('yamljs')

      const yamlCevirdigimizDosya = YAML.parse(yamlData);

      console.log(yamlCevirdigimizDosya.name);
    });

    cy.fixture("exampleYaml.yml").then((yamlData) => {
      // eski usul
      // const YAML = require('yamljs')

      const yamlCevirdigimizDosya = YAML.parse(yamlData);

      console.log(yamlCevirdigimizDosya.email);
    });
  });

  it.only("read mp3", () => {
    cy.readFile("cypress/fixtures/sample-3s.mp3", "base64").then((mp3) => {
        console.log(mp3);
      const uri = "data:audio/mp3;base64," + mp3;
      const audio = new Audio(uri);

      audio.play();
    });
  });
});
