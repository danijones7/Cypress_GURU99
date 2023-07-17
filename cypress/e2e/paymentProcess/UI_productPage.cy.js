const data = require('../../fixtures/dataProducts.json')

describe('Cheks UI of the Product Page', () => {
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
        cy.visit('https://demo.guru99.com/payment-gateway/index.php');
    });

    it.skip('Ckecks Header', () => {
    cy.log('Chekcs Header color and visibility')
        cy.get('#header')
        .should('be.visible')
            .and('have.css', 'background-color', 'rgb(108, 192, 145)')
    cy.log('Checks Logo')
        cy.get('a.logo')
            .contains('a[href="purchasetoy.php"]', 'Guru99 Payment Gateway')
            .should('be.visible');
    cy.log('Checks the nav')
        cy.get('#nav a').should('have.length', 3).each(($link) => {
            const href = $link.attr('href');
            const text = $link.text();
            expect(href).to.not.be.empty;
            expect(text).to.not.be.empty;
        });
    cy.log('Cheks the links')
        cy.get('#nav > [href="purchasetoy.php"]')
            .should('contain','Cart')
        cy.get('#nav > [href="cardnumber.php"]')
            .should('contain', 'Generate Card Number')
        cy.get('#nav > [href="check_credit_balance.php"]')
            .should('contain', 'Check Credit Card Limit')
            
    });

    it.skip('Ckecks Product Name', () => {
        cy.get('h2')
            .should('be.visible')
            .and('contain', data.products.product.name)
            .and('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
            .and('have.css', 'font-weight', '300')
            .and('have.css', 'line-height', '66px')
            .and('have.css', 'color', 'rgb(85, 85, 85)')        
    });

    it.skip('Ckecks Product Image', () => {
        cy.get('p > img')
            .should('be.visible')
            .and('have.attr', 'src', data.products.product.image)
                            
    });

    it.skip('Ckecks Product Description', () => {
        cy.get(':nth-child(2) > p')
            .should('be.visible')
            .and('contain', data.products.product.description)
            .and('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
            .and('have.css', 'color', 'rgb(154, 154, 154)')        
    });
    it.skip('Ckecks Product Characteristics', () => {
        cy.get(':nth-child(2) > ul')
            .should('be.visible')
            .and('contain',
                data.products.product.characteristics[1],
                data.products.product.characteristics[2],
                data.products.product.characteristics[3],
                data.products.product.characteristics[4],
                data.products.product.characteristics[5],
                data.products.product.characteristics[6]
            )
            .and('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
            .and('have.css', 'color', 'rgb(154, 154, 154)')        
    });
    it.skip('Ckecks Product Price', () => {
        cy.get('h3')
            .should('be.visible')
            .and('contain', data.products.product.price)
            .and('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
            .and('have.css', 'color', 'rgb(85, 85, 85)')        
    });

    it.skip('Ckecks Dropdown', () => {
        for (var i = 1; (i < 10); i++) {
           i = i.toString()
                cy.get('select[name="quantity"]')
                    .select(i)
                    .should('have.value', i)
                i = parseInt(i)  
          }    
    });

    it('Ckecks Buy Now Button', () => {
        cy.get('.button')
            .should('be.visible')
            .and('be.enabled')
        .and('have.value', 'Buy Now')
        .and('have.css', 'background-color', 'rgb(108, 192, 145)')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
    });

});    

// it('', () => {
        
// });