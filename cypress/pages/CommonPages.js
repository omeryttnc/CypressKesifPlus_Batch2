import { alertPage } from "./AlertPage";
import { homePage } from "./HomePage";
import { uploadPage } from "./UplaodPage";

class CommonPages{
    getAlertPage(){
        return alertPage
    }
    getHomePage(){
        return homePage
    }
    getUploadPage(){
        return uploadPage
    }
}
export const commonPage = new CommonPages()