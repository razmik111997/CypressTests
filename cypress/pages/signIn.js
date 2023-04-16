class LoginPage {
  visit() {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  }

  getloginForm() {
    return cy.get("#loginPanel");
  }

  getUsername(value) {
    return cy.get(".input").first().type(value);
  }

  getPassword(value) {
    return cy.get(":nth-child(4) > .input").type(value);
  }

  submit() {
    return cy.get(":nth-child(5) > .button").click();
  }
}

export const loginPage = new LoginPage();
