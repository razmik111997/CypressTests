class HomePageProducts {
  getProductPrice() {
    return cy.get(".overlay-content>h2");
  }
  getProductName() {
    return cy.get(".overlay-content>p");
  }
  getFirstAddToCartButton() {
    return cy.get(
      ".features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn"
    );
  }
  getFirstText() {
    return cy.get(".modal-title");
  }
  getSecondText() {
    return cy.get(".modal-body > :nth-child(1)");
  }
  getContinueButton() {
    return cy.get(".modal-footer > .btn");
  }
  getSecondAddToCartButton() {
    return cy.get(
      ":nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn"
    );
  }
  getThirdAddToCartButton() {
    return cy.get(
      ":nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn"
    );
  }
  getViewCartButton() {
    return cy.get("u");
  }
  getItem() {
    return cy.get(".image");
  }
  getDescription() {
    return cy.get(".description");
  }
  getPrice() {
    return cy.get(".price");
  }
  getQuantity() {
    return cy.get(".quantity");
  }
  getTotal() {
    return cy.get(".total");
  }
  getProductImage() {
    return cy.get(".product_image");
  }
  getCartDescriptionName() {
    return cy.get(".cart_description > h4");
  }
  getCartDescriptionProdType() {
    return cy.get(".cart_description > p");
  }
  getCartProdPrice() {
    return cy.get(".cart_price > p");
  }
  getCartProdQuantity() {
    return cy.get(".disabled");
  }
  getTotalPrice() {
    return cy.get(".cart_total_price");
  }
  getProceedToCheckOut() {
    return cy.get(".col-sm-6 > .btn");
  }
  getRegisterLoginButton() {
    return cy.get(".modal-body > :nth-child(2) > a > u");
  }
  getEmailAddress() {
    return cy.get('[data-qa="login-email"]');
  }
  getPassword() {
    return cy.get('[data-qa="login-password"]');
  }
  getLoginButton() {
    return cy.get('[data-qa="login-button"]');
  }
  getCartButton() {
    return cy.get(".shop-menu > .nav > :nth-child(3) > a");
  }
  getCommentField() {
    return cy.get(".form-control");
  }
  getPlaceOrder() {
    return cy.get(":nth-child(7) > .btn");
  }
  getNameOnCard() {
    return cy.get('[data-qa="name-on-card"]');
  }
  getCardNumber() {
    return cy.get('[data-qa="card-number"]');
  }
  getCVC() {
    return cy.get('[data-qa="cvc"]');
  }
  getExpiryMonth() {
    return cy.get('[data-qa="expiry-month"]');
  }
  getExpiryYear() {
    return cy.get('[data-qa="expiry-year"]');
  }
  getPayButton() {
    return cy.get('[data-qa="pay-button"]');
  }
  getContinue() {
    return cy.get('[data-qa="continue-button"]');
  }
}
export const homePageProducts = new HomePageProducts();
