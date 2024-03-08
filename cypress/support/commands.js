Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  cy.get('#firstName').type('Patrick')
  cy.get('#lastName').type('Silva')
  cy.get('#email').type('patrick.teste@teste.com')
  cy.get('#open-text-area').type('Teste')
  cy.contains('button', 'Enviar').click()
})