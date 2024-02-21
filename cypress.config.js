const { defineConfig } = require("cypress");
 
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Register the JUnit reporter
      const junitReporter = new MochaJUnitReporter({
        mochaFile: "test-results/results-[hash].xml",
      });

      // Listen for the 'run:end' event to generate the JUnit report
      on("run:end", (runResults) => {
        if (runResults.totalFailed > 0) {
          // Only generate the JUnit report if there are failed tests
          junitReporter.epilogue(runResults.stats);
        }
      });
    },
    reporter: "mocha-junit-reporter",  // Use Mocha JUnit Reporter
  },
});

    setupNodeEvents(on, config) {
    }
  }
});