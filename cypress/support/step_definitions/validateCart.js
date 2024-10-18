import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I access the site {string}', (url) => {
  cy.visit(url);
});

Given('I search for a product or select "Shop Now" on a product card displayed on the main screen', () => {
  cy.get('#speakersImg').click();
});

Given('I add that item to my cart', () => {

  cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(3)').click();
  cy.get('.fixedBtn > .roboto-medium').click();
});

Given('I click the cart icon displayed in the top navigation bar', () => {

  cy.get('#shoppingCartLink').click();
});

Given('the system should update the page with the list of items in the cart, displaying the checkout screen', () => {
  cy.get('.fixedTableEdgeCompatibility > tbody > tr.ng-scope > :nth-child(2)').should('contain', 'SPEAKER');


When('i click on the "CHECKOUT" button',() => {
  cy.get('#checkOutButton').click();
})

Then('the system should update the page with the login page + Order Payment', () => {
  cy.get('#orderPayment').should('be.visible');

});

})
