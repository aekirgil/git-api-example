const pageUrl =  Cypress.config().baseUrl + '/workflow'
context('Assertions', () => {
  beforeEach(() => {
    cy.visit(pageUrl)
  })

  describe('Workflow Page Assertions', () => {

    it('visit workflow page', () => {
      cy.url().should('include', pageUrl)
    })

    it('fill up the form', () => {
      cy.get('#username').type('homeday-de', { delay: 100 })
      .should('have.value', 'homeday-de')
      cy.get('#email').type('a@a.com', { delay: 100 })
      .should('have.value', 'a@a.com')
      cy.get('#aggrement').check().should('be.checked')
    })

    it('check form validations', () => {
      cy.get('#form-submit-button').click()
      cy.get('.form__error').its('length').should('to.be', 3)
      cy.get('#username').type('homeday-de', { delay: 100 })
      .should('have.value', 'homeday-de')
      cy.get('.form__error').its('length').should('to.be', 2)
      cy.get('#email').type('a@a.com', { delay: 100 })
      .should('have.value', 'a@a.com')
      cy.get('.form__error').its('length').should('to.be', 1)
      cy.get('#aggrement').check().should('be.checked')
      cy.get('.form__error').should('not.exist');
    })

    it('fill up the form, click the button and check is boxes there or not', () => {
      cy.get('.list').should('not.exist');
      cy.get('.box').should('not.exist');
      cy.get('#username').type('homeday-de', { delay: 100 })
      .should('have.value', 'homeday-de')
      cy.get('#email').type('a@a.com', { delay: 100 })
      .should('have.value', 'a@a.com')
      cy.get('#aggrement').check().should('be.checked')
      cy.get('#form-submit-button').click()
      cy.get('.list').its('length').should('to.be', 1)
      cy.get('.box').its('length').should('be.gt', 2)
    })

  })
})
