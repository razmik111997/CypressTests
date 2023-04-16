import { HomePage } from "../pages/autoExercise/Home";
import {SignUp} from "../pages/autoExercise/SignUp"
describe("Homepage and Icons", () => {
    it("Loads the homepage and checks for icons", () => {
     SignUp.visit();
     HomePage.getShopMenu().click();
      cy.url().should('include','/')
      })
    });
  
  it("Loads the Products and check for icons", () => {
    SignUp.visit(products);
    cy.get(".shop-menu > .nav > :nth-child(2)").click();
    cy.url().should('include','products')
    cy.get('.logo').find('img').should('have.attr', 'src').should('include','/static/images/home/logo.png')
  });
  
  it("Loads the Cart", () => {
   SignUp.visit(view_cart);
    cy.get(".shop-menu > .nav > :nth-child(3) > a").click();
  });