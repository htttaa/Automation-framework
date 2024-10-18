import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I access the site {string}', (url) => {
  cy.visit(url);
});

Given('I search for a product or select "Shop Now" on a product card displayed on the main screen', () => {
  cy.get('#speakersImg').click(); // Ajuste o seletor conforme o card de produto exibido na tela
});

Given('I add that item to my cart', () => {
  // Selecionar o produto desejado e adicionar ao carrinho
  cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(3)').click(); // Ajuste o seletor conforme o produto específico
  cy.get('.fixedBtn > .roboto-medium').click(); // Adicionar ao carrinho
});

Given('I click the cart icon displayed in the top navigation bar', () => {
  // Clicar no ícone do carrinho para verificar os itens
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
