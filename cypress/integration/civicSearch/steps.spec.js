const { cyan } = require("ansi-colors");

//Search facebook for good civics to buy
Cypress.config("viewportHeight", 1200);
Cypress.config("viewportWidth", 1200);

//========================================================================
//Scenario: Go to marketplace and apply filters
Given('I am in the Honda Civic marketplace page', () => {
    cy.visit("https://www.facebook.com/marketplace/category/honda-civic");
})
