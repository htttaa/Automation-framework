import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

When('User updates the product image via API', () => {
    cy.request({
        method: 'PUT',
        url: 'https://fakestoreapi.com/products/1', // Correct API endpoint
        body: {
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            description: "Your perfect pack for everyday use and walks in the forest.",
            category: "men's clothing",
            image: "https://www.escoladnc.com.br/blog/wp-content/webp-express/webp-images/uploads/elementor/thumbs/tech4-scaled-qiqtthlkkdxxt3k69wa6ozhvrw94bjdrilgzdze8vk.jpeg.webp" // nova imagem
        },
        failOnStatusCode: false // Prevent failure on non-2xx status codes
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.image).to.eq("https://www.escoladnc.com.br/blog/wp-content/webp-express/webp-images/uploads/elementor/thumbs/tech4-scaled-qiqtthlkkdxxt3k69wa6ozhvrw94bjdrilgzdze8vk.jpeg.webp");
    });
});