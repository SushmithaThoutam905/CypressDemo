const { defineConfig } = require("cypress");
const MochaJUnitReporter = require("mocha-junit-reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const junitReporter = new MochaJUnitReporter({
        mochaFile: "test-results/results-[hash].xml", // Set the path for JUnit XML report
      });

      on("before:browser:launch", (browser, launchOptions) => {
        // modify browser launch options
        return launchOptions;
      });

      on("task", {
        // add custom task listener
      });

      on("after:spec", (spec, results) => {
        if (results && results.stats) {
          junitReporter.epilogue(results.stats);
        }
      });

      config.reporter = junitReporter;
    },
  },
});;
