describe('Verify main menu', () => {
    context('720p resolution', () => {
      beforeEach(() => {
        cy.visit('https://theconnectedshop.com/');
        cy.viewport(1280, 720); 
        cy.on('uncaught:exception', (err, runnable) => {
          
          return false;
        });
      });

      it('displays full header', () => {
        cy.get('nav.Header__MainNav')
          .should('exist')
          .and('be.visible');
  
        cy.get(':nth-child(1) > .Header__Icon')
          .should('not.be.visible');
      });
    });
  
    context('mobile resolution', () => {
      beforeEach(() => {
        cy.visit('https://theconnectedshop.com/');
        cy.viewport('iphone-x'); 
      });
  
      it('displays burger menu', () => {
        cy.get(':nth-child(1) > .Header__Icon')
          .should('be.visible');

    cy.visit('https://theconnectedshop.com/');
    cy.viewport(1280, 720); 
    cy.get('.Header__LogoImage--transparent')
      .should('be.visible')
      .trigger('mousehover');
      });
    });
  });