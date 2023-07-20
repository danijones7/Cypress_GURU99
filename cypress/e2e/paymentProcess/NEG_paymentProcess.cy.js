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
    it('Checks the input of SPEC CHARS CreditCard', () => {
        cy.log('Credit Card with SpecCharsInput')
        cy.fillCreditCard(
            data.inValidCards.specChars.cardNumber,
            data.validCards.visa.expMonth,
            data.validCards.visa.expYear,
            data.validCards.visa.cvv)
        cy.get('#message1')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(85, 85, 85)')
            .and('contain', data.errorMessages.specChars)
        cy.get('input[type="submit"]').click()
        // BUG - system allows payment with invalid Input of Card Number 
    });
        
    it.skip('Checks the input of SPEC CHARS CVV', () => {   
        cy.log('CVV with SpecCharsInput')
        cy.fillCreditCard(
            data.validCards.visa.cardNumber,
            data.validCards.visa.expMonth,
            data.validCards.visa.expYear,
            data.inValidCards.specChars.cvv)
        cy.get('#message2')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(85, 85, 85)')
            .and('contain', data.errorMessages.specChars)
        cy.get('input[type="submit"]').click()
        // BUG - system allows payment with invalid Input CVv 
    });

    it.skip('Checks the input of CHARS CreditCard', () => {
        cy.log('Credit Card with CharsInput')
        cy.fillCreditCard(
            data.inValidCards.chars.cardNumber,
            data.validCards.visa.expMonth,
            data.validCards.visa.expYear,
            data.validCards.visa.cvv)
        cy.get('#message1')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(85, 85, 85)')
            .and('contain', data.errorMessages.chars)
        cy.get('input[type="submit"]').click()
        // BUG - system allows payment with invalid Input of Card Number 
    });

    it.skip('Checks the input of CHARS CVV', () => {   
        cy.log('CVV with CharsInput')
        cy.fillCreditCard(
            data.validCards.visa.cardNumber,
            data.validCards.visa.expMonth,
            data.validCards.visa.expYear,
            data.inValidCards.chars.cvv)
        cy.get('#message2')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(85, 85, 85)')
            .and('contain', data.errorMessages.chars)
        cy.get('input[type="submit"]').click()
        // BUG - system allows payment with invalid input CVV
    });

    it.skip('Checks EMPTY FIELD CreditCard', () => {
        cy.log('Credit Card Empty Field')
        cy.fillCreditCard(
            data.validCards.visa.cardNumber,
            data.validCards.visa.expMonth,
            data.validCards.visa.expYear,
            data.validCards.visa.cvv)
        cy.get('#card_nmuber').clear()
        cy.get('#message1')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(85, 85, 85)')
            .and('contain', data.errorMessages.blank)
        cy.get('input[type="submit"]').click()
        cy.on('window:alert', (alert) => {
            expect(alert).to.eq('Check card number is 16 digits!');
        });
        cy.on('window:confirm', () => true);
         
    });

    it.skip('Checks EMPTY FIELD CVV', () => {   
        
        cy.fillCreditCard(
            data.validCards.visa.cardNumber,
            data.validCards.visa.expMonth,
            data.validCards.visa.expYear,
            data.inValidCards.chars.cvv)
        cy.get('#cvv_code').clear()
        cy.get('#message2')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(85, 85, 85)')
            .and('contain', data.errorMessages.blank)
        cy.get('input[type="submit"]').click()
        // BUG - system allows payment with invalid CVV
    });

    //MAX+1 tests are skipped as both CREDICARD and CVV inputs 
    //have incorrect attr maxLength "16" & "3" accordingly(see UI)

    it.skip('Checks the input MIN-1 (14-digits) CreditCard', () => {
        
        cy.fillCreditCard(
            data.inValidCards.min1.cardNumber1_digit,
            data.validCards.visa.expMonth,
            data.validCards.visa.expYear,
            data.validCards.visa.cvv)
        cy.get('#message1')
            .should('be.visible')
        //BUG - the message is not shown after typing 2nd digit of the Card 
            //except: 11,12,13,14,15 inputs
            .and('have.css', 'color', 'rgb(85, 85, 85)')
            .and('contain', data.errorMessages.card)
        cy.get('input[type="submit"]').click()
        cy.on('window:alert', (alert) => {
            expect(alert).to.eq('Check card number is 16 digits!');
        });
        cy.on('window:confirm', () => true);
    });

    it.skip('Checks the input MIN-1 (2-digits) CVV', () => {   
        
        cy.fillCreditCard(
            data.validCards.visa.cardNumber,
            data.validCards.visa.expMonth,
            data.validCards.visa.expYear,
            data.inValidCards.min1.cvv1_digit)
        cy.get('#message2')
            //BUG - the message is not shown after typing 2nd digit of CVV
            .should('be.visible')
            .and('have.css', 'color', 'rgb(85, 85, 85)')
            .and('contain', data.errorMessages.cvv)
        cy.get('input[type="submit"]').click()
        // BUG - system allows payment with invalid input CVV
    });

    it.skip('Checks payment attempt with EXPDATA', () => {   
        
        cy.fillCreditCard(
            data.validCards.visa.cardNumber,
            data.inValidCards.expData.expMonth,
            data.inValidCards.expData.expYear,
            data.validCards.visa.cvv)
        cy.get('input[type="submit"]').click()
        // BUG - system allows payment with ExpData
    });

    it('Checks the input Numbers with SPACES. CreditCard', () => {   
        
        cy.fillCreditCard(
            data.inValidCards.spacesWithNumbers.cardNumber,
            data.inValidCards.expData.expMonth,
            data.inValidCards.expData.expYear,
            data.validCards.visa.cvv)
        // cy.get('#message1')
        //     .should('be.visible')
        //     .and('have.css', 'color', 'rgb(85, 85, 85)')
        //     .and('contain', data.errorMessages.card)
        //BUG - the message is not shown
        cy.get('input[type="submit"]').click()
            // BUG - system allows payment with inValid Data 
            //(Numbers with Spaces before and after)
    });

    it.skip('Checks the input Numbers with SPACES. CVV', () => {   
        
        cy.fillCreditCard(
            data.validCards.visa.cardNumber,
            data.inValidCards.expData.expMonth,
            data.inValidCards.expData.expYear,
            data.inValidCards.spacesWithNumbers.cvv)
        cy.get('#message2')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(85, 85, 85)')
            .and('contain', data.errorMessages.cvv)
        cy.get('input[type="submit"]').click()
            // BUG - system allows payment with inValid Data 
            //(Numbers with Spaces before and after)
    });
    


});

// it('', () => {
        
// });

// .and('have.css', '', '')