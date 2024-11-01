import { generateGroupName } from '../support/utils';

describe('Grupo de produto', () => {
    const grupoProduto = generateGroupName();

    it('Cadastrando grupo de produto', () => {
        cy.visit('/productgroup');
        cy.contains('Cadastrar').click();
        cy.get('[data-cy="name-input"]').type(grupoProduto);
        cy.get('[data-cy="submit-button"]').click();
        cy.contains('Grupo de Produto cadastrado com sucesso').should('be.visible');
    });

 
        it('Cadastrando múltiplos grupos de produtos', () => {
            const grupoProduto = generateGroupName();
            cy.visit('/productgroup');
            for (let i = 0; i < 15; i++) {
                const grupoProduto = generateGroupName(); // Gera um novo nome para cada produto
                cy.addgroup(grupoProduto); // Certifique-se que `addgroup` adiciona o grupo de produto
            }
            cy.contains('Grupo de Produto cadastrado com sucesso').should('be.visible');
        });
    
    it('Deletando grupo de produto unitário', () => {
        cy.visit('/productgroup');
        cy.addgroup(grupoProduto);
        cy.get('[data-cy="search-input"]').type(`${grupoProduto}{enter}`);
        cy.wait(3000);
        cy.get('.ant-checkbox-wrapper.css-bbtq5r').first().click();
        cy.get('[data-cy="delete-onheader-button"]').click();
        cy.get('.ant-btn-primary').click();
    });

    it('Deletando grupo de produto em massa', () => {
              for (let i = 0; i < 15; i++) {
            const grupoProduto = generateGroupName(); // Gera um novo nome para cada produto
            cy.addgroup(grupoProduto); // Certifique-se que `addgroup` adiciona o grupo de produto
        }
        cy.visit('/productgroup');
        cy.get('.ant-table-selection').click();
        cy.get('[data-cy="delete-onheader-button"]').click()
        cy.get('.ant-btn-primary').click();       
    });

//     it.only('Editando grupo de produto', () => {
//         cy.intercept('POST', 'https://qa.api.atlantex.atlanteti.com/api/v1/ProductGroups').as('addGroup');
//         cy.visit('/productgroup');
//         cy.wait(10000);
//         cy.contains('Cadastrar').click();
//         cy.get('[data-cy="name-input"]').type(grupoProduto);
//         cy.get('[data-cy="submit-button"]').click();
//         cy.wait('@addGroup');

//         cy.visit('https://qa.atlantex.atlanteti.com/productgroup');
//         cy.get('[data-cy="tableList-input-search"]').type(`${grupoProduto}{enter}`);
//         cy.get('[data-cy="tableList-table-body-edit"]').trigger('mouseover').click();
//         cy.get('[data-cy="name-input"]').type(`${grupoProduto}Teste`);
//         cy.get('[data-cy="submit-button"]').click();
//         cy.wait(4000);
//     });
});
