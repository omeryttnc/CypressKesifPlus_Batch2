const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  hideXHR:true,
  chromeWebSecurity:false,
  watchForFileChanges:false,
  viewportHeight:900,
  viewportWidth:1600,
  video:false,
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl:'https://test.urbanicfarm.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
            return config;
    },
  },
});
