Feature: Search for a product via API

  Scenario: User searches for a product via API
    Given I search for a product
    And the response should return a status code of 200
    Then the product list should contain the expected products