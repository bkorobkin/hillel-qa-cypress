const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // viewportHeight: 900,
  // viewportHeight: 1300,

    "e2e": {
      "setupNodeEvents": (on, config) => {
        
      },
      "baseUrl": "https://qauto2.forstudy.space/",
      "experimentalStudio": true,
      "env": {
        "username": process.env.USERNAME,
        "password": process.env.PASSWORD
      }
    }
  })