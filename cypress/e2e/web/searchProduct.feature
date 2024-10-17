Feature: Search for a product

  Scenario: User searches for a product
    Given I access the site "https://advantageonlineshopping.com"
    And I click the search icon in the top navigation bar
    And I type the name of the desired product "Tablet"
    When I click the search icon again or press the ENTER key
    Then the system should update the page with the search results