class ProductPage {
  addItemToCart() {
    cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(3)').click(); // Ajuste o seletor conforme o produto específico
    cy.get('.fixedBtn > .roboto-medium').click();
  }
}

export default new ProductPage();