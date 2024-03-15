const { select } = require("xpath");

describe('Cars', () => {
  beforeEach(() => {
    cy.visitURL();
  });

  it.only('iframes', () => {
    
    cy.get('div.o-eWcEwo').click()
    cy.get('div.o-dsiSgT').find('div.o-cKuOoN').children().eq(2).click()

    // .find('div.o-brXWGL')
    // .find('div.o-cKuOoN')
    // cy.get('.o-bkmzIL').find('li').children().first().trigger('mouseover').wait(3000);

    
  })  
  // it('checkbox', () => {
  //   cy.get('.o-bkmzIL').find('li').children().first().trigger('mouseover').wait(3000);

  //   cy.get('.o-cpnuEd').find('div.oROWc7').contains('Find New Cars').click().wait(2000);
  //   cy.get('.o-dOanIi').first().click();
  //   cy.get('ul>li')
  //   .find('div.o-cpNAVm')
  //   .contains('Tata').click()

  //   cy.contains('More Filter').click();
  //   cy.get('ul>li').find('div.o-cpnuEd')
  //   .find('div.o-bTDyCI')
    // .contains('Mileage').scrollIntoView().click();

    // cy.get('div.la6Zqh')
    // .find('ul').find('li.NPguPr')
    // .contains('Above 20 kmpl')
    // .parent()
    // .find('input[type="checkbox"]').as('check');
    // cy.get('@check').check();
    // cy.get('@check').uncheck();
    // cy.get('@check').check();
    // cy.get('.o-bUVylL').find('button.o-fcaNGp').contains('Apply Changes').click()
  // })
})