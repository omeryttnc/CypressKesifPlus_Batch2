import BrowserUtilities from "../../support/BrowserUtilities";
describe('each kullanimi',()=>{
    const email_alici = "kesifplusalici@mailsac.com";
  const password = "e*y7G2xhsTVAi5u";
    it('each 1', () => {
        let count=0
        // login olacagim
        // BrowserUtilities.loginMethod(email_alici,password)  -> way 1 browser utilities den cekebilirim
        cy.loginAlici()                                     // -> way 2 custom sommand kullanabiliriz
        // 95109 zipcode umu gonderecegeim
        cy.visit('/account/weekly-order')
        cy.get("[name='zipcode']").type('95109')
        // listeyi okuyup her degerin 1 den buyuk olduguna bakacagim
        cy.get(".d-block.h6.text-truncate").each(($element,index,$list)=>{
            // console.log($element.text());
            // console.log(index);
            // console.log($list.length);
            if(index%2==0){
                console.log(parseFloat( $element.text().split(' ')[0].substring(1)));
                expect(parseFloat( $element.text().split(' ')[0].substring(1))).to.greaterThan(1)
                count++
                console.log(count);
            }
            expect($list.length).equal(20) // listemin size ina bakmis
        }).then(()=>{
            expect(count).equal(10)
        })

    });
})