class UploadPage{

    elements={

        "input":()=>cy.get("#file-upload"),
        "dragAndDrop":()=>cy.get("div div#drag-drop-upload")
    }

    uploadFile(filePath){
        this.elements.input().selectFile("cypress\\fixtures\\"+filePath);
    }

    dragAndDropFile(filePath){
        this.elements.dragAndDrop().selectFile("cypress\\fixtures\\"+filePath,{action: 'drag-drop' })
    }

}
export const uploadPage = new  UplaodPage()

//export const uploadPage = new UploadPage()