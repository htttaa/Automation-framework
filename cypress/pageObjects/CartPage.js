class CartPage {
    clickCartIcon() {
      cy.get('#shoppingCartLink').click();
    }
  
    verifyItemInCart() {
      cy.get('.fixedTableEdgeCompatibility > tbody > tr.ng-scope > :nth-child(2)').should('contain', 'SPEAKER');
    }
  
    clickCheckoutButton() {
      cy.get('#checkOutButton').click();
    }
  
    verifyLoginPageAndOrderPayment() {
      cy.get('#orderPayment').should('be.visible');
    }
  }
  
  export default new CartPage();