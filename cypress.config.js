const { defineConfig } = require("cypress");

module.exports = defineConfig({
  hideXHR:true,
  chromeWebSecurity:false,
  watchForFileChanges:false,
  viewportHeight:900,
  viewportWidth:1600,
  video:false,
  e2e: {
    baseUrl:'https://test.urbanicfarm.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
