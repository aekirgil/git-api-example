const pageUrl =  Cypress.config().baseUrl + '/repos/homeday-de/homeday-blocks'
context('Assertions', () => {
  beforeEach(() => {
    cy.visit(pageUrl)
  })

  describe('Detail Page Assertions', () => {

    it('visit home page', () => {
      cy.url().should('include', pageUrl)
    })

    it('is informations is there', () => {
      cy.get('p').its('length').should('to.be', 4)
      cy.get('a').its('length').should('to.be', 1)
      cy.get('a').should('contain', 'Go to Repository')
    })

  })
})
