import { generateProductData, deleteProduct } from '../support/utils';

describe('Produtos', () => {
    it('Cadastrar 1 único produto com sucesso', () => {
        const productData = generateProductData();
        cy.addProduct(productData); // Usa o comando personalizado definido no commands.js
    });
    Cypress._.times(10, () => {
        it('Cadastrar 10 produtos produto com sucesso', () => {
            const productData = generateProductData();
            cy.addProduct(productData); 
            cy.wait(3000);
        cy.get('[data-cy="tableList-table-head-2-input"]').click()
        cy.contains('Deletar 10 registro(s)').click()
        cy.get('.bg-red-600').click()
        });
    });
    it('Excluindo produto', () => {
        const productData = generateProductData();
        cy.addProduct(productData);
        
    });
    

});
