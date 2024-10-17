Feature: Search for a product via API

  Scenario: User searches for a product via API
    Given I search for a product
    Then the response should return a status code of 200
    And the product list should contain the expected products