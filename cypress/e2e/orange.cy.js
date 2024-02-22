describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.carwale.com')
    cy.title().should('eq','carwale')
  })
  it('fails', () => {
    cy.visit('https://www.carwale.com')
    cy.title().should('eq','OrangeHRM12')
  })
})