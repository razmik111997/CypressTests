class SignUp {
  visit(endpoint) {
    cy.visit(Cypress.env("globalUrl") + endpoint);
  }
  getTitle1() {
   return cy.get("#id_gender1").click();
  }
  getTitle2() {
     return cy.get("#id_gender2").click();
  }
  getName() {
    return cy.get('[data-qa="name"]');
  }
  getUsername() {
    return cy.get('[data-qa="signup-name"]');
  }
  getFirstName() {
    return cy.get('[data-qa="first_name"]');
  }
  getLastName() {
    return cy.get('[data-qa="last_name"]');
  }
  getCompany() {
    return cy.get('[data-qa="company"]');
  }
  getAddress() {
    return cy.get('[data-qa="address"]');
  }
  getAddress2() {
    return cy.get('[data-qa="address2"]');
  }
  getCountry() {
    return cy.get('[data-qa="country"]');
  }
  getState() {
    return cy.get('[data-qa="state"]');
  }
  getCity() {
    return cy.get('[data-qa="city"]');
  }
  getZipCode() {
    return cy.get('[data-qa="zipcode"]');
  }
  getMobileNumber() {
    return cy.get('[data-qa="mobile_number"]');
  }
  CreateAccount() {
    return cy.get('[data-qa="create-account"]');
  }
  getEmail() {
    return cy.get('[data-qa="signup-email"]');
  }
  getPassword() {
    return cy.get('[data-qa="password"]');
  }
  submit() {
    return cy.get('[data-qa="signup-button"]');
  }
  getDay() {
    return cy.get('[data-qa="days"]');
  }
  getMonth() {
    return cy.get('[data-qa="months"]');
  }
  getYear() {
    return cy.get('[data-qa="years"]');
  }
  getSignupforournewsletter() {
    return cy.get("#newsletter");
  }
  getReceivespecialoffers() {
    return cy.get("#optin");
  }
  generateRandomName(length, email = "") {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return `test${result}${email}`;
  }
}

export const registration = new SignUp();
