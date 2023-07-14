const fs = require('fs');

const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '[', ']', '{', '}', '<', '>', '|', '\\', '/', ',', '.', '?', ':', ';', '_', '~', '`']

function generateRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

function generateElements(length, array) {
    const generatedArray = [];
    for (var i = 0; i < length; i++) {
        const randomSymbol = generateRandomElement(array)
        generatedArray.push(randomSymbol)
    }
    const Symbols = generatedArray.join('')
    return Symbols
};

const symbols_5_montlyRental = generateElements(5, specialCharacters);
console.log(symbols_5_montlyRental);
const symbols_5_freeLocalMin = generateElements(5, specialCharacters);
const symbols_5_freeInterMin = generateElements(5, specialCharacters);
const symbols_5_freeSMSPack = generateElements(5, specialCharacters);
const symbols_3_localPerMinCharges = generateElements(3, specialCharacters);
const symbols_5_interPerMinCharge = generateElements(3, specialCharacters);
const symbols_5_SMSPerCharges = generateElements(3, specialCharacters);
console.log(symbols_5_SMSPerCharges);

const jsonData = JSON.parse(fs.readFileSync('C:/Users/Sowic/Desktop/Jessie/ANKO/CYPRESS_GURU_99/cypress/fixtures/dataAddRariffPlan.json', 'utf8'));

jsonData.specialCharacters.monthlyRental = symbols_5_montlyRental;
jsonData.specialCharacters.freeLocalMin = symbols_5_freeLocalMin;
jsonData.specialCharacters.freeInterMin = symbols_5_freeInterMin;
jsonData.specialCharacters.freeSMSPack = symbols_5_freeSMSPack;
jsonData.specialCharacters.localPerMinCharges = symbols_3_localPerMinCharges;
jsonData.specialCharacters.interPerMinCharges = symbols_5_interPerMinCharge;
jsonData.specialCharacters.SMSPerCharges = symbols_5_SMSPerCharges;

const updatedJson = JSON.stringify(jsonData, null, 2);
fs.writeFileSync('C:/Users/Sowic/Desktop/Jessie/ANKO/CYPRESS_GURU_99/cypress/fixtures/dataAddRariffPlan.json', updatedJson);
