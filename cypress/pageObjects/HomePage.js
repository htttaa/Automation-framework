class HomePage {
    visit(url) {
      cy.visit(url);
    }
  
    clickProductCard() {
      cy.get('#speakersImg').click();
    }
  }
  
  export default new HomePage();
