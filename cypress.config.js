const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // viewportHeight: 900,
  // viewportHeight: 1300,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: `https://guest:welcome2qauto@qauto2.forstudy.space/`,
    // env {
    //   username: 'guest',
    //   password: 'welcome2qauto'
    // },
     experimentalStudio: true
  },
});
