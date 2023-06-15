const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'txm1ij',
  e2e: {

    "reporter": "mochawesome",
    "reporterOptions": {
    "reportDir": "cypress/report/mochawesome-report",
    "overwrite": true,
    "html": true,
    "json": false,
    "timestamp": "mmddyyyy_HHMMss"},
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
