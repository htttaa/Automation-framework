const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: 'cypress/e2e/**/*.feature', // Certifique-se de que esta linha está correta
    supportFile: 'cypress/support/e2e.js',
  },
});