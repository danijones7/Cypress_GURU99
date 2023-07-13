const data = require('../../fixtures/dataAddRariffPlan.json')

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


    it('Cheks Invalid Data input Chars', () => {
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
    });


    it('Cheks Invalid Data input SpecialCharacters', () => {
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
    });
it('Cheks Invalid Data input Spaces', () => {
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
    });
});

// it('', () => {
        
// });