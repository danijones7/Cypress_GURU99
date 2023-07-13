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