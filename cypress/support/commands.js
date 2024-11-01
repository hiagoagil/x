Cypress.Commands.add('addgroup', (grupoProduto) => { 
    cy.visit('/productgroup')
    cy.contains('Cadastrar').click()
    cy.get('[data-cy="name-input"]').type(grupoProduto)
    cy.get('[data-cy="submit-button"]').click()
})

Cypress.Commands.add('addFamilProduct', (name, string) => { 
    cy.visit('/productfamily');
    cy.contains('Cadastrar').click();
    cy.get('[data-cy="name-input"]').type(`${name}${string}`);
    cy.get('[data-cy="submit-button"]').click();
    cy.contains('Família de Produto cadastrado com sucesso').should('be.visible');
    cy.get('[data-cy="tableList-input-search"]').type(`${name}${string}{enter}`);
    cy.get(`[data-cy="tableList-table-body-${name}${string}"]`).should('be.visible');
});

Cypress.Commands.add('addProduct', (productData) => {
    cy.visit('/materials');
    cy.contains('Cadastrar').click();
    cy.get('[data-cy="code-input"]').type(productData.code.toString()); // Converte para string se necessário
    cy.get('[data-cy="referencecode-input"]').type(productData.productName);
    cy.get('[data-cy="name-input"]').type(productData.productName);
    cy.get('[data-cy="productfamilyid-select"]').select('Teste');
    cy.get('[data-cy="productgroupid-select"]').select('Teste');
    cy.get('[data-cy="manufacturerid-select"]').select('Teste');
    cy.get('[data-cy="namebymanufacturer-input"]').type(productData.manufacturerName);
    cy.get('[data-cy="codebymanufacturer-input"]').type(productData.manufacturerName);
    cy.get('[data-cy="ncmid-select"]').select('Teste');
    cy.get('#price').type(productData.price);
    cy.get('[data-cy="netweight-input"]').type(productData.netWeight);
    cy.get('[data-cy="grossweight-input"]').type(productData.grossWeight);
    cy.get('[data-cy="unitofmeasurementid-select"]').select('Teste');
    cy.get('[data-cy="haspackaging-radio-1"]').check();
    cy.get('[data-cy="stacking-input"]').type(productData.stacking);
    cy.get('[data-cy="productintended-radio-1"]').check();
    cy.get('[data-cy="hasserial-radio-2"]').check();
    cy.get('[data-cy="haslabel-radio-1"]').check();
    cy.get('[data-cy="hasbatch-radio-1"]').check();
    cy.get('[data-cy="stockmovement-radio-1"]').check();
    cy.get('[data-cy="inactive-switch"]').click();
    cy.get('[data-cy="submit-button"]').click();
    cy.contains('Produto cadastrado com sucesso').should('be.visible');
});


Cypress.Commands.add('MultipleGroup', (grupoProduto) => {
    cy.contains('Cadastrar').click();
    cy.get('[data-cy="name-input"]').type(grupoProduto);
    cy.get('[data-cy="submit-button"]').click();
})  



Cypress.Commands.add('ProductFamily', (nameProductFamily) => { 
    cy.visit('/productfamily')
    cy.contains('Cadastrar').click()
    cy.get('[data-cy="name-input"]').type(nameProductFamily); 
    cy.get('[data-cy="submit-button"]').click()
    cy.contains('Família de Produto cadastrado com sucesso').should('be.visible');
   
});
