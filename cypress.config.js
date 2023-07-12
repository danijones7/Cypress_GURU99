const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    watchForFileChanges: false, // when true	Whether Cypress will watch and restart tests on test file changes.
    // waitForAnimations: false,
    pageLoadTimeout: 100000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
