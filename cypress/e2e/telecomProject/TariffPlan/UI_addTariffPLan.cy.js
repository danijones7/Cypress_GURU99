describe('Cheks the UI of Add Tariff Plan Page', () => {
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


    it('Checks the Logo appearance', () => {
            cy.get('.left > .logo')
                .should('contain', 'Guru99 telecom')
                .and('be.visible')
                .and('have.css', 'font-family', 'Pacifico, cursive')
                .and('have.css', 'color', 'rgb(246, 117, 94)')
                .and('have.css', 'text-align', 'left')
        });
    it('Checks Logo URL', () => {
            cy.get('.left > .logo').click()
            cy.url().should('eq', 'https://demo.guru99.com/telecom/index.html')
        });

    it('Checks left Menu', () => {
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
    
    it('Checks the Main Header', () => {
        cy.get('h1')
        .contains('Add Tariff Plans')
        .should('be.visible')
        .and('have.css', 'color', 'rgb(37, 162, 195)')
        .and('have.css', 'font-family', 'Montserrat, sans-serif')
        .and('have.css', 'font-size', '29px')       
    });
    
    it('Checks the TextFields', () => {
    cy.log('Field - Monthly Rental')
        cy.get(':nth-child(1) > h3')
            .contains('Monthly Rental')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(37, 162, 195)')
            .and('have.css', 'font-family', 'Montserrat, sans-serif')
            .and('have.css', 'font-size', '18px');
    cy.log('Field - Free Local Minutes')
        cy.get(':nth-child(6) > h3')
            .contains('Free Local Minutes')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(37, 162, 195)')
            .and('have.css', 'font-family', 'Montserrat, sans-serif')
            .and('have.css', 'font-size', '18px');
    cy.log('Field - Free International Minutes')   
        cy.get(':nth-child(11) > h3')
            .contains('Free International Minutes')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(37, 162, 195)')
            .and('have.css', 'font-family', 'Montserrat, sans-serif')
            .and('have.css', 'font-size', '18px');
    cy.log('Field - Free SMS Pack')    
        cy.get(':nth-child(16) > h3')
            .contains('Free SMS Pack')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(37, 162, 195)')
            .and('have.css', 'font-family', 'Montserrat, sans-serif')
            .and('have.css', 'font-size', '18px');
        
    cy.log('Field - Local Per Minutes Charges')    
        cy.get(':nth-child(21) > h3')
            .contains('Local Per Minutes Charges')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(37, 162, 195)')
            .and('have.css', 'font-family', 'Montserrat, sans-serif')
            .and('have.css', 'font-size', '18px');
        
    cy.log('Field - International Per Minutes Charges')   
        cy.get(':nth-child(26) > h3')
        .contains('International Per Minutes Charges')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(37, 162, 195)')
            .and('have.css', 'font-family', 'Montserrat, sans-serif')
            .and('have.css', 'font-size', '18px');
        
    cy.log('Field - SMS Per Charges')
        cy.get(':nth-child(31) > h3')
            .should('contain','SMS Per Charges')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(37, 162, 195)')
            .and('have.css', 'font-family', 'Montserrat, sans-serif')
            .and('have.css', 'font-size', '18px');
});
        
    it('Checks input fields with placeholders', () => {
        cy.log('Placeholder - Monthly Rental') 
            cy.get('#rental1')
                .should('be.visible')
                .should('have.attr', 'placeholder', 'Monthly Rental')
                .and('have.attr', 'onkeyup', 'validateno();')
                // onkeyup - js or f to execute ewhen a user releases a key on the keyboard after pressing it
                .and('have.attr', 'onblur', 'validateno();')
                .and('have.attr','maxlength','5');
                // onblur - js or f to execute when an element loses focus
                
        cy.log('Placeholder - Free Local Minutes') 
            cy.get('#local_minutes')
                .should('be.visible')
                .should('have.attr', 'placeholder', 'Free Local Minutes')
                .and('have.attr', 'onkeyup', 'validateno1();')
                .and('have.attr', 'onblur', 'validateno1();')
                .and('have.attr','maxlength','5');
        
        cy.log('Placeholder - Free International Minutes') 
            cy.get('#inter_minutes')
                .should('be.visible')
                .should('have.attr', 'placeholder', 'Free International Minutes')
                .and('have.attr', 'onkeyup', 'validateno2();')
                .and('have.attr', 'onblur', 'validateno2();')
                .and('have.attr','maxlength','5');
        
        cy.log('Placeholder - Free SMS Pack') 
            cy.get('#sms_pack')
                .should('be.visible')
                .should('have.attr', 'placeholder', 'Free SMS Pack')
                .and('have.attr', 'onkeyup', 'validateno3();')
                .and('have.attr', 'onblur', 'validateno3();').and('have.attr','maxlength','5');
        
        cy.log('Placeholder - Local Per Minutes Charges') 
            cy.get('#minutes_charges')
                .should('be.visible')
                .should('have.attr', 'placeholder', 'Local Per Minutes Charges')
                .and('have.attr', 'onkeyup', 'validateno4();')
                .and('have.attr', 'onblur', 'validateno4();')
                .and('have.attr','maxlength','3');
        
        cy.log('Placeholder - Inter. Per Minutes Charges') 
            cy.get('#inter_charges')
                .should('be.visible')
                .should('have.attr', 'placeholder', 'Inter. Per Minutes Charges')
                .and('have.attr', 'onkeyup', 'validateno5();')
                .and('have.attr', 'onblur', 'validateno5();')
                .and('have.attr','maxlength','3');
                
        cy.log('Placeholder - SMS Per Charges') 
            cy.get('#sms_charges')
                .should('be.visible')
                .should('have.attr', 'placeholder', 'SMS Per Charges')
                .and('have.attr', 'onkeyup', 'validateno6();')
                .and('have.attr', 'onblur', 'validateno6();')
                .and('have.attr','maxlength','3');
          
        });
    it('Cheks the error messages not to be visible', () => {
        cy.get('#message2')
            .should('not.be.visible')
            .and('have.css', 'color', 'rgb(114, 122, 130)');
        
        cy.get('#message3')
            .should('not.be.visible')
            .and('have.css', 'color', 'rgb(114, 122, 130)');
        
        cy.get('#message4')
            .should('not.be.visible')
            .and('have.css', 'color', 'rgb(114, 122, 130)');
        
        cy.get('#message5')
            .should('not.be.visible')
            .and('have.css', 'color', 'rgb(114, 122, 130)');
        
        cy.get('#message6')
            .should('not.be.visible')
            .and('have.css', 'color', 'rgb(114, 122, 130)');
        
        cy.get('#message7')
            .should('not.be.visible')
            .and('have.css', 'color', 'rgb(114, 122, 130)');
        
        cy.get('#message8')
            .should('not.be.visible')
            .and('have.css', 'color', 'rgb(114, 122, 130)');
                
    });
    
    it('Checks the Submit button Appearamce', () => {
        cy.get(':nth-child(1) > input')
        .should('be.visible')
        .and('contain', 'submit')
            .and('have.css', 'background-color', 'rgb(246, 117, 94)')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
        
    });
    
    it('Checks the Reset button Appearamce', () => {
        cy.get('.alt')
        .should('be.visible')
        .and('have.value', 'Reset')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .and('have.css', 'color', 'rgb(114, 122, 130)')
            
        
    });
    
});


// it('', () => {
        
// });