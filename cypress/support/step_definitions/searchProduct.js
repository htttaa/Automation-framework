import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I access the site {string}', (url) => {
  cy.visit(url);
});

Given('I click the search icon in the top navigation bar', () => {
  cy.get('#mobileSearch > .roboto-medium').click();
});

Given('I type the name of the desired product {string}', (product) => {
  cy.get('#mobileSearch > .roboto-medium').type(product);
});

When('I click the search icon again or press the ENTER key', () => {
  cy.get('#mobileSearch > #menuSearch').click(); // ou use `cy.get('#mobileSearch > #menuSearch').type('{enter}')`
});

Then('the system should update the page with the search results', () => {
  cy.url().should('include', 'Tablet');
  cy.get('.select').should('contain', 'Tablet');
});
