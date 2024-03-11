describe('CarWale Compare Cars', () => {
  beforeEach(() => {
    cy.visitURL();
  });

  it('should compare cars', () => {
    cy.get('.o-bkmzIL').find('li').children().first().trigger('mouseover').wait(3000);

    cy.get('.o-cpnuEd').find('div.oROWc7').contains('Compare Cars').click();

    cy.wait(3000)
    cy.get('.o-dOanIi').click();
    // selecting 1st car for comparision
    cy.get('.o-bTDyCI').find('div.o-bfyaNx')
    .find('img.o-bXKmQE[title="Select Car"]').eq(1)
    .click({force:true}).wait(3000);
    //To close the popup
    // cy.get('.o-cpnuEd').find('span.o-frwuxB[aria-label="Close Popup"]').first().click({force:true});
    cy.get('.o-cYOpxG').find('ul.o-eCFISO').first()
    .find('div.o-cpnuEd[data-make="Maruti Suzuki"]').click();

    cy.get('li.o-fzptVd[data-model="Fronx"]').first().click({force:true});

    cy.get('.o-eoatGj').find('label.o-frwuxB').find('div.o-brXWGL')
    .find('span.o-cKuOoN').contains('Automatic').click();

    cy.get('li.o-fznJzu').find('p.o-bqHweY')
    .contains('Alpha 1.0L Turbo 6 AT Dual Tone').click();

    //selecting 2nd car for comparision
    cy.get('.o-bTDyCI').find('div.o-bfyaNx')
    .find('img.o-bXKmQE[title="Select Car"]').eq(2)
    .click({force:true}).wait(3000);

    cy.get('.o-cYOpxG').find('ul.o-eCFISO').first()
    .find('div.o-cpnuEd[data-make="Tata"]').click();

    cy.get('li.o-fzptVd[data-model="Altroz"]').first().click({force:true});

    cy.get('.o-eoatGj').find('label.o-frwuxB').find('div.o-brXWGL')
    .find('span.o-cKuOoN').contains('Automatic').click();

    cy.get('li.o-fznJzu').find('p.o-bqHweY')
    .contains('XZA Petrol').click();
    //click on compare cars
    cy.get('.o-fznVme').contains('Compare').click();
    cy.wait(4000)
  })  
})