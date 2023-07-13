const data = require('../../fixtures/dataAddRariffPlan.json')

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
        .and('have.css', 'text-align', 'center')
        .and('have.css', 'font-weight', '700')
        .and('have.css', 'color', 'rgb(37, 162, 195)')
});

});

// it('', () => {
        
// });