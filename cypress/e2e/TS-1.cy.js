describe('signup', () => {
  it('verify signup functionality with valid credentials', () => {
    cy.visit('https://demoqa.com/automation-practice-form/');
    cy.get('#firstname').type('Razmik');
    cy.get('#lastname').type('Markosyan');
    cy.get('#Email').type('razmikmarkosyan2597@gmail.com');
    cy.get('.custom control label').type('Male');
    cy.get('#userNumber').type('098252701');
    cy.get('#DateofBirth').type()
  })
  it.only('passes', () =>{
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('header > a > img').should('be exist')
  })
})