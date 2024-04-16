describe('Frames', () => {
  it('frames', () => {   
   cy.visit('https://kitchen.applitools.com/')
   cy.get('.css-1fzcpt6')
   .contains('iFrame').click()
   cy.iframe('#the-kitchen-table')
   .find('table[id="fruits-vegetables"]')
   .find('tr>td').contains('Apple').should('exist')
  })
  it('frames', () => {   
    cy.visit('https://kitchen.applitools.com/')
    cy.get('.css-1fzcpt6')
    .contains('iFrame').click()
    cy.iframe('#the-kitchen-table')
    .find('table[id="fruits-vegetables"]')
    .find('tr')
      .its('length')
      .then((rowCount) => {
        cy.log(`Number of rows: ${rowCount}`);
      });  
   })
   it('alerts', () => {   
    cy.visit('https://kitchen.applitools.com/')
    cy.get('.css-1fzcpt6')
    .contains('Alert').click()
    cy.get('div#alert')
    .contains('Trigger an Alert').click()
    cy.get('div#alert')
    .find('p#alert-answer').contains('Answer: Yes').should('exist')
   })
});
