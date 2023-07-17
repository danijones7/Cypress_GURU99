const data = require('../../fixtures/dataLogin.json')

Cypress.on('uncught:exception', (err, runnable) => {
    //remove bootstep error
    return false;
});
describe('Agile Project Login with Valid Data', () => {
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

    it.skip('Successful Login', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input') // userid
            .type(data.users.admin.name)
        cy.get(':nth-child(2) > :nth-child(2) > input') //password
            .type(data.users.admin.password)

        cy.log('Click Login')
        cy.get('[type="submit"]').click()
        cy.url()
            .should('be.equal',
                'https://demo.guru99.com/Agile_Project/Agi_V1/customer/Customerhomepage.php')
        cy.log('Welcome text is shown correctly')
        cy.get('.heading3')
            .should('contain', "Welcome To Customer's Page of Guru99 Bank")
            .and('be.visible')
            .and('have.css', 'font-family', '"Open Sans", sans-serif')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'text-rendering', 'optimizelegibility')
            .and('have.css', 'font-size', '16.8px')
            .and('have.css', 'COLOR', 'rgb(75, 120, 30)')

        cy.log('Main Header is shown correctly')
        cy.get('.barone')
            .should('contain', 'Guru99 Bank')
            .and('be.visible')
            .and('have.css', 'font-size', '27px')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'padding', '10px')
            .and('have.css', 'margin', '20px')
            .and('have.css', 'BACKGROUND-COLOR', 'rgb(248, 155, 81)')
            .and('have.css', 'height', '50px')


        cy.log('Check images in the centre')
        cy.get('[src="/Agile_Project/Agi_V1/customer/images/1.gif"]')
            .should('be.visible')
            .and('have.css', 'vertical-align', 'middle')
            .and('have.css', 'border', '0px none rgb(128, 128, 128)')
        cy.get('[src="/Agile_Project/Agi_V1/customer/images/3.gif"]')
            .should('be.visible')
            .and('have.css', 'vertical-align', 'middle')
            .and('have.css', 'border', '0px none rgb(128, 128, 128)')
        cy.get('[src="/Agile_Project/Agi_V1/customer/images/2.gif"]')
            .should('be.visible')
            .and('have.css', 'vertical-align', 'middle')
            .and('have.css', 'border', '0px none rgb(128, 128, 128)')

        cy.log('Subnav is shown correctly')

        cy.log('"Customer" Subnav is shown correctly')
        cy.get('.orange > a')
            .should('contain', 'Customer')
            .should('have.attr', 'href', 'Customerhomepage.php')
            .should('be.visible')
            .and('have.css', 'margin-top', '0px')
            .and('have.css', 'padding', '10px')
            .and('have.css', 'BACKGROUND-COLOR', 'rgba(0, 0, 0, 0)')

        cy.log('make sure it has the Orange color')
        cy.get('li.orange')
            .and('have.css', 'BACKGROUND-COLOR', 'rgb(248, 155, 81)')

        cy.log('"MiniStatement" Subnav is shown correctly')
        cy.get('.menusubnav > :nth-child(2) > a')
            .should('contain', 'Mini Statement')
            .should('have.attr', 'href', 'MiniStatementInput.php')
            .should('be.visible')
            .and('have.css', 'margin-top', '0px')
            .and('have.css', 'padding', '10px')
            .and('have.css', 'BACKGROUND-COLOR', 'rgba(0, 0, 0, 0)')

        cy.log('"Logout" Subnav is shown correctly')
        cy.get('.menusubnav > :nth-child(3) > a')
            .should('contain', 'Log out')
            .should('have.attr', 'href', 'Logout.php')
            .should('be.visible')
            .and('have.css', 'margin-top', '0px')
            .and('have.css', 'padding', '10px')
            .and('have.css', 'BACKGROUND-COLOR', 'rgba(0, 0, 0, 0)')
        cy.log('Click on Logout')
        cy.get('.menusubnav > :nth-child(3) > a')
            .click();
        cy.on('window:confirm', () => true);
        cy.url().should('eq',
            'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');

    });

    it.skip('Reset button', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input') // userid
            .type(data.users.admin.name)
        cy.get(':nth-child(2) > :nth-child(2) > input') //password
            .type(data.users.admin.password)
        cy.get('[type="reset"]').click()
        cy.checkTheFieldIsClear(':nth-child(1) > :nth-child(2) > input')
        cy.checkTheFieldIsClear(':nth-child(2) > :nth-child(2) > input')
        cy.log('Click Submit button, Close the Alert')
        // cant catch the alert - bug
        cy.get('[type="submit"]').click()
        cy.on('window:confirm', () => true);
        cy.url().should('eq',
            'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');

    });

    it.skip('Enter a few spaces and valid user_id afterwards in UserID field, enter correct password.', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input') // userid
            .type(`    ${data.users.admin.name}`)
        cy.get(':nth-child(2) > :nth-child(2) > input') //password
            .type(data.users.admin.password)
        cy.log('Click Login')
        //BUG - catches the alert Login is noy successful
        //spaces infront arent cut
        cy.get('[type="submit"]').click()
        cy.url()
            .should('be.equal',
                'https://demo.guru99.com/Agile_Project/Agi_V1/customer/Customerhomepage.php')
        cy.log('Welcome text is shown correctly')
        cy.get('.heading3')
            .should('contain', "Welcome To Customer's Page of Guru99 Bank")
            .and('be.visible')

    });

    it('Enter valid user_id and a few spaces afterwards, enter correct password. Click Login ', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input') // userid
            .type(`${data.users.admin.name}    `)
        //this one goes okay
        cy.get(':nth-child(2) > :nth-child(2) > input') //password
            .type(data.users.admin.password)
        cy.log('Click Login')
        cy.get('[type="submit"]').click()
        cy.url()
            .should('be.equal',
                'https://demo.guru99.com/Agile_Project/Agi_V1/customer/Customerhomepage.php')
        cy.log('Welcome text is shown correctly')
        cy.get('.heading3')
            .should('contain', "Welcome To Customer's Page of Guru99 Bank")
            .and('be.visible')
    });

    it.skip('Enter valid user id & valid password, click  "Back" button, then click "Forward" button.', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input') // userid
            .type(data.users.admin.name)
        cy.get(':nth-child(2) > :nth-child(2) > input') //password
            .type(data.users.admin.password)
        cy.go('back')
        cy.go('forward')
        cy.log('Check the Password field is cleared')
        cy.checkTheFieldIsClear(':nth-child(2) > :nth-child(2) > input')
        cy.log('Click Submit button, Close the Alert')
        // cant catch the alert - bug
        cy.get('[type="submit"]').click()
        cy.on('window:confirm', () => true);
        cy.url().should('eq',
            'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    });


    it.skip('Checks the links', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input')
            .type('1303')
        cy.get(':nth-child(2) > :nth-child(2) > input')
            .type('Guru99')
        cy.get('[type="submit"]').click()
        // cy.get('.nav > :nth-child(8) > a').click()   
        // так лучше из cypress не копировать, непонтно потом
        cy.contains('Insurance Project').click()
        cy.url('https://demo.guru99.com/insurance/v1/index.php')
        cy.contains('Agile Project').click()
        cy.url('https://demo.guru99.com/Agile_Project/Agi_V1/')
        cy.contains('Bank Project').click()
        cy.url('https://demo.guru99.com/V1/index.php')
        cy.contains('Security Project').click()
        cy.url('https://demo.guru99.com/Security/SEC_V1/index.php')
        cy.contains('Telecom Project').click()
        cy.url('https://demo.guru99.com/telecom/index.html')
        cy.contains('Payment Gateway Project').click()
        cy.url('https://demo.guru99.com/payment-gateway/index.php')
        cy.contains('New Tours').click()
        cy.url('https://demo.guru99.com/test/newtours/')

    })

    it.skip('Checks the dropdowns in nav', () => {
        cy.get(':nth-child(1) > .dropdown-toggle').click()
        // создать команду, и по ней проверять все дропдауны 

    })

});

    //         .and('have.css', '', '')


