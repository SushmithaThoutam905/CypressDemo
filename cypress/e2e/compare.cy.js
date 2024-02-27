describe('CarWale Compare Cars', () => {
  beforeEach(() => {
    cy.visitURL();
  });

  it('should compare cars', () => {
    cy.get('.o-bkmzIL')
      .find('li')
      .children()
      .first()
      .trigger('mouseover')
      .wait(2000);
  
    cy.get('.o-cpnuEd')
      .find('div.oROWc7')
      .contains('Compare Cars')
      .click();
  
    cy.wait(3000);
  
    // Select first car for comparison
    cy.selectCar('Maruti Suzuki', 'Fronx', 'Automatic', 'Alpha 1.0L Turbo 6 AT Dual Tone');
  
    // Select second car for comparison
    cy.selectCar('Tata', 'Altroz', 'Automatic', 'XZA Petrol');
  
    // Click on compare cars
    cy.get('.o-fznVme').contains('Compare').click();
  
    cy.wait(3000);
  });
  
})
