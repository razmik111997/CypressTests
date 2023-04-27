import { productsCheck } from "../pages/autoExercise/Products";
let number,
  numberCountPolo,
  numberCountHandM,
  numberCountMadame,
  numberCountMastandHarbour,
  numberCountBABYHUG,
  numberCountBIBA,
  numberCountKookieKids,
  numberCountAllenSollyJunior;
describe("Check Brands product's count", () => {
  it("Check Polo product's count", () => {
    cy.openHomePage();
    cy.get("ul>li").each(($el, index, $list) => {
      expect($list).to.have.length(57);
    });
    productsCheck.getCategory().should("contain", "Category");
    productsCheck.getWomen().click();
    productsCheck.getWomenPanelBody().then(($el) => {
      expect($el).to.contain("Dress");
      expect($el).to.contain("Tops");
      expect($el).to.contain("Saree");
    });
    productsCheck.getMen().click();
    productsCheck.getMenPanelBody().then(($el) => {
      expect($el).to.contain("Tshirts");
      expect($el).to.contain("Jeans");
    });
    productsCheck.getKids().click();
    productsCheck.getKidsPanelBody().then(($el) => {
      expect($el).to.contain("Dress");
      expect($el).to.contain("Tops & Shirts");
    });
    productsCheck.getPoloCount()
      .invoke("text")
      .then(($el) => {
        numberCountPolo = $el;
        number = parseInt(numberCountPolo.slice(1, 2));
        cy.log(typeof number);
      });

    productsCheck.getPolo().click();
    productsCheck.getProductOverlay().each(($el, index, $list) => {
      expect($list).to.have.length(number);
    });
  });
  it("Check H&M product's count", () => {
    cy.openHomePage();
    productsCheck.getHandMCount()
      .invoke("text")
      .then(($el) => {
        numberCountHandM = $el;
        number = parseInt(numberCountHandM.slice(1, 2));
        cy.log(typeof number);
      });
    productsCheck.getHandM().click();
    productsCheck.getProductOverlay().each(($el, index, $list) => {
      expect($list).to.have.length(number);
    });
  });
  it("Check MADAME product's count", () => {
    cy.openHomePage();
    productsCheck.getMadameCount()
      .invoke("text")
      .then(($el) => {
        numberCountMadame = $el;
        number = parseInt(numberCountMadame.slice(1, 2));
        cy.log(typeof number);
      });
    productsCheck.getMadame().click();
    productsCheck.getProductOverlay().each(($el, index, $list) => {
      expect($list).to.have.length(number);
    });
  });
  it("Check Mast & Harbour product's count", () => {
    cy.openHomePage();
    productsCheck.getMastandHarbourCount()
      .invoke("text")
      .then(($el) => {
        numberCountMastandHarbour = $el;
        number = parseInt(numberCountMastandHarbour.slice(1, 2));
        cy.log(typeof number);
      });
    productsCheck.getMastandHarbour().click();
    productsCheck.getProductOverlay().each(($el, index, $list) => {
      expect($list).to.have.length(number);
    });
  });
  it("Check BABYHUG  product's count", () => {
    cy.openHomePage();
    productsCheck.getBabyHugCount()
      .invoke("text")
      .then(($el) => {
        numberCountBABYHUG = $el;
        number = parseInt(numberCountBABYHUG.slice(1, 2));
        cy.log(typeof number);
      });
    productsCheck.getBabyHug().click();
   productsCheck.getProductOverlay().each(($el, index, $list) => {
      expect($list).to.have.length(number);
    });
  });
  it("Check Allen Solly Junior product's count", () => {
    cy.openHomePage();
    productsCheck.getAllenSollyJuniorCount()
      .invoke("text")
      .then(($el) => {
        numberCountAllenSollyJunior = $el;
        number = parseInt(numberCountAllenSollyJunior.slice(1, 2));
        cy.log(typeof number);
      });
    productsCheck.getAllenSollyJunior().click();
    productsCheck.getProductOverlay().each(($el, index, $list) => {
      expect($list).to.have.length(number);
    });
  });
  it("Check Kookie Kids product's count", () => {
    cy.openHomePage();
    productsCheck.getKookieKidsCount()
      .invoke("text")
      .then(($el) => {
        numberCountKookieKids = $el;
        number = parseInt(numberCountKookieKids.slice(1, 2));
        cy.log(typeof number);
      });
    productsCheck.getKookieKids().click();
    productsCheck.getProductOverlay().each(($el, index, $list) => {
      expect($list).to.have.length(number);
    });
  });
  it("Check BIBA product's count", () => {
    cy.openHomePage();
    productsCheck.getBibaCount()
      .invoke("text")
      .then(($el) => {
        numberCountBIBA = $el;
        number = parseInt(numberCountBIBA.slice(1, 2));
        cy.log(typeof number);
      });
    productsCheck.getBiba().click();
    productsCheck.getProductOverlay().each(($el, index, $list) => {
      expect($list).to.have.length(number);
    });
  })
    it.only("Check ScrollButton's functionality", () =>{
      cy.openHomePage();
      cy.scrollTo("bottom");
      productsCheck.getScrollButton()
          .click()
          .scrollTo("top", { ensureScrollable: false });
      
    })
  });
