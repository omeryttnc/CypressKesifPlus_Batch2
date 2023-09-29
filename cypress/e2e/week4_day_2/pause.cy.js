import colors from '../../fixtures/Colors.json'
describe('pause calismasi',()=>{
    it('1', () => {
        cy.loginAlici()
        cy.visit('/account/weekly-order') //.pause()
        
        
        
        cy.pause() // bize o ani durdurup adim adim ilerlememizi sagliyor

        

        cy.get("[name='zipcode']").type('95109{enter}')

        cy.get("li.weeklyOrder_cardContainer__ykebk") // 10 tane cart verdi
        .first() // 10 tane kartin ilkini verdi 
        .find("div.ImageSlider_dot__3hWJ3") // ilk kartin 3 tane noktasini verdi
        .first() // 3 noktanin ilkini verecek
        .should('have.css','color',colors.resim.greenColor)

        cy.get("li.weeklyOrder_cardContainer__ykebk") // 10 tane cart verdi
        .first() // 10 tane kartin ilkini verdi 
        .find("div.ImageSlider_dot__3hWJ3") // ilk kartin 3 tane noktasini verdi
        .eq(1) // 3 noktanin ilkini verecek
        .should('have.css','color',colors.resim.greyColor)

        cy.get(".ImageSlider_rightArrow__2fLv4")
        .eq(0) // yada .first()
        .click()

        cy.get("li.weeklyOrder_cardContainer__ykebk") // 10 tane cart verdi
        .first() // 10 tane kartin ilkini verdi 
        .find("div.ImageSlider_dot__3hWJ3") // ilk kartin 3 tane noktasini verdi
        .first() // 3 noktanin ilkini verecek
        .should('have.css','color',colors.resim.greyColor)

        cy.get("li.weeklyOrder_cardContainer__ykebk") // 10 tane cart verdi
        .first() // 10 tane kartin ilkini verdi 
        .find("div.ImageSlider_dot__3hWJ3") // ilk kartin 3 tane noktasini verdi
        .eq(1) // 3 noktanin ilkini verecek
        .should('have.css','color',colors.resim.greenColor)



    });
})