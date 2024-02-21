const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  video: true,
  trashAssetsBeforeRuns: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
// e2e: {
//   setupNodeEvents(on, config) {

// }}
