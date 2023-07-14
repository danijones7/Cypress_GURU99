Cypress.on('uncught:exception', (err, runnable) => {
    //remove bootstep error
    return false;
});
describe('UI of the page Agile Project', () => {
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


    it.skip('UserId text field', () => {
        cy.get(':nth-child(1) > [align="right"]')
            .should('be.visible')
            .and('contain', 'UserID')
            .and('have.css', 'color', 'rgb(128, 128, 128)')
            
    });

    it.skip('Password text field', () => {
        cy.get(':nth-child(2) > [align="right"]')
            .should('be.visible')
            .and('contain', 'Password')
            .and('have.css', 'color', 'rgb(128, 128, 128)')
    });

    it.skip('Checks UserID input field + its MaxLength', () => {
        cy.get(':nth-child(1) > :nth-child(2) > input')
            .should('be.visible')
            .and('have.attr', 'maxlength', '10');
    });

    it.skip('Checks Password input field', () => {
        cy.get(':nth-child(2) > :nth-child(2) > input')
            .should('be.visible')
            .and('have.attr', 'type', 'password');  
        //cheks entered symbils in the field will be hidden
    });

    it.skip('Checks Login btn', () => {
        cy.get('[type="submit"]')
            .should('contain', 'LOGIN')
            .and('be.visible')
            .and('be.enabled')
            .and('have.css', 'cursor', 'pointer')
            .and('have.css', 'border-color', 'rgb(128, 128, 128)')
    });

    it.skip('Checks Reset btn', () => {
        cy.get('[type="reset"]')
            .should('have.attr','value', 'RESET')
            .and('be.visible')
            .and('be.enabled')
            .and('have.css', 'cursor', 'pointer')
            .and('have.css', 'border-color', 'rgb(128, 128, 128)')      
    });

    it.skip('Main Header css is as needed', () => {
        cy.get(':nth-child(5) > .barone')
            .should('contain', 'Guru99 Bank')
            .and('be.visible')
            .and('have.css', 'font-size', '27px')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'padding', '10px')
            .and('have.css', 'margin', '20px')
            .and('have.css', 'BACKGROUND-COLOR', 'rgb(248, 155, 81)')
            .and('have.css', 'height', '50px')    
    });

    it('Checks the Error Messages are hidden', () => {
        cy.get('#message18')
            .and('not.be.visible')
        cy.get('#message23')
            .and('not.be.visible')
                
    });

    
    


});

// it('', () => {
        
// });