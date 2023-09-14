const { Test } = require("mocha");

describe('visit',()=>{
    it('visit 1', () => {
        cy.visit('https://test.urbanicfarm.com/account/home')
    });
    it('visit 2', () => {
        cy.visit('/account/home') // config dosyasina base url ekledikten sonra tekrar tekrar baseurl yazmamiz gerekmiyor
    });
})

// selenium da syntex
//@Nested asdsdas{ -> context


//}
// class Login{


//     @Test
//     public void userIsAbleToLogin(){


//     }
// }