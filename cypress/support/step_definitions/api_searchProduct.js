import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I search for a product', () => {
    cy.request('GET', 'https://www.advantageonlineshopping.com/catalog/api/v1/products').as('productSearch');
});

And('the response should return a status code of {int}', (statusCode) => {
    cy.get('@productSearch').its('status').should('eq', statusCode);
});

Then('the product list should contain the expected products', () => {
    cy.get('@productSearch').its('body').should('not.be.empty');
});
