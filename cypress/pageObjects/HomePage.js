class HomePage {
    visit(url) {
      cy.visit(url);
    }
  
    clickProductCard() {
      cy.get('#speakersImg').click(); // Ajuste o seletor conforme o card de produto exibido na tela
    }
  }
  
  export default new HomePage();