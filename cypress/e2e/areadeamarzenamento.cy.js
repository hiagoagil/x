import { faker } from '@faker-js/faker';

describe('Área de armazenamento', () => {
Cypress._.times(50, () => {
    it('Sucesso ao cadastrar área de armazenamento', () => {
        const nomeDeposito = faker.commerce.productName();
        cy.visit('/storageareas')
        cy.contains('Cadastrar').click()
        cy.get('#name').type(nomeDeposito)
        cy.get('#depositId').click(); 
        cy.get('#depositId').type('Deposito de Teste'); 
        cy.get('.ant-select-item-option')
          .contains('Deposito de Teste')
          .should('be.visible')
          .click();
          cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click()        
    })
})
});