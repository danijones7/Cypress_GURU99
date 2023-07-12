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

    it('Submit button', () => {
        cy.get(':nth-child(1) > [align="right"]')
            .should('be.visible')
            .and('contain', 'UserID')
        cy.log('UserID is visible)')
        cy.get(':nth-child(2) > [align="right"]')
            .should('be.visible')
            .and('contain', 'Password')
        cy.log('Password is visible)')
        cy.get(':nth-child(1) > :nth-child(2) > input')
            .type('1303')
        cy.get(':nth-child(2) > :nth-child(2) > input')
            .type('Guru99')
        cy.get('[type="submit"]').click()
            .should('contain', 'LOGIN')
            .and('be.visible')
        cy.log('LOGIN btn is visible)')


    })

    it('Reset button', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input')
            .type('1303')
        cy.get(':nth-child(2) > :nth-child(2) > input')
            .type('Guru99')
        cy.get('[type="reset"]').click()

    })

    it('Checks the links', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input')
            .type('1303')
        cy.get(':nth-child(2) > :nth-child(2) > input')
            .type('Guru99')
        cy.get('[type="submit"]').click()
        cy.contains('Telecom Project').click()
        // cy.get('.nav > :nth-child(8) > a').click()

    })
});



