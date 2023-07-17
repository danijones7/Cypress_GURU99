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
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php');
    });


    it.skip('Checks the Logo appearance', () => {
        cy.get('a.logo')
            .contains('a', 'Guru99 telecom')
            .should('be.visible')
            .and('have.attr', 'href', 'index.html')
            .and('have.css', 'color', 'rgb(246, 117, 94)')
            .and('have.css', 'font-family', 'Pacifico, cursive')
    });

    it.skip('Checks the Main Header', () => {
        cy.get('h1')
            .contains('Add Customer')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(37, 162, 195)')
            .and('have.css', 'font-family', 'Montserrat, sans-serif')
            .and('have.css', 'font-size', '29px')
    });

    it.skip('Checks the TextFields', () => {
        cy.log('Field - Background Check')
        cy.get('form > :nth-child(1)')
            .contains('Background Check')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(37, 162, 195)')
            .and('have.css', 'font-family', 'Montserrat, sans-serif')
            .and('have.css', 'font-size', '18px');

        cy.log('Field - Billing address')
        cy.get(':nth-child(3) > h3')
            .contains('Billing address')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(37, 162, 195)')
            .and('have.css', 'font-family', 'Montserrat, sans-serif')
            .and('have.css', 'font-size', '18px');
    });

    it.skip('Checks the RadioButtons', () => {
        cy.log('Done Radio Button')
        cy.get('#done')
            .should('exist')
            .and('have.value', 'ACTIVE')
        //BUG the button is not active by default 

        cy.log('Pending Radio Button')
        cy.get('#pending')
            .should('exist')
            .and('have.value', 'INACTIVE')
    });

    it.skip('Checks left Menu', () => {
        cy.get('.left > [href="#menu"]')
            .should('be.visible')
            .click()
        cy.log('Check backgrond color')
        cy.get('#menu')
            .should('have.css', 'background-color', 'rgb(37, 162, 195)')
        cy.log('Check Menu Links')
        cy.get('.links > :nth-child(1) > a')
            .contains('Home')
            .should('have.attr', 'href', 'index.html')

        cy.get('.links > :nth-child(2) > a')
            .contains('Add Customer')
            .should('have.attr', 'href', 'addcustomer.php');

        cy.get('.links > :nth-child(3) > a')
            .contains('Add Tariff Plans')
            .should('have.attr', 'href', 'addtariffplans.php');

        cy.get('.links > :nth-child(4) > a')
            .contains('Add Tariff Plan to Customer')
            .should('have.attr', 'href', 'assigntariffplantocustomer.php');

        cy.get('.links > :nth-child(5) > a')
            .contains('Pay Billing')
            .should('have.attr', 'href', 'billing.php');
        cy.get('.close').click()

    });

    it.skip('Checks the Input Fields', () => {
        cy.log('Placeholder - FirstName')
        cy.get('#fname')
            .should('be.visible')
            .should('have.attr', 'placeholder', 'FirstName')
            .and('have.attr', 'onkeyup', 'validatecustomername();')
            .and('have.attr', 'onblur', 'validatecustomername();')
        // .and('have.attr', 'maxlength', '50'); - doesnt have. BUG

        cy.log('Placeholder - LastName')
        cy.get('#lname')
            .should('be.visible')
            .should('have.attr', 'placeholder', 'LastName')
            .and('have.attr', 'onkeyup', 'validatecustomername1();')
            .and('have.attr', 'onblur', 'validatecustomername1();')
        // .and('have.attr', 'maxlength', '50'); - doesnt have. BUG

        cy.log('Placeholder - Email')
        cy.get('#email')
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Email')
            .and('have.attr', 'onkeyup', 'validateEmail();')
            .and('have.attr', 'onblur', 'validateEmail();')
        // .and('have.attr', 'maxlength', '50'); - doesnt have. BUG

        cy.log('Placeholder - Address')
        cy.get(':nth-child(7) > #message')
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Enter your address')
            .and('have.attr', 'onkeyup', 'validateAddress();')
            .and('have.attr', 'onblur', 'validateAddress();')
        // .and('have.attr', 'maxlength', '50'); - doesnt have. BUG

        cy.log('Placeholder - MobileNumber')
        cy.get('#telephoneno')
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Mobile Number')
            .and('have.attr', 'onkeyup', 'validateTelephone();')
            .and('have.attr', 'onblur', 'validateTelephone();')
            .and('have.attr', 'maxlength', '12')

    });

    it.skip('Checks the Submit button Appearamce', () => {
        cy.get('input[type="submit"]')
            .should('be.visible')
            .and('be.enabled')
            .and('have.value', 'Submit')
            .and('have.css', 'background-color', 'rgb(246, 117, 94)')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
    });

    it.skip('Checks the Reset button Appearamce', () => {
        cy.get('input[type="Reset"]')
            .should('be.visible')
            .and('be.enabled')
            .and('have.value', 'Reset')
            .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
            .and('have.css', 'color', 'rgb(114, 122, 130)')
    });

    it('Cheks the error messages not to be visible', () => {
        cy.get('#message')
            .should('not.be.visible')
            .and('have.css', 'color', 'rgb(114, 122, 130)');

        cy.get('#message50')
            .should('not.be.visible')
            .and('have.css', 'color', 'rgb(114, 122, 130)');

        cy.get('#message9')
            .should('not.be.visible')
            .and('have.css', 'color', 'rgb(114, 122, 130)');

        cy.get('#message3')
            .should('not.be.visible')
            .and('have.css', 'color', 'rgb(114, 122, 130)');

        cy.get('#message7')
            .should('not.be.visible')
            .and('have.css', 'color', 'rgb(114, 122, 130)');

    });








});

// .and('have.css', 'color', 'rgb(114, 122, 130)')