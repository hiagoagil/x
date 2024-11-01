describe('Almoxarifado', () => {
    it('Cadastrando almoxarifado', () => {
        cy.visit('/')
        cy.contains('Almoxarifado').click()
        cy.contains('Cadastrar').click()
        cy.get('[data-cy="code-input"]').type('teste')
        cy.get('[data-cy="name-input"]').type('teste')
        cy.get('[data-cy="zipCode-input"]').type('7772000')
    });
});