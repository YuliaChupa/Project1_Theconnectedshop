    describe(`Open Homepage`,()=>{
    beforeEach(() => {
      cy.viewport(1280, 720); 
      cy.visit('https://theconnectedshop.com/')
      cy.on('uncaught:exception', (err, runnable) => { return false; }); });
  
  it(`Check site and check title`,()=>{
    cy.get('.Header__LogoImage--primary')
      .should('be.not.visible')
      .and ('exist')
      .and ('have.attr','src','//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137')
    
      })
    })