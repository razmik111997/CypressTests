import {homePage} from "../pages/autoExercise/Home";
import {registration} from "../pages/autoExercise/SignUp"
describe("Homepage and Icons", () => {
    it("Loads the homepage and checks for icons", () => {
     registration.visit();
      cy.url().should('include','/')
      })
  
  it("Loads the Products and check for icons", () => {
   registration.visit("products");
     cy.url().should('include','products')
     cy.get('.logo').find('img').should('have.attr', 'src').should('include','/static/images/home/logo.png')
  });
  
  it("Loads the Cart", () => {
   registration.visit("view_cart");
     cy.url().should('include','view_cart')
  });
  it('Load the Test Cases', () =>{
   registration.visit("test_cases");
    cy.url().should('include','test_cases')
    })
    it('Load Contact us click', () =>{
      registration.visit("contact_us")
       cy.url().should('include','contact_us')
    })
  })