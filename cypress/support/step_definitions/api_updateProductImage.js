import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I update the product image', () => {
  cy.fixture('imagem.jpg', 'base64').then((fileContent) => {
    const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');

    const formData = new FormData();
    formData.append('file', blob, 'imagem.jpg');
    formData.append('imageId', 'ABCDEF');

    cy.request({
      method: 'PUT',
      url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/261850341/ABCDEF%23%23custom_image_upload_01994724-027e-43c3-989b-c828790e7f56/blue?product_id=13',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
      failOnStatusCode: false
    }).as('updateImage');
  });
});

Then('the response should return a status code of {int}', (statusCode) => {
  cy.get('@updateImage').its('status').should('eq', statusCode);
});

Then('the product image should be updated correctly', () => {
  cy.get('@updateImage').its('body').then((body) => {
    expect(body.imageId).to.equal('ABCDEF');
  });
});
