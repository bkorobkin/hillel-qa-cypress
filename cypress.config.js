const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // viewportHeight: 900,
  // viewportHeight: 1300,
  defaultCommandTimeout: 10000,
  watchForFileChanges: false,
    "e2e": {
      specPattern: 'cypress/integration/tests/**/*.cy.{js}',
      "setupNodeEvents": (on, config) => {
        
      },
      baseUrl: "https://guest:welcome2qauto@qauto2.forstudy.space",
      // "env": {
      //   "username": process.env.LOGIN,
      //   "password": process.env.PASSWORD
      // }
      env: {
        prodLink: "https://guest:welcome2qauto@qauto.forstudy.space",
        username: 'guest',
        password: 'welcome2qauto'
      },
      isolation: false,
      experimentalStudio: true,
    }
  })