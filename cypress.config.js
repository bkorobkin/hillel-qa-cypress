const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // viewportHeight: 900,
  // viewportHeight: 1300,
  defaultCommandTimeout: 10000,
  watchForFileChanges: false,
    "e2e": {
      "setupNodeEvents": (on, config) => {
        
      },
      "baseUrl": "https://guest:welcome2qauto@qauto2.forstudy.space",
      "isolation": false,
      "experimentalStudio": true,
      // "env": {
      //   "username": process.env.LOGIN,
      //   "password": process.env.PASSWORD
      // }
      env: {
        "username": 'guest',
        "password": 'welcome2qauto'
      }
    }
  })