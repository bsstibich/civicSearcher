Feature: civcSearcher
    I want to search Facebook Marketplace for good sixth gen Honda Civics

    Scenario: Go to marketplace
        Given I am in the Honda Civic marketplace page

    Scenario: Apply filters
        When I change the search radius
        And I change the model year
