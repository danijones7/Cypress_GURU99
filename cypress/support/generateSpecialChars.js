const fs = require('fs');

function generateSpecialCharacter() {
    const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '[', ']', '{', '}', '<', '>', '|', '\\', '/', ',', '.', '?', ':', ';', '_', '~', '`'];
    const randomIndex = Math.floor(Math.random() * specialCharacters.length);
    return specialCharacters[randomIndex];
};

function generateSymbols(length) {
    const generatedArray = [];
    for (var i = 0; i < length; i++) {
        const randomSymbol = generateSpecialCharacter()
        generatedArray.push(randomSymbol)
    }
    const Symbols = generatedArray.join('')
    return Symbols
};

const symbols_5_montlyRental = generateSymbols(5);
console.log(symbols_5_montlyRental);
const symbols_5_freeLocalMin = generateSymbols(5);
const symbols_5_freeInterMin = generateSymbols(5);
const symbols_5_freeSMSPack = generateSymbols(5);
const symbols_3_localPerMinCharges = generateSymbols(3);
const symbols_5_interPerMinCharge = generateSymbols(3);
const symbols_5_SMSPerCharges = generateSymbols(3);
console.log(symbols_5_SMSPerCharges);

const jsonData = JSON.parse(fs.readFileSync('C:/Users/Sowic/Desktop/Jessie/ANKO/cypress/cypress/fixtures/dataAddRariffPlan.json', 'utf8'));

jsonData.specialCharacters.monthlyRental = symbols_5_montlyRental;
jsonData.specialCharacters.freeLocalMin = symbols_5_freeLocalMin;
jsonData.specialCharacters.freeInterMin = symbols_5_freeInterMin;
jsonData.specialCharacters.freeSMSPack = symbols_5_freeSMSPack;
jsonData.specialCharacters.localPerMinCharges = symbols_3_localPerMinCharges;
jsonData.specialCharacters.interPerMinCharges = symbols_5_interPerMinCharge;
jsonData.specialCharacters.SMSPerCharges = symbols_5_SMSPerCharges;

const updatedJson = JSON.stringify(jsonData, null, 2);
fs.writeFileSync('C:/Users/Sowic/Desktop/Jessie/ANKO/cypress/cypress/fixtures/dataAddRariffPlan.json', updatedJson);
