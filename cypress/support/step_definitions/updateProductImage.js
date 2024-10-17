import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let authToken;

Given('the user is authenticated', () => {
  cy.request({
    method: 'POST',
    url: 'https://www.advantageonlineshopping.com/accountservice/ws/AccountLoginRequest',
    body: {
      email: 'testuser@example.com',
      password: 'password123'
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    authToken = response.body.token;
  });
});

When('the user sends a PUT request to update the product image', () => {
  cy.request({
    method: 'PUT',
    url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/12345/source/color',
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    body: {
      image: 'base64EncodedImageString'
    }
  }).as('updateResponse');
});

Then('the product image should be updated correctly', () => {
  cy.get('@updateResponse').its('status').should('eq', 200);
  cy.get('@updateResponse').its('body').then((body) => {
    expect(body).to.have.property('imageId');
  });
});