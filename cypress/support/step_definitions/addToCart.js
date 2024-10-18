import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I search for a product or select "Shop Now" on a product card displayed on the main screen', () => {
  cy.get('#speakersImg').click();
});

Given('I select the desired product', () => {
  cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(1)').click(); // Ajuste o seletor conforme o produto específico
});

When('I click the "ADD TO CART" button', () => {
  cy.get('.fixedBtn > .roboto-medium').click();
});

Then('the system should display a dropdown in the top navigation bar, listing the cart items with the new item added.', () => {

  cy.get('#shoppingCartLink').click();
  cy.get('.fixedTableEdgeCompatibility > tbody > tr.ng-scope > :nth-child(2)').should('contain', 'SPEAKER');
});
