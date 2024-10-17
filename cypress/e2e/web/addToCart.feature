Feature: Add product to cart

  Scenario: User adds a product to the cart
    Given I access the site "https://advantageonlineshopping.com/#/"
    And I search for a product or select "Shop Now" on a product card displayed on the main screen
    And I select the desired product
    When I click the "ADD TO CART" button
    Then the system should display a dropdown in the top navigation bar, listing the cart items with the new item added.