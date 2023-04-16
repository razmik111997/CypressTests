import { loginPage } from "../pages/SignIn";
import { data } from "../Utils/data";
describe("SignIn", () => {
  it("Verify login functionality with valid credentials", () => {
    loginPage.visit();
    loginPage.getloginForm();
    loginPage.getUsername(data.username);
    loginPage.getPassword(data.password);
    loginPage.submit().then(($button) => {
      expect($button).to.have.value("Log In");
      loginPage.submit();
    });
  });
  it("Verify Login functionality with invalid username", () => {
    loginPage.visit();
    loginPage.getUsername(data.invalidUsername);
    loginPage.getPassword(data.password);
    loginPage.submit();
    cy.url().should("include", "parabank/login.htm");
  });

  it("VerifyLogin functionality with invalid password", () => {
    loginPage.visit();
    loginPage.getUsername(data.username);
    loginPage.getPassword(data.invalidPassword);
    loginPage.submit();
    cy.url().should("include", "parabank/login.htm");
  });

  it("VerifyLogin functionality with invalid credentials", () => {
    loginPage.visit();
    loginPage.getUsername(data.invalidUsername);
    loginPage.getPassword(data.invalidPassword);
    loginPage.submit();
    cy.url().should("include", "parabank/login.htm");
  });

  it("VerifyLogin functionality with empty credentials", () => {
    loginPage.visit();
    loginPage.getUsername(data.emptyString);
    loginPage.getPassword(data.emptyString);
    loginPage.submit();
    cy.url().should("include", "parabank/login.htm");
  });

  it("VerifyLogin functionality with empty username", () => {
    loginPage.visit();
    loginPage.getUsername(data.emptyString);
    loginPage.getPassword(data.password);
    loginPage.submit();
    cy.url().should("include", "parabank/login.htm");
  });

  it("Verify Login functionality with empty password", () => {
    loginPage.visit();
    loginPage.getUsername(data.username);
    loginPage.getPassword(data.emptyString);
    loginPage.submit();
    cy.url().should("include", "parabank/login.htm");
  });
});
