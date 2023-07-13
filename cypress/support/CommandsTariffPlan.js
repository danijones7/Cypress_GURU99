const data = require('../fixtures/dataAddRariffPlan.json')

Cypress.Commands.add('FillTariffPlan', (input) => {
    cy.fillTheData(data.objects.monthlyRental, input.monthlyRental)
    cy.fillTheData(data.objects.freeLocalMin, input.freeLocalMin)
    cy.fillTheData(data.objects.freeInterMin, input.freeInterMin)
    cy.fillTheData(data.objects.freeSMSPack, input.freeSMSPack)
    cy.fillTheData(data.objects.localPerMinCharges, input.localPerMinCharges)
    cy.fillTheData(data.objects.interPerMinCharges, input.interPerMinCharges)
    cy.fillTheData(data.objects.SMSPerCharges, input.SMSPerCharges)

});

Cypress.Commands.add('CheckErrorMessage', (object, message, color) => {
    cy.get(object)
        .should('be.visible')
        .and('contain', message)
        .and('have.css', 'color', color)
});

Cypress.Commands.add("popUpErrorCheck", (stub) => {
    const firstCall = stub.getCall(0);
    const expectedArgument = "please fill all fields Correct Value";

    expect(firstCall).to.be.calledWith(expectedArgument);
});

Cypress.Commands.add("submitClick", () => {
    const stub = cy.stub();

    cy.on("window:alert", stub);

    cy.get('input[value="submit"]').scrollIntoView().click();

    return cy.wrap(stub);
});


    //
