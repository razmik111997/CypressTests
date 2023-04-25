import { autoExerciseData } from "../Utils/data";
import { registration } from "../pages/autoExercise/SignUp";

let userName, secondUserName;
describe("SignIn", () => {
  beforeEach(() => {});
  it.only("Verify login functionality with valid credentials 1", () => {
    registration.visit("login");
    registration.getUsername().type(registration.generateRandomName(5, ""));
    registration
      .getUsername()
      .invoke('val')
      .then((val) => {
        userName = val
        cy.log(userName);
      });
      cy.wait(20000)
    registration
      .getEmail()
      .type(registration.generateRandomName(5, "@gmail.com"));
    registration.submit().click();
    cy.get('[data-qa="name"]')
      .invoke("val")
      .then((text) => {
        secondUserName = text;
        cy.log(secondUserName);
      });
      registration.getTitle1();
      registration
        .getPassword()
        .type(autoExerciseData.Password);
        registration.getDay().select(autoExerciseData.Day);
        registration.getMonth().select(autoExerciseData.Month);
        registration.getYear().select(autoExerciseData.Year);
        registration.getSignupforournewsletter().click();
        registration.getReceivespecialoffers().click();
        registration.getFirstName().type(registration.generateRandomName(11,""));
        registration.getLastName().type(registration.generateRandomName(8,""));
        registration.getCompany().type(registration.generateRandomName(8,""));
        registration.getFirstAddress().type(registration.generateRandomName(10,""));
        registration.getSecondAddress().type(registration.generateRandomName(15,""));
        registration.getCountry().select('United States');
        registration.getState().type(registration.generateRandomName(6,""));
        registration.getCity().type(registration.generateRandomName(6,""));
        registration.getZipCode().type(registration.generateRandomName(13,""))
        registration.getMobileNumber().type(registration.generateRandomName(10,""));
        cy.wait(50000)
        registration.CreateAccount().click();
    });
    it("Verify login functionality with valid credentials 2", () => {
      registration.visit("login");
      registration.getUsername().type(registration.generateRandomName(5, ""));
      registration
        .getUsername()
        .invoke('val')
        .then((val) => {
          userName = val
          cy.log(userName);
        });
      registration
        .getEmail()
        .type(registration.generateRandomName(5, "@gmail.com"));
      registration.submit().click();
      cy.get('[data-qa="name"]')
        .invoke("val")
        .then((text) => {
          secondUserName = text;
          cy.log(secondUserName);
        });
        registration.getTitle2();
        registration
          .getPassword()
          .type(registration.generateRandomName(5, "@gmail.com"));
          registration.getDay().select(autoExerciseData.Day);
          registration.getMonth().select(autoExerciseData.Month);
          registration.getYear().select(autoExerciseData.Year);
          registration.getSignupforournewsletter().click();
          registration.getReceivespecialoffers().click();
          registration.getFirstName().type(registration.generateRandomName(11,""));
          registration.getLastName().type(registration.generateRandomName(8,""));
          registration.getCompany().type(registration.generateRandomName(8,""));
          registration.getFirstAddress().type(registration.generateRandomName(10,""));
          registration.getSecondAddress().type(registration.generateRandomName(15,""));
          registration.getCountry().select('United States');
          registration.getState().type(registration.generateRandomName(6,""));
          registration.getCity().type(registration.generateRandomName(6,""));
          registration.getZipCode().type(registration.generateRandomName(13,""))
          registration.getMobileNumber().type(registration.generateRandomName(10,""));
          registration.CreateAccount().click();
      });
    it("Verify login functionality without day , month and year", () => {
        registration.visit("login");
        registration.getUsername().type(registration.generateRandomName(5, ""));
        registration
          .getUsername()
          .invoke('val')
          .then((val) => {
            userName = val
            cy.log(userName);
          });
        registration
          .getEmail()
          .type(registration.generateRandomName(5, "@gmail.com"));
        registration.submit().click();
        cy.get('[data-qa="name"]')
          .invoke("val")
          .then((text) => {
            secondUserName = text;
            cy.log(secondUserName);
          });
          registration.getTitle2();
          registration
            .getPassword()
            .type(registration.generateRandomName(5, "@gmail.com"));
            registration.getSignupforournewsletter().click();
            registration.getReceivespecialoffers().click();
            registration.getFirstName().type(registration.generateRandomName(11,""));
            registration.getLastName().type(registration.generateRandomName(8,""));
            registration.getCompany().type(registration.generateRandomName(8,""));
            registration.getFirstAddress().type(registration.generateRandomName(10,""));
            registration.getSecondAddress().type(registration.generateRandomName(15,""));
            registration.getCountry().select('United States');
            registration.getState().type(registration.generateRandomName(6,""));
            registration.getCity().type(registration.generateRandomName(6,""));
            registration.getZipCode().type(registration.generateRandomName(13,""))
            registration.getMobileNumber().type(registration.generateRandomName(10,""));
            registration.CreateAccount().click();
  });
  it("Verify login functionality without username", () => {
    registration.visit("login");
    registration.getUsername()
    registration
      .getUsername()
      .invoke('val')
      .then((val) => {
        userName = val
        cy.log(userName);
      });
    registration
      .getEmail()
      .type(registration.generateRandomName(5, "@gmail.com"));
    registration.submit().click();
})
});

