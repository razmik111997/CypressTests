import { homePage } from "../pages/autoExercise/Home";
import { autoExerciseColor} from "../Utils/colors";
import { autoExerciseData } from "../Utils/data";
describe("Carusel", () => {
  it("Loads the homepage and checks for icons", () => {
    homePage.visit();
    cy.get(".item").then(($elem) => {
      expect($elem).to.contain(autoExerciseData.CaruselsFirstText);
      expect($elem).to.contain(
      autoExerciseData.CaruselsSecondText
      );
      expect($elem).to.contain(
        autoExerciseData.CaruselsThirdText
      );
    });
    homePage.getTestCasesList().should("contain", "Test Cases");
    homePage
      .getTestCasesList()
      .should("have.css", "background-color", autoExerciseColor.backgroundcolor);
    homePage
      .getTestCasesList()
      .realHover()
      .wait(3000)
      .should("have.css","background-color",autoExerciseColor.hoverbackgroundcolor);
    homePage.getApisList().should("contain", "APIs list for practice");
    homePage
      .getApisList()
      .should("have.css", "background-color",autoExerciseColor.backgroundcolor);
    homePage.getApisList().realHover().wait(3000).should("have.css","background-color",autoExerciseColor.hoverbackgroundcolor)
    cy.wait(7000);
    cy.get(".item").should("have.class", "active");
    cy.get('.active > :nth-child(2) > .girl').should("be.visible");
  });
});
