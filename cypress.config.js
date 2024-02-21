const { defineConfig } = require("cypress");
 
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
  }}
 reporter: 'mocha-junit-reporter',
 reporterOptions: {
   mochaFile: 'cypress/test-results/results.xml', // adjust the path as needed
    // other reporter options if necessary
  },
});
