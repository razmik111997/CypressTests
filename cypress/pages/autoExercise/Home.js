class HomePage {
 visit() {
   return cy.visit(Cypress.env("globalUrl"));
}
  getShopMenu() {
  cy.get('.shop-menu > .nav > :nth-child(1) > a > .fa')
   }
  //Get the Home button element and click it
  getHomeButton() {
    return cy.get(".nav > :nth-child(1) > a");
  }
  //Get the Products button element and click it
  getProducts() {
    return cy.get(".nav > :nth-child(2) > a");
  }
  //Get the Cart button and click it
  getCart() {
    return cy.get("fa fa-shopping-cart");
  }
  getTestCasesList() {
    return cy.get(".active > :nth-child(1) > .test_cases_list > .btn")
  }
  getApisList() {
   return cy.get(".active > :nth-child(1) > .apis_list > .btn")
  }
}
export const homePage = new HomePage();