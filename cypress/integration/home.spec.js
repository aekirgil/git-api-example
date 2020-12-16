const pageUrl =  Cypress.config().baseUrl
context('Assertions', () => {
  beforeEach(() => {
    cy.visit(pageUrl)
  })

  describe('Home Page Assertions', () => {
    const workflowUrl = 'workflow'

    it('visit home page', () => {
      cy.url().should('include', pageUrl)
    })

    it('is hero button going to workflow page', () => {
      cy.get('#heroBtn').click()
      cy.url().should('include', workflowUrl)
    })

    it('is repositories boxes in home page', () => {
      cy.get('.box').its('length').should('to.be', 3)
    })

    it('is box button going to detail page', () => {
      cy.get('.box').find('a')
        .should('have.attr', 'href')
        .then((href) => {
          cy.visit(href)
          cy.url().should('include', href)
        })
    })
  })
})
