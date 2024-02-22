const { defineConfig } = require("cypress");
const currentDate = new Date().toISOString().replace(/:/g, '-');
const reportFilename = `cypress-report-${currentDate}.html`;

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir:'cypress/results',
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    debug: true,
    overwrite: false,
    reportFilename: reportFilename
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here

    },
  },
});
