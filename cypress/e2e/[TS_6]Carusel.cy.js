import{ HomePage } from "../pages/autoExercise/Home";
import {SignUp} from "../pages/autoExercise/SignUp"
describe("Carusel", () => {
  it("Loads the homepage and checks for icons", () => {
    SignUp.visit();
    cy.get(".item").then(($elem) => {
      expect($elem).to.contain("Automation");
      expect($elem).to.contain(
        "Full-Fledged practice website for Automation Engineers"
      );
      expect($elem).to.contain(
        "All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills."
      );
    });
    HomePage.getTestCasesList().should("be.visible").and("contain", "Test Cases");
    HomePage.getTestCasesList().should("have.css","background-color", "rgb(92, 184, 92)");
    HomePage.getTestCasesList().realHover().should("have.css", "background-color", "rgb(254, 152, 15)");
    HomePage.getAPIsList().should("have.css", "background-color", "rgb(92, 184, 92)").and("contain", "APIs list for practice");
    cy.wait(7000);
    cy.get(".item").should("have.class", "active");
  });
});
