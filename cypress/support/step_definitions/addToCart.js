import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I search for a product or select "Shop Now" on a product card displayed on the main screen', () => {
  cy.get('#speakersImg').click(); // Ajuste o seletor conforme o card de produto exibido na tela
});

Given('I select the desired product', () => {
  // Selecionar o produto após a busca ou a seleção do card
  cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(1)').click(); // Ajuste o seletor conforme o produto específico
});

When('I click the "ADD TO CART" button', () => {
  // Clicar no botão de adicionar ao carrinho
  cy.get('.fixedBtn > .roboto-medium').click(); // Ajuste o seletor para o botão "ADD TO CART"
});

Then('the system should display a dropdown in the top navigation bar, listing the cart items with the new item added.', () => {
  // Clicar no ícone do carrinho para verificar os itens
  cy.get('#shoppingCartLink').click();
  cy.get('.fixedTableEdgeCompatibility > tbody > tr.ng-scope > :nth-child(2)').should('contain', 'SPEAKER');
});
