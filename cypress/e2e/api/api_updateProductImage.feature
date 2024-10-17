Feature: Update product image via API

  Scenario: User updates the product image via API
    Given I update the product image
    When the response should return a status code of 200
    Then the product image should be updated correctly