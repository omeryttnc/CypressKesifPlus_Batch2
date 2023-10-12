import { commonPage } from "../../pages/CommonPages";
import UplaodPage from "../../pages/UplaodPage";
/// <reference types="cypress" />

describe("upload testleri", () => {

    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
    })
  it("upload file 1", () => {

    commonPage.getUploadPage().elements.input().selectFile("cypress\\fixtures\\flagTurkey.png");
    commonPage.getUploadPage().elements.input().invoke('prop','val').then((value)=>{
        expect(value).include("flagTurkey")
    })
  });

  it('upload file 2', () => {
    commonPage.getUploadPage().dragAndDropFile("flagUnitedKingdom.png")
  });

  it.only('upload multiple file', () => {
    commonPage.getUploadPage().elements.dragAndDrop().selectFile(['cypress\\fixtures\\flagTurkey.png','cypress\\fixtures\\flagUnitedKingdom.png'],{action:"drag-drop"})
  });


});
