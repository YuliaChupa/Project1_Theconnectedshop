describe(`Check Homepage`,()=>{
  beforeEach(() => {
    cy.viewport('iphone-x')
    cy.visit('https://theconnectedshop.com/')
    cy.on('uncaught:exception', (err, runnable) => { return false; }); });

it(`Check site and check title`,()=>{
// перевірка, що сайт дійсно відкрився
cy.url()
.should('include','theconnectedshop.com')
    //перевірка заголовку
    cy.title()
    .should('eq','The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office')
    
})


})