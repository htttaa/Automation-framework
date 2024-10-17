class ProductPage {
  searchForProducts() {
    return cy.request('GET', 'https://fakestoreapi.com/products')
      .as('searchResponse');
  }

  validateProductsRelatedTo(product) {
    cy.get('@searchResponse').its('body').should('be.an', 'array').and('not.be.empty');
    cy.get('@searchResponse').its('body').each((item) => {
      expect(item.title).to.include(product);
    });
  }

  validateStatusCode(expectedStatusCode) {
    cy.get('@searchResponse').its('status').should('eq', expectedStatusCode);
  }
}

export default new ProductPage();
