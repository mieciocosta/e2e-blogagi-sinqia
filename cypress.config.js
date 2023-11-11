// arquivo: cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://blogdoagi.com.br/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {},
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    videosFolder: 'cypress/video',
  },
});
