describe('Cars', () => {
  beforeEach(() => {
    cy.visitURL();
  });

  it('tabs', () => {   
    cy.get('footer.o-eMNOzL')
    .find('img.o-bXKmQE').last().click()
    cy.get('a[title="Download Android App"]')
    .invoke('removeAttr', 'target').click()
    cy.url()
    .should('include','https://play.google.com/')
    cy.go('back')
  })
})