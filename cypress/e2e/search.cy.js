describe('Open Homepage', () => {
    beforeEach(() => {
      cy.viewport(1280, 720); 
      cy.visit('https://theconnectedshop.com/');
      cy.on('uncaught:exception', (err, runnable) => { return false; });
    });
 it('working with search bar', () => {
    
    //Search button
    cy.get('a[data-action="toggle-search"]').eq(0)
    .should('exist')        
    .and('be.visible')
    .and('have.attr','href','/search')
    .click();
    
    //Searh bar
    cy.get('input.Search__Input.Heading[name="q"]')
    //перевірка атрибутів
    .should('have.attr', 'type', 'search')         
    .and('have.attr', 'name', 'q')              
    .and('have.attr', 'autocomplete', 'off')     
    .and('have.attr', 'autocorrect', 'off')     
    .and('have.attr', 'autocapitalize', 'off')   
    .and('have.attr', 'aria-label', 'Search...') 
    .and('have.attr', 'placeholder', 'Search...')
    .and('have.attr', 'autofocus');
  // Задаємо вірний запит
    cy.get('input.Search__Input.Heading[name="q"]')     
    .type('Water Leak Detector')
    .should('have.value','Water Leak Detector')
  
    //Первірка результатів
   cy.get('span.Heading.Text--subdued.u-h7').eq(0)
    .should('exist')        
    .and('be.visible')
    .invoke('text') // 
    .then((text) => {
    const resultsNumber = parseInt(text); 
    expect(resultsNumber).to.be.greaterThan(1); 
        });
    });
    it('Wrong query', () => {
//Search button
cy.get('a[data-action="toggle-search"]').eq(0)
.should('exist')        
.and('be.visible')
.and('have.attr','href','/search')
.click();

// Задаємо помилковий запит
 cy.get('input.Search__Input.Heading[name="q"]')     
 .type('W"at?er88')
 .should('have.value','W"at?er88')
 
 //Первірка результатів
 cy.get(':nth-child(1) > .Segment > .Segment__Content > p').eq(0)
 .should('have.text','No results could be found')
  


      }); 
    });