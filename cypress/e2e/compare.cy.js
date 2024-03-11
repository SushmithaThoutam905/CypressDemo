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
    const cars = cy.fixture('cardetails').then((cars) => {
    // Select first car for comparison
    cy.selectCar(cars.cars[0].brand, cars.cars[0].carname, cars.cars[0].type, cars.cars[0].model);
  
    // Select second car for comparison
    cy.selectCar(cars.cars[1].brand, cars.cars[1].carname, cars.cars[1].type, cars.cars[1].model);
    })
    // Click on compare cars
    cy.get('.o-fznVme').contains('Compare').click();
    cy.wait(3000);

    cy.get('.o-frwuxB').as('parent')
    .children()
    .contains('span.o-cKuOoN','Hide common features').click();
    cy.get('@parent')
    .children()
    .contains('span.o-cKuOoN','Highlight differences').click();

  }); 
})
