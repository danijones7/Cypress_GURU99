const data = require('../../../fixtures/dataAddRariffPlan.json')

describe('Cheks Add Tariff Plan with Valid Data', () => {
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


    it('Cheсks Invalid Data input Chars', () => {
        cy.log('Fill all the fields with Characters data')
        cy.FillTariffPlan(data.charsABC)
        cy.log('Check Error Messages')
        cy.CheckErrorMessage('#message2', 'Characters are not allowed', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message3', 'Characters are not allowed', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message4', 'Characters are not allowed', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message5', 'Characters are not allowed', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message6', 'Characters are not allowed', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message7', 'Characters are not allowed', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message8', 'Characters are not allowed', 'rgb(114, 122, 130)')

        cy.log('Click Submit button, Close the Alert')
        cy.submitClick().then((stub) => {
            cy.popUpErrorCheck(stub);
        });
        cy.get('#main').contains('Congratulation you add Tariff Plan').should('not.exist');
    });


    it('Cheсks Invalid Data input SpecialCharacters', () => {
        cy.log('Fill all the fields with Characters data')
        cy.FillTariffPlan(data.specialCharacters)
        cy.log('Check Error Messages')
        cy.CheckErrorMessage('#message2', 'Special characters are not allowed', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message3', 'Special characters are not allowed', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message4', 'Special characters are not allowed', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message5', 'Special characters are not allowed', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message6', 'Special characters are not allowed', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message7', 'Special characters are not allowed', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message8', 'Special characters are not allowed', 'rgb(114, 122, 130)')
    
        cy.log('Click Submit button, Close the Alert')
        cy.submitClick().then((stub) => {
            cy.popUpErrorCheck(stub);
        });
        cy.get('#main').contains('Congratulation you add Tariff Plan').should('not.exist');
    });
    it('Cheсks Invalid Data input Spaces', () => {
            cy.log('Fill all the fields with Characters data')
            cy.FillTariffPlan(data.spaces)
            cy.log('Check Error Messages')
            cy.CheckErrorMessage('#message2', 'Characters are not allowed', 'rgb(114, 122, 130)')
            cy.CheckErrorMessage('#message3', 'Characters are not allowed', 'rgb(114, 122, 130)')
            cy.CheckErrorMessage('#message4', 'Characters are not allowed', 'rgb(114, 122, 130)')
            cy.CheckErrorMessage('#message5', 'Characters are not allowed', 'rgb(114, 122, 130)')
            cy.CheckErrorMessage('#message6', 'Characters are not allowed', 'rgb(114, 122, 130)')
            cy.CheckErrorMessage('#message7', 'Characters are not allowed', 'rgb(114, 122, 130)')
            cy.CheckErrorMessage('#message8', 'Characters are not allowed', 'rgb(114, 122, 130)')
        
            cy.log('Click Submit button, Close the Alert')
            cy.submitClick().then((stub) => {
                cy.popUpErrorCheck(stub);
            });
            cy.get('#main').contains('Congratulation you add Tariff Plan').should('not.exist');
});
    
    it('Cheсks Invalid Data Click and leave Blank Fields', () => {
        cy.log('Leave the fields empty')
        cy.clickOnTheField(data.objects.monthlyRental)
        cy.clickOnTheField(data.objects.freeLocalMin)
        cy.clickOnTheField(data.objects.freeInterMin)
        cy.clickOnTheField(data.objects.freeSMSPack)
        cy.clickOnTheField(data.objects.localPerMinCharges)
        cy.clickOnTheField(data.objects.interPerMinCharges)
        cy.clickOnTheField(data.objects.SMSPerCharges)
        cy.get('body').click()
        //1 more click to make the last error message visible
        cy.log('Check Error Messages')
        cy.CheckErrorMessage('#message2', 'Number must not be blank', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message3', 'Number must not be blank', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message4', 'Number must not be blank', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message5', 'Number must not be blank', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message6', 'Number must not be blank', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message7', 'Number must not be blank', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message8', 'Number must not be blank', 'rgb(114, 122, 130)')

        cy.log('Click Submit button, Close the Alert')
        cy.submitClick().then((stub) => {
            cy.popUpErrorCheck(stub);
        });
        cy.get('#main').contains('Congratulation you add Tariff Plan').should('not.exist');
                
    });

    it.skip('Cheсks Invalid Data input MIN-1', () => {
        cy.log('Fill all the fields with MIN-1 data')
        cy.FillTariffPlan(data.minMinus1)
        cy.log('Check Error Messages')
        cy.CheckErrorMessage('#message2', 'Number must not be negative', 'rgb(114, 122, 130)')
        //BUG - such message doesn't exist in the field 
        cy.CheckErrorMessage('#message3', 'Number must not be negative', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message4', 'Number must not be negative', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message5', 'Number must not be negative', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message6', 'Number must not be negative', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message7', 'Number must not be negative', 'rgb(114, 122, 130)')
        cy.CheckErrorMessage('#message8', 'Number must not be negative', 'rgb(114, 122, 130)')
    //BUG - system successfully adds Tariff Plan with negative Data
        cy.log('Click Submit button, Close the Alert')
        cy.submitClick().then((stub) => {
            cy.popUpErrorCheck(stub);
        });
        cy.get('#main').contains('Congratulation you add Tariff Plan').should('not.exist');
    });
});

// it('', () => {
        
// });