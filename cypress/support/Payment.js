Cypress.Commands.add('fillCreditCard', (CardNumber, Month, Year, CVV) => {
    cy.get('#card_nmuber').type(CardNumber);
    cy.get('select[name="month"]').select(Month);
    cy.get('select[name="year"]').select(Year);
    cy.get('#cvv_code').type(CVV);

});