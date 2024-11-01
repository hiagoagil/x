import { generateFamily } from '../support/utils';

describe('Família de produto', () => {
    it('Cadastro de família de produto com sucesso', () => {
        const nameProductFamily = generateFamily()
        cy.ProductFamily(nameProductFamily)
    })
    it('Cadastro de família de produto em massa com sucesso ', () => {
        for (let i = 0; i < 10; i++) {
            const nameProductFamily = generateFamily()
            cy.ProductFamily(nameProductFamily)
        }
    });

    it.only('Deletando produto de família com sucesso', () => {
        cy.intercept('GET', 'https://qa.api.atlantex.atlanteti.com/api/v1/ProductFamilies/list?page=1&Search=').as('GetList')
        cy.intercept('POST', 'https://qa.api.atlantex.atlanteti.com/api/v1/ProductFamilies').as('GetList1')
        const nameProductFamily = generateFamily()
        cy.ProductFamily(nameProductFamily)
        cy.get('[data-cy="search-input"]').type(nameProductFamily)
        cy.wait('@GetList1')
        cy.wait('@GetList')
        cy.get('.ant-table-selection').click()
        cy.get('[data-cy="delete-onheader-button"]').click()
        cy.get('.bg-red-600').click()
        cy.get('.pointer-events-auto').contains('Família de Produto deletado com sucesso').should('be.visible')
    });
    it('Deletando produto de família em massa com sucesso', () => {
        for (let i = 0; i < 10; i++) {
            const nameProductFamily = generateFamily()
            cy.ProductFamily(nameProductFamily)
        }
        cy.get('.ant-table-selection').click()
        cy.get('[data-cy="delete-onheader-button"]').click()
        cy.get('.bg-red-600').click()
        cy.get('.pointer-events-auto').contains('Família de Produto deletado com sucesso').should('be.visible')
    });
});
