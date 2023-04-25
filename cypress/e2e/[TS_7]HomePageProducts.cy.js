import { homePageProducts } from "../pages/autoExercise/HomePageProducts";
import { autoExerciseData } from "../Utils/data";
import { productsCheck } from "../pages/autoExercise/Products";
let productName, productCost, userName, secondUserName;
describe("HomePageProducts", () => {
  it("Verify cart adding from home page", () => {
    cy.openHomePage();
    productsCheck
      .getProductOverlay()
      .eq(0)
      .wait(3000)
      .should("have.css", "background-color", "rgb(254, 152, 15)");
    homePageProducts
      .getProductPrice()
      .eq(0)
      .invoke("text")
      .then(($val) => {
        productCost = $val;
      });
    homePageProducts
      .getProductName()
      .eq(0)
      .invoke("text")
      .then(($text) => {
        productName = $text;
      });
    homePageProducts.getFirstAddToCartButton().click();
    homePageProducts
      .getFirstText()
      .should("contain", autoExerciseData.FirstText);
    homePageProducts
      .getSecondText()
      .should("contain", autoExerciseData.SecondText);
    homePageProducts.getContinueButton().click();
  });
  it("Check Men Tshirt Product's ui", () => {
    cy.openHomePage();
    productsCheck
      .getProductOverlay()
      .eq(1)
      .realHover()
      .wait(3000)
      .should("have.css", "background-color", "rgb(254, 152, 15)");
    homePageProducts
      .getProductPrice()
      .eq(1)
      .invoke("text")
      .then(($val) => {
        productCost = $val;
      });
    homePageProducts
      .getProductName()
      .eq(1)
      .invoke("text")
      .then(($text) => {
        productName = $text;
      });
    homePageProducts.getSecondAddToCartButton().click();
    homePageProducts
      .getFirstText()
      .should("contain", autoExerciseData.FirstText);
    homePageProducts
      .getSecondText()
      .should("contain", autoExerciseData.SecondText);
    homePageProducts.getContinueButton().click();
  });
  it("Check Sleeveless Dress' UI", () => {
    cy.openHomePage();
    productsCheck
      .getProductOverlay()
      .eq(2)
      .realHover()
      .wait(3000)
      .should("have.css", "background-color", "rgb(254, 152, 15)");
    homePageProducts
      .getProductPrice()
      .eq(2)
      .invoke("text")
      .then(($val) => {
        productCost = $val;
      });
    homePageProducts
      .getProductName()
      .eq(2)
      .invoke("text")
      .then(($text) => {
        productName = $text;
      });
    homePageProducts.getThirdAddToCartButton().click();
    homePageProducts
      .getFirstText()
      .should("contain", autoExerciseData.FirstText);
    homePageProducts
      .getSecondText()
      .should("contain", autoExerciseData.SecondText);
    homePageProducts.getViewCartButton().click();
    cy.get(".image").should("contain", "Item");
    cy.get(".description").should("contain", "Description");
    cy.get(".price").should("contain", "Price");
    cy.get(".quantity").should("contain", "Quantity");
    cy.get(".total").should("contain", "Total");
    cy.get(".product_image").should("be.visible");
    cy.then(() => {
      cy.get("h4 > a").should("contain", productName);
    });
    cy.get(".cart_description > p").should("contain", "Women > Dress");
    cy.get(".cart_price > p").should("contain", "Rs. 1000");
    cy.get(".disabled").should("contain", "1");
    cy.then(() => {
      cy.get(".cart_total_price").should("contain", productCost);
    });
    homePageProducts.getProceedToCheckOut().click();
    homePageProducts
      .getFirstText()
      .should("contain", autoExerciseData.CheckoutFirstText);
    homePageProducts
      .getSecondText()
      .should("contain", autoExerciseData.CheckoutSecondText);
    homePageProducts.getRegisterLoginButton().click();
    homePageProducts.getEmailAddress().type(autoExerciseData.EmailAddress);
    homePageProducts.getPassword().type(autoExerciseData.Password);
    homePageProducts.getLoginButton().click();
    homePageProducts.getCartButton().click();
    homePageProducts.getProceedToCheckOut().click();
    homePageProducts.getCommentField().type(autoExerciseData.Comment);
    homePageProducts.getPlaceOrder().click();
    homePageProducts.getNameOnCard().type(autoExerciseData.CardName);
    homePageProducts.getCardNumber().type(autoExerciseData.CardNumber);
    homePageProducts.getCVC().type(autoExerciseData.CVC);
    homePageProducts.getExpiryMonth().type(autoExerciseData.ExpiryMonth);
    homePageProducts.getExpiryYear().type(autoExerciseData.ExpiryYear);
    homePageProducts.getPayButton().click();
    homePageProducts.getContinue().click();
  });
});
