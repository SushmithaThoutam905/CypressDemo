describe('CarWale Website Tests', () => {
  beforeEach(() => {
    cy.visitURL();
  });

  it('should load the homepage', () => {
    cy.contains('FIND THE RIGHT CAR').should('be.visible');
  });

  it('should search for a car', () => {
    cy.get('[placeholder="Search"]').type('Honda City').wait(3000).type('{enter}');
    cy.url().should('include', '/honda-cars/city/');
    cy.get('.o-cKuOoN').contains('Honda City').should('be.visible');
  });

  it('should get elements from each header', () => {
    cy.get('.o-bkmzIL').find('li').children().each(($tab) => {
      cy.wrap($tab).trigger('mouseover').wait(3000);
      cy.get('.o-cpnuEd').find('div.oROWc7').each(($el) => {
        const content = $el.text().trim();
        cy.log('Elements:', content);
        // cy.wrap($el).click();
        // cy.get('.voh2vm').then(($popup) => {
        //   if ($popup.is(':visible')) {
        //     cy.get('.o-frwuxB').find('svg').first().scrollIntoView().click({force:true}); 
        //     }
        // });
    });
  });
});
  it('should click on each navigation link under new cars', async() => {
    const urls = await cy.fixture('urls').then((urls) => {
      // Iterate through each URL
      urls.expectedUrls.forEach((expectedUrl, index) => {
        // Perform actions with each URL
        cy.get('.o-bkmzIL').find('li').children().first().trigger('mouseover').wait(2000);
        cy.get('.o-cpnuEd').find('div.oROWc7').eq(index).click();
        cy.url().should('include', expectedUrl);
      });
    });
  })
})
