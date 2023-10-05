import { alertPage } from "./AlertPage";
import { homePage } from "./HomePage";

class CommonPages{
    getAlertPage(){
        return alertPage
    }
    getHomePage(){
        return homePage
    }
}
export const commonPage = new CommonPages()