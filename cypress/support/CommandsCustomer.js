const data = require('../fixtures/dataCustomer.json')

Cypress.Commands.add('FillCustomerForm', (input) => {
    cy.fillTheData(data.objects.firstName, input.firstName)
    cy.fillTheData(data.objects.lastName, input.lastName)
    cy.fillTheData(data.objects.email, input.email)
    cy.fillTheData(data.objects.address, input.address)
    cy.fillTheData(data.objects.mobileNumber, input.mobileNumber)
});


Cypress.Commands.add('CustomerAddedStatus', (status) => {
    let orderID
    cy.get('h3')
        .invoke('text')
        .then((text) => {
            orderID = text.toString();
            cy.url()
                .should("equal", `https://demo.guru99.com/telecom/access.php?uid=${text}`);
            cy.log('Menu')
            cy.get('.left > [href="#menu"]')
                .should('be.visible');
            cy.log('Logo')
            cy.get('.left > .logo')
                .should('be.visible');
            cy.log('Access Details to Guru99 Telecom')
            cy.get('h1')
                .should('be.visible')
                .and('contain', 'Access Details to Guru99 Telecom');
            cy.log('CustomerID')
            cy.get('tbody > :nth-child(1) > :nth-child(1) > b')
                .should('be.visible')
                .and('contain', 'Customer ID');
            cy.log('Please Note Down Your CustomerID')
            cy.get(':nth-child(2) > td > b')
                .should('be.visible')
                .and('contain', 'Please Note Down Your CustomerID');
            cy.log('HOME button')
            cy.get('.button')
                .should('be.visible')
                .and('have.attr', 'href', 'index.html')
                .and('contain', 'Home')
            cy.log('Click HOME button')
            cy.get('.button').click()
            cy.log('Click Add Tariff Plan to Customer')
            cy.get('.left > :nth-child(2) > h3 > a').click()
            cy.log('Type OrderID')
            cy.get('#customer_id').type(orderID)
            cy.log('Click Submit')
            cy.get('.fit').click()
            cy.log('Get the Status')
            cy.get('font')
                .should('contain', status)
        });
});