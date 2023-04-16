class HomePage {
   getShopMenu() {
  cy.get(".shop-menu");
   }
  //Get the Home button element and click it
  getHomeButton(value) {
    return cy.get("fa fa-home").type(value);
  }
  //Get the Products button element and click it
  getProducts(value) {
    return cy.get("[material-icons card_travel]").type(value);
  }
  //Get the Cart button and click it
  getCart(value) {
    return cy.get("fa fa-shopping-cart").type(value);
  }
  getTestCasesList() {
    return cy.get(".active > :nth-child(1) > .test_cases_list > .btn")
  }
  getAPIsList() {
  cy.get(".active > :nth-child(1) > .apis_list > .btn")
  }
}
export const homePage = new HomePage();