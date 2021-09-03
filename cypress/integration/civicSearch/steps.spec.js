const { cyan } = require("ansi-colors");

//Search facebook for good civics to buy
Cypress.config("viewportHeight", 1200);
Cypress.config("viewportWidth", 1200);
let keywords = ['clean', 'b series', 'b engine', 'h series', 'h engine', 'k series', 'k engine', 'b16a', 'b16b', 'b18c1', 'b18c5', 'h22', 'k20a', 'lsv', 'turbo', 'hatch']; 

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
    cy.wait(3000);
    
    cy.get(':nth-child(6) > .aahdfvyu > :nth-child(3) > .jq4qci2q > .oajrlxb2').type('2000{enter}');
    cy.wait(5000);
})
And('I set some simple filters', () => {
    //manual trans
    cy.get(':nth-child(14) > .rq0escxv > .q9uorilb > .hu5pjgll').click();
    cy.get(':nth-child(15) > .q5bimw55 > :nth-child(1) > :nth-child(3) > .oajrlxb2 > .nnctdnn4 > .qt6c0cv9 > .n851cfcs > .bp9cbjyn > div > .hu5pjgll').click();

    //sort by newest listing
    cy.get(':nth-child(1) > .rq0escxv > .q9uorilb > .hu5pjgll').click();
    cy.get(':nth-child(2) > .q5bimw55 > :nth-child(1) > :nth-child(4) > .oajrlxb2 > .nnctdnn4 > .qt6c0cv9 > .n851cfcs > .bp9cbjyn > div > .hu5pjgll').click();
})

////========================================================================
//Scenario: Check for keywords
When('I open a listing and read description', () => {
    cy.wait(2000);
    cy.get('.bq4bzpyk > :nth-child(1)').click();
    if(cy.contains("See More")){
        cy.get('.ii04i59q > :nth-child(1) > .a8c37x1j > .oajrlxb2 > .d2edcug0').click();
    }
    /*
    for (var i = 0; i < keywords.length; i++){
        cy.contains(keywords[i]);        
    }*/
    //keywords.forEach(element => cy.should('contain', element));
    
})


