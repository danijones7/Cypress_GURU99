Cypress.on('uncught:exception', (err, runnable) => {
    //remove bootstep error
    return false;
});
describe('Agile Project', () => {
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

    it('Successful Login', () => {
        cy.log('UserID is visible)')
        cy.get(':nth-child(1) > [align="right"]')
            .should('be.visible')
            .and('contain', 'UserID')

        cy.log('Password is visible)')
        cy.get(':nth-child(2) > [align="right"]')
            .should('be.visible')
            .and('contain', 'Password')

        cy.get(':nth-child(1) > :nth-child(2) > input') // userid
            .type('1303')
        cy.get(':nth-child(2) > :nth-child(2) > input')
            .type('Guru99')

        cy.log('LOGIN btn is enabled and visible)')
        cy.get('[type="submit"]').click()
            .should('contain', 'LOGIN')
            .and('be.visible')
            .and('be.enabled')

        cy.url()
            .should('be.equal', 'https://demo.guru99.com/Agile_Project/Agi_V1/customer/Customerhomepage.php')

        cy.log('Welcome text css is as needed')
        cy.get('.heading3')
            .should('contain', "Welcome To Customer's Page of Guru99 Bank")
            .and('be.visible')
            .and('have.css', 'font-family', '"Open Sans", sans-serif')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'text-rendering', 'optimizelegibility')
            .and('have.css', 'font-size', '16.8px')
            .and('have.css', 'COLOR', 'rgb(75, 120, 30)')

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
        cy.get('.orange > a')
            .should('be.visible')
            .and('contain', 'Customer')
            .and('have.css', 'margin-top', '0px')
            .and('have.css', 'padding', '10px')
            .and('have.css', 'BACKGROUND-COLOR', 'rgba(0, 0, 0, 0)')

    })

    it('Reset button', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input')
            .type('1303')
        cy.get(':nth-child(2) > :nth-child(2) > input')
            .type('Guru99')
        cy.get('[type="reset"]').click()
        // cy.get('[type="submit"]').click() //  не отловить алерт 

    })

    it('Checks the links', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input')
            .type('1303')
        cy.get(':nth-child(2) > :nth-child(2) > input')
            .type('Guru99')
        cy.get('[type="submit"]').click()
        // cy.get('.nav > :nth-child(8) > a').click()   // так лучше из cypress не копировать, непонтно потом 
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

    it('Checks the dropdowns in nav', () => {
        cy.get(':nth-child(1) > .dropdown-toggle').click()
        // создать команду, и по ней проверять все дропдауны 

    })

});

    //         .and('have.css', '', '')
    //         .and('have.css', '', '')
    //         .and('have.css', '', '')
    //         .and('have.css', '', '')
    //         .and('have.css', '', '')
    //         .and('have.css', '', '')
    //         .and('have.css', '', '')
    //         .and('have.css', '', '')
    //         .and('have.css', '', '')
    //         .and('have.css', '', '')

