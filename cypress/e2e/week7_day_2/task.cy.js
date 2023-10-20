describe("task", () => {
  it.skip("task yanlis kullanim", () => {
    const fs = require("fs");

    fs.readdir("cypress/downloads/", (err, files) => {
      if (err) throw err;

      files.forEach((file) => {
        console.log(file);
        fs.unlink("cypress/downloads/" + file, (err) => {
          if (err) throw err;
        });
      });
    });
  });

  it('task dogru kullanim', () => {
    
    cy.task('log','baslamadik')
    cy.task('deleteDownloadFolder')
    cy.task('log','bitirdik')
  });
});
