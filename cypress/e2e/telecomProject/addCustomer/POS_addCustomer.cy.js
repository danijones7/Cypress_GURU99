const data = require('../../../fixtures/dataCustomer.json')

describe('Cheks the UI of Add Customer Page', () => {
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
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('v6 is not defined')) {
                return false
            }
        });
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php');
    });

    it('Adds ACTIVE Customer with NOM Data', () => {
        cy.log('Click Done')
        cy.get('label[for="done"]').click();
        cy.log('Fill the form with NOM Valid Data')
        cy.FillCustomerForm(data.nom)
        cy.log('Click Submit button')
        cy.get('input[type="submit"]').click()
        cy.CustomerAddedStatus('ACTIVE')
    });

    it('Adds INaCTIVE Customer with NOM Data', () => {
        cy.log('Click Pending')
        cy.get('label[for="pending"]').click();
        cy.log('Fill the form with NOM Valid Data')
        cy.FillCustomerForm(data.nom)
        cy.log('Click Submit button')
        cy.get('input[type="submit"]').click()
        cy.CustomerAddedStatus('INACTIVE')
    });

    it('Checks RESET button functionality', () => {
        cy.log('Click Done')
        cy.get('label[for="done"]').click();
        cy.log('Fill the form with NOM Valid Data')
        cy.FillCustomerForm(data.nom)
        cy.get('input[type="reset"]').click()
        cy.checkTheFieldIsClear(data.objects.firstName)
        cy.checkTheFieldIsClear(data.objects.lastName)
        cy.checkTheFieldIsClear(data.objects.email)
        cy.checkTheFieldIsClear(data.objects.address)
        cy.checkTheFieldIsClear(data.objects.mobileNumber)
        cy.log('Click Submit button')
        cy.get('input[type="submit"]').click()
        cy.log('BUG?')
        //BUG: Reset button erase only frontend. 
        //Submitted correctly with empty fields

    });

});