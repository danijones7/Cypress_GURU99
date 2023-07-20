const data = require('../../fixtures/dataLogin.json')

Cypress.on('uncught:exception', (err, runnable) => {
    //remove bootstep error
    return false;
});
describe('Agile Project Login with Invalid Data', () => {
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
        cy.visit('https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    });

    it.skip('Correct UserId and Invalid password', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input') // userid
            .type(data.users.admin.name)
        cy.get(':nth-child(2) > :nth-child(2) > input') //password
            .type(data.users.invalid.password)
        cy.log('Click Login')
        // cant catch the alert - bug (though login is fine)
        cy.get('[type="submit"]').click()
        cy.on('window:confirm', () => true);
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    });

    it.skip('Invalid UserId and Correct password', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input') // userid
            .type(data.users.invalid.name)
        cy.get(':nth-child(2) > :nth-child(2) > input') //password
            .type(data.users.admin.password)
        cy.log('Click Login')
        // cant catch the alert - bug (though login is fine)
        cy.get('[type="submit"]').click()
        cy.on('window:confirm', () => true);
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    });

    it.skip(' UserID field is Empty, enter correct password', () => {
        cy.clickOnTheField(':nth-child(1) > :nth-child(2) > input')
        // userid
        cy.get(':nth-child(2) > :nth-child(2) > input') //password
            .type(data.users.admin.password)
        cy.CheckErrorMessage(
            '#message23',
            'User-ID must not be blank',
            'rgb(128, 128, 128)')
        cy.log('Click Login')
        // cant catch the alert - bug (though login is fine)
        cy.get('[type="submit"]').click()
        cy.on('window:confirm', () => true);
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    });

    it.skip('Enter valid user_id, leave Password field Empty.', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input') // userid
            .type(data.users.admin.name)
        cy.clickOnTheField(':nth-child(2) > :nth-child(2) > input') //password
        cy.get('body').click();
        cy.CheckErrorMessage(
            '#message18',
            'Password must not be blank',
            'rgb(128, 128, 128)')
        cy.log('Click Login')
        // cant catch the alert - bug (though login is fine)
        cy.get('[type="submit"]').click()
        cy.on('window:confirm', () => true);
        cy.url().should('eq',
            'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    });

    it.skip('Enter valid user_id in the field password and correct password in the field UserId', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input') // userid
            .type(data.users.admin.password)
        cy.get(':nth-child(2) > :nth-child(2) > input') //password
            .type(data.users.admin.name)
        cy.log('Click Login')
        // cant catch the alert - bug (though login is fine)
        cy.get('[type="submit"]').click()
        cy.on('window:confirm', () => true);
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    });

    it.skip('Enter a few spaces first and valid user_id after in the UserId field and correct password in Password field', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input') // userid
            .type(data.users.spacesBefore.name)
        cy.get(':nth-child(2) > :nth-child(2) > input') //password
            .type(data.users.admin.password)
        cy.log('Click Login')
        // cant catch the alert - bug (though login is fine)
        cy.get('[type="submit"]').click()
        cy.on('window:confirm', () => true);
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    });

    it.skip('Enter valid user_id and a few spaces after in the UserId field and correct password', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input') // userid
            .type(data.users.spacesAfter.name)
        cy.get(':nth-child(2) > :nth-child(2) > input') //password
            .type(data.users.admin.password)
        cy.log('Click Login')
        // cant catch the alert - bug (though login is fine)
        cy.get('[type="submit"]').click()
        cy.on('window:confirm', () => true);
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    });

    it.skip('Enter valid user_id in the UserId field and a few spaces first and correct password after in Password field', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input') // userid
            .type(data.users.admin.name)
        cy.get(':nth-child(2) > :nth-child(2) > input') //password
            .type(data.users.spacesBefore.password)
        cy.log('Click Login')
        // cant catch the alert - bug (though login is fine)
        cy.get('[type="submit"]').click()
        cy.on('window:confirm', () => true);
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    });

    it.skip('Enter valid user_id in the UserId field and correct password and a fews spaces after in Password field', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input') // userid
            .type(data.users.admin.name)
        cy.get(':nth-child(2) > :nth-child(2) > input') //password
            .type(data.users.spacesAfter.password)
        cy.log('Click Login')
        // cant catch the alert - bug (though login is fine)
        cy.get('[type="submit"]').click()
        cy.on('window:confirm', () => true);
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    });



});