const data = require('../../../fixtures/dataAddRariffPlan.json')

describe('Cheks Add Tariff Plan with Valid Data', () => {
    beforeEach(() => {
        cy.fixture("cookies.json").then((cookies) => {
            cookies.forEach((cookie) => {
                if (cookie.name.startsWith("__Secure-")) {
                    cy.setCookie(cookie.name, cookie.value, { secure: true });
                } else {
                    cy.setCookie(cookie.name, cookie.value);
                }
            });
        });
        cy.visit('https://demo.guru99.com/telecom/addtariffplans.php');
    });

    it('Checks the input of MAX Data', () => {
    cy.log('Fill all the fields with MAX data')
        cy.FillTariffPlan(data.max)
    cy.log('Click Submit button')
        cy.get(':nth-child(1) > input').click()
        cy.url().should('eq', 'https://demo.guru99.com/telecom/addtariffplans.php')
    cy.log('Check the message')
        cy.get('h2')
            .should('contain', 'Congratulation you add Tariff Plan')
            .and('have.css', 'text-align', 'center')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'color', 'rgb(37, 162, 195)')
    cy.log('Check Home button')
        cy.get('.button')
            .should('contain', 'Home')
            .and('have.attr','href', 'index.html')
            .and('be.visible')
            .and('have.css', 'background-color', 'rgb(246, 117, 94)')
            .and('have.css', 'cursor', 'pointer')
            .and('have.css', 'color', 'rgb(255, 255, 255)')    
    
        
    });
    
    it('Cheks the input of MIN Data', () => {
    cy.log('Fill all the fields with MIN data')
        cy.FillTariffPlan(data.min)
    cy.log('Click Submit button')
        cy.get(':nth-child(1) > input').click()
        cy.url().should('eq', 'https://demo.guru99.com/telecom/addtariffplans.php')
    cy.log('Check the message')
        cy.get('h2')
            .should('contain', 'Congratulation you add Tariff Plan')
            .and('have.css', 'text-align', 'center')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'color', 'rgb(37, 162, 195)')
    cy.log('Check Home button')
        cy.get('.button')
                .should('contain', 'Home')
                .and('have.attr','href', 'index.html')
                .and('be.visible')
                .and('have.css', 'background-color', 'rgb(246, 117, 94)')
                .and('have.css', 'cursor', 'pointer')
                .and('have.css', 'color', 'rgb(255, 255, 255)')
    });
        
    it('Cheks the input of NOM Data', () => {
    cy.log('Fill all the fields with NOM data')
        cy.FillTariffPlan(data.nom)
    cy.log('Click Submit button')
        cy.get(':nth-child(1) > input').click()
        cy.url().should('eq', 'https://demo.guru99.com/telecom/addtariffplans.php')
    cy.log('Check the message')
        cy.get('h2')
            .should('contain', 'Congratulation you add Tariff Plan') 
            .and('be.visible')
            .and('have.css', 'text-align', 'center')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'color', 'rgb(37, 162, 195)')
        
    cy.log('Check Home button')
        cy.get('.button')
            .should('contain', 'Home')
            .and('have.attr','href', 'index.html')
            .and('be.visible')
            .and('have.css', 'background-color', 'rgb(246, 117, 94)')
            .and('have.css', 'cursor', 'pointer')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
        
    });
    
    it.skip('Checks Reset btn Functionality', () => {   
    cy.log('Fill all the fields with NOM data')
        cy.FillTariffPlan(data.nom)
    cy.log('Click Reset button')
        cy.get('.alt').click()
    cy.log('Check the fields are cleared')
        cy.checkTheFieldIsClear(data.objects.monthlyRental)
        cy.checkTheFieldIsClear(data.objects.freeLocalMin)
        cy.checkTheFieldIsClear(data.objects.freeInterMin)
        cy.checkTheFieldIsClear(data.objects.freeSMSPack)
        cy.checkTheFieldIsClear(data.objects.localPerMinCharges)
        cy.checkTheFieldIsClear(data.objects.interPerMinCharges)
        cy.checkTheFieldIsClear(data.objects.SMSPerCharges)
        cy.checkTheFieldIsClear(data.objects.interPerMinCharges)
        //this one fails as the Reset btn doesn't work correctly
        //allows the Submit the Form
    cy.log('Click Submit button, Close the Alert')
        cy.submitClick().then((stub) => {
            cy.popUpErrorCheck(stub);
        });     
    });

});

// it('', () => {
        
// });