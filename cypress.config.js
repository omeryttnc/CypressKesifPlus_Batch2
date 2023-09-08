const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,
  viewportHeight:900,
  viewportWidth:1600,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
