Feature: Validate cart contents

  Scenario: User validates the cart contents
    Given I access the site "https://advantageonlineshopping.com/#/"
    And I search for a product or select "Shop Now" on a product card displayed on the main screen
    And I add that item to my cart
    And I click the cart icon displayed in the top navigation bar
    And the system should update the page with the list of items in the cart, displaying the checkout screen
    When i click on the "CHECKOUT" button
    Then the system should update the page with the login page + Order Payment