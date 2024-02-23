describe('CarWale Website Tests', () => {
  it('should load the homepage', () => {
    cy.visit('https://www.carwale.com/');
    cy.contains('India\'s No.1 Auto Portal').should('be.visible');
  });

  it('should search for a car', () => {
    cy.visit('https://www.carwale.com/');
    cy.get('.search-bar-new').type('Honda City').type('{enter}');
    cy.url().should('include', '/honda-cars/city/');
    cy.get('.cw-searchResultList').should('be.visible');
  });

  it('should navigate to a car details page', () => {
    cy.visit('https://www.carwale.com/');
    cy.get('.search-bar-new').type('Honda City').type('{enter}');
    cy.get('.cw-searchResultList .grid').first().click();
    cy.url().should('include', '/honda-cars/city/');
    cy.contains('Honda City').should('be.visible');
  });
});
