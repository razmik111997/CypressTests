import { data } from "../Utils/data";
import { registerPage } from "../pages/SignUp";
import { RegisterData } from "../Utils/data";

describe("SignUp", () => {
  it("Verify Register functionality with valid RegisterData's", () => {
    registerPage.Visit();
    registerPage.getFirstName(RegisterData.FirstName);
    registerPage.getLastName(RegisterData.LastName);
    registerPage.getAddress(RegisterData.Address);
    registerPage.getCity(RegisterData.City);
    registerPage.getState(RegisterData.State);
    registerPage.getZipCode(RegisterData.ZipCode);
    registerPage.getPhone(RegisterData.Phone);
    registerPage.getSSN(RegisterData.SSN);
    registerPage.getUsername(RegisterData.Username);
    registerPage.getPassword(RegisterData.Password);
    registerPage.getConfirm(RegisterData.Confirm);
    registerPage.submit();
  });

  it("Verify sign up functionality with empty credentials", () => {
    registerPage.Visit();
    registerPage.getFirstName(data.emptyString);
    registerPage.getLastName(data.emptyString);
    registerPage.getAddress(data.emptyString);
    registerPage.getCity(data.emptyString);
    registerPage.getState(data.emptyString);
    registerPage.getZipCode(data.emptyString);
    registerPage.getPhone(data.emptyString);
    registerPage.getSSN(data.emptyString);
    registerPage.getUsername(data.emptyString);
    registerPage.getPassword(data.emptyString);
    registerPage.getConfirm(data.emptyString);
    registerPage.submit();
    cy.url().should("include", "/parabank/register.htm");
  });

  it("Verify sign up functionality with username and password and empty credentials", () => {
    registerPage.Visit();
    registerPage.getFirstName(data.emptyString);
    registerPage.getLastName(data.emptyString);
    registerPage.getAddress(data.emptyString);
    registerPage.getCity(data.emptyString);
    registerPage.getState(data.emptyString);
    registerPage.getZipCode(data.emptyString);
    registerPage.getPhone(data.emptyString);
    registerPage.getSSN(data.emptyString);
    registerPage.getUsername(RegisterData.Username);
    registerPage.getPassword(RegisterData.Password);
    registerPage.getConfirm(RegisterData.Confirm);
    registerPage.submit();
    cy.url().should("include", "/parabank/register.htm");
  });
});
