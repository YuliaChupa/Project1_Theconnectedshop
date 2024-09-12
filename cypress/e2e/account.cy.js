describe('Open Homepage', () => {
    beforeEach(() => {
      cy.viewport(1280, 720); 
      cy.visit('https://theconnectedshop.com/');
      cy.on('uncaught:exception', (err, runnable) => { return false; });
    });
  
    it('open Account tab', () => {
      cy.get('.Header__SecondaryNav > .HorizontalList > :nth-child(1) > .Heading')
        .should('be.visible')
        .and('exist')
        .and('have.attr', 'class', 'Heading Link Link--primary Text--subdued u-h8')
        .click();
        cy.get('.next-input.email-typo-input').type('yulia.chupa@ukr.net');
    
    })
  })