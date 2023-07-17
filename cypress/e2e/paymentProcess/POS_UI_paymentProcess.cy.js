const data = require('../../fixtures/dataCreditCards.json')

function getRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
}
const quantity = getRandomNumber().toString()

describe('Cheks Payment Process with Valid Data', () => {
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
        cy.visit('https://demo.guru99.com/payment-gateway/index.php')
        cy.get('select[name="quantity"]').select(quantity)
        cy.get('.button').click()

    });

    it('Cheks UI of the Payment Page', () => {
        cy.log('Ckecks the Header Payment Process')
        cy.get('h2')
            .should('be.visible')
            .and('contain', 'Payment Process')
            .and('have.css', 'font-weight', '300')
            .and('have.css', 'line-height', '66px')
            .and('have.css', 'color', 'rgb(85, 85, 85)')
        
        cy.log('Checks "Payment Amount')
        cy.get('form[name="fbal"]')
            .contains('Pay Ammount')
            .should('be.visible')
        cy.get('[color="red"]')
            .should('be.visible')
            // .should('contain', '$')
            .and('have.css', 'color', 'rgb(255, 0, 0)')
        
    cy.log("Cheks the info of accepted cards")
        cy.get('h4').contains('We accept');
        cy.get('img[src="images/visa.png"]')
            .should('be.visible');
        cy.get('img[src="images/mastercard.png"]')
            .should('be.visible');
        cy.get('img[src="images/american.png"]')
            .should('be.visible');
        cy.get('img[src="images/discover.png"]')
            .should('be.visible');
        
        cy.log('Checks text fields')
        
        cy.log('Card Number')
        cy.get(':nth-child(3) > h4')
            .should('be.visible')
            .and('contain', 'Card Number')
            .and('have.css', 'color', 'rgb(85, 85, 85)')
            .and('have.css', 'font-weight', '400')
            .and('have.css', 'font-size', '24px')
            .and('have.css', 'line-height', '36px')
        
        cy.log('Expiration Month')
        cy.get(':nth-child(5) > h4')
            .should('be.visible')
            .and('contain', 'Expiration Month')
            .and('have.css', 'color', 'rgb(85, 85, 85)')
            .and('have.css', 'font-weight', '400')
            .and('have.css', 'font-size', '24px')
            .and('have.css', 'line-height', '36px')
        
        cy.log('Expiration Year')
        cy.get(':nth-child(7) > h4')
            .should('be.visible')
            .and('contain', 'Expiration Year')
            .and('have.css', 'color', 'rgb(85, 85, 85)')
            .and('have.css', 'font-weight', '400')
            .and('have.css', 'font-size', '24px')
            .and('have.css', 'line-height', '36px')
        
        cy.log('CVV Code')
        cy.get(':nth-child(9) > h4')
            .should('be.visible')
            .and('contain', 'CVV Code')
            .and('have.css', 'color', 'rgb(85, 85, 85)')
            .and('have.css', 'font-weight', '400')
            .and('have.css', 'font-size', '24px')
            .and('have.css', 'line-height', '36px')
        
        cy.log("Checks the Input fields")
        cy.log('Card')
        cy.get('#card_nmuber')
            .should('have.attr', 'maxlength', '16')
            //this leads to a bug with amex
            .and('have.attr', 'placeholder', 'Enter Your Card Number')
            .and('be.visible')
            .and('have.css', 'background-color', 'rgb(108, 192, 145)')
        
        cy.log('CVV')
        cy.get('#cvv_code')
            .should('have.attr', 'maxlength', '3')
            //this leads to a bug with amex
            .and('have.attr','placeholder','CVV Code')
            .and('be.visible')
            .and('have.css', 'background-color', 'rgb(108, 192, 145)')
        
        cy.log("Checks the dropdown Month")
        for (var i = 1; (i < 13); i++) {
            i = i.toString()
            cy.get('#month')
            .and('have.css', 'background-color', 'rgb(108, 192, 145)')
                     .select(i)
                .should('have.value', i)
            
                 i = parseInt(i)  
        };
        cy.log("Checks the dropdown Year")
        for (var i = 2017; (i < 2028); i++) {
            i = i.toString()
            cy.get('#year')
            .and('have.css', 'background-color', 'rgb(108, 192, 145)')
                     .select(i)
                     .should('have.value', i)
                 i = parseInt(i)  
        };

        cy.log('Pay Button')
        cy.get('.button')
        .should('be.visible')
            .and('contain', 'Pay')
            .and('have.css', 'background-color', 'rgb(108, 192, 145)')
        
        cy.log('Check Error Messages are Invisible')
        cy.get('#message1')
            .should('not.be.visible')
        cy.get('#message2')
        .should('not.be.visible')
    });

    it('Checks payment with Valid Visa Card', () => {
        cy.log(quantity)
        const paymentAmount = (parseFloat(quantity) * 20).toFixed(2).replace(',', '.');
        cy.log(paymentAmount) 
        cy.fillCreditCard(
            data.validCards.visa.cardNumber,
            data.validCards.visa.expMonth,
            data.validCards.visa.expYear,
            data.validCards.visa.cvv)
        cy.get('input[type="submit"]')
            .should('have.attr', 'value', `Pay $${paymentAmount}`).click();
        cy.url()
            .should('contain', 'genearte_orderid.php?uid=');
        cy.log('Message about successful Payment')
        cy.get('h2').contains('Payment successfull!')
            .should('be.visible');
        cy.log('Order ID')
        cy.get(':nth-child(1) > h3 > strong')
            .should('be.visible');
        cy.get('.alt > tbody > :nth-child(1) > :nth-child(2)')
            .should('be.visible')
        cy.get(':nth-child(2) > td')
            .should('be.visible')
            .and('contain', 'Please Note Down Your OrderID')
    });

    it('Checks payment with Valid MasterCard Card', () => {
        cy.log(quantity)
        const paymentAmount = (parseFloat(quantity) * 20).toFixed(2).replace(',', '.');
        cy.log(paymentAmount) 
        cy.fillCreditCard(data.validCards.masterCard.cardNumber, data.validCards.masterCard.expMonth, data.validCards.masterCard.expYear, data.validCards.masterCard.cvv)
        cy.get('input[type="submit"]')
            .should('have.attr', 'value', `Pay $${paymentAmount}`).click();
        cy.url()
            .should('contain', 'genearte_orderid.php?uid=');
        cy.log('Message about successful Payment')
        cy.get('h2').contains('Payment successfull!')
            .should('be.visible');
        cy.log('Order ID')
        cy.get(':nth-child(1) > h3 > strong')
            .should('be.visible');
        cy.get('.alt > tbody > :nth-child(1) > :nth-child(2)')
            .should('be.visible')
        cy.get(':nth-child(2) > td')
            .should('be.visible')
            .and('contain', 'Please Note Down Your OrderID')
    });

    it('Checks payment with Valid Discover Card', () => {
        cy.log(quantity)
        // const paymentAmount = (parseFloat(quantity) * 20).toFixed(2);
        // - this one goeas as well in this case
        
        const paymentAmount = (parseFloat(quantity) * 20).toFixed(2).replace(',', '.');
        cy.log(paymentAmount) 
        cy.fillCreditCard(data.validCards.discover.cardNumber, data.validCards.discover.expMonth, data.validCards.discover.expYear, data.validCards.discover.cvv)
        cy.get('input[type="submit"]')
            .should('have.attr', 'value', `Pay $${paymentAmount}`).click();
        cy.url()
            .should('contain', 'genearte_orderid.php?uid=');
        cy.log('Message about successful Payment')
        cy.get('h2').contains('Payment successfull!')
            .should('be.visible');
        cy.log('Order ID')
        cy.get(':nth-child(1) > h3 > strong')
            .should('be.visible');
        cy.get('.alt > tbody > :nth-child(1) > :nth-child(2)')
            .should('be.visible')
        cy.get(':nth-child(2) > td')
            .should('be.visible')
            .and('contain', 'Please Note Down Your OrderID')
    });

    it.skip('Checks payment with Valid American Express Card', () => {
        cy.log(quantity)
        const paymentAmount = (parseFloat(quantity) * 20).toFixed(2).replace(',', '.');

        cy.fillCreditCard(data.validCards.americanExpress.cardNumber, data.validCards.americanExpress.expMonth, data.validCards.americanExpress.expYear, data.validCards.americanExpress.cvv)
        cy.get('input[type="submit"]')
            .should('have.attr', 'value', `Pay $${paymentAmount}`).click();
        cy.url()
            .should('contain', 'genearte_orderid.php?uid=');
        cy.log('Message about successful Payment')
        cy.get('h2').contains('Payment successfull!')
            .should('be.visible');
        cy.log('Order ID')
        cy.get(':nth-child(1) > h3 > strong')
            .should('be.visible');
        cy.get('.alt > tbody > :nth-child(1) > :nth-child(2)')
            .should('be.visible')
        cy.get(':nth-child(2) > td')
            .should('be.visible')
            .and('contain', 'Please Note Down Your OrderID')
        
        //BUG as the field card number doesnt support 15 digits input 
        //as & CVV doesnt support 4 digits input  (see attr max length)
    });

    
});

// it('', () => {
        
// });

// .and('have.css', '', '')
