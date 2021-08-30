const { cyan } = require("ansi-colors");

//Search facebook for good civics to buy
Cypress.config("viewportHeight", 1200);
Cypress.config("viewportWidth", 1200);

//========================================================================
//Scenario: Go to marketplace and apply filters
Given('I am in the Honda Civic marketplace page', () => {
    cy.visit("https://www.facebook.com/marketplace/category/honda-civic");
    cy.get('.taijpn5t > .rq0escxv > .d2edcug0 > .a8c37x1j').click();
})

//========================================================================
//Scenario: Appy filters
When('I change the search radius', () => {
    cy.get('.aov4n071 > .j83agx80 > .buofh1pr > .d2edcug0').click();
    cy.get('.tojvnm2t > :nth-child(1) > .cwj9ozl2 > :nth-child(1) > :nth-child(2)').click();
    cy.contains('100 miles').click();
    cy.get('.ihqw7lf3 > :nth-child(1) > .oajrlxb2 > .owycx6da > .taijpn5t > .rq0escxv > .d2edcug0 > .a8c37x1j').click();
    cy.get('.aov4n071 > .j83agx80 > .buofh1pr > .d2edcug0').should('contain', 'Within 100 miles');
})

And('I change the model year', () => {
    cy.get(':nth-child(6) > .aahdfvyu > :nth-child(1) > .jq4qci2q > .oajrlxb2').type('1996');
    cy.wait(1000);
    
    cy.get(':nth-child(6) > .aahdfvyu > :nth-child(3) > .jq4qci2q > .oajrlxb2').type('2000{enter}');
    cy.wait(3000);
})


