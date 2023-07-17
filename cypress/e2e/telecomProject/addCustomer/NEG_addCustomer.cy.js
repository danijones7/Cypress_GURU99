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

    it.skip('Adds ACTIVE Customer with invalid Data (spaces First', () => {
        cy.log('Click Done')
        cy.get('label[for="done"]').click();
        cy.log('Fill the form with NOM Valid Data')
        cy.FillCustomerForm(data.spaces)
        cy.CheckErrorMessage('#message', data.errorMessages.spaceFirst, 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message50', data.errorMessages.spaceFirst, 'rgb(114, 122, 130)')
        // cy.CheckErrorMessage('#message9', data.errorMessages.spaceFirst, 'rgb(114, 122, 130)')
        //BUG - allows spaces be in front of email input
        cy.CheckErrorMessage('#message3', data.errorMessages.spaceFirst, 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message7', data.errorMessages.spaceFirst, 'rgb(114, 122, 130)')

        cy.log('Click Submit button')
        cy.get('input[type="submit"]').click()
        cy.on('window:alert', (text) => {
            expect(text).to.eq('please fill all fields');
        });
        cy.on('window:confirm', () => true);

    });

    it('Leave all the fields Blank', () => {
        cy.log('Click Done')
        cy.get('label[for="done"]').click();
        cy.log('Blank Filds')
        cy.clickOnTheField(data.objects.firstName)
        cy.clickOnTheField(data.objects.lastName)
        cy.clickOnTheField(data.objects.email)
        cy.clickOnTheField(data.objects.address)
        cy.clickOnTheField(data.objects.mobileNumber)
        cy.get('#main').click() //click on the empty spot

        cy.CheckErrorMessage('#message', data.errorMessages.nameBlank, 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message50', data.errorMessages.nameBlank, 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message9', data.errorMessages.emailBlank, 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message3', data.errorMessages.addressBlank, 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message7', data.errorMessages.mobileNumberBlank, 'rgb(114, 122, 130)')


        cy.log('Click Submit button')
        cy.get('input[type="submit"]').click()
        cy.on('window:alert', (text) => {
            expect(text).to.eq('please fill all fields');
        });
        cy.on('window:confirm', () => true);

    });





});