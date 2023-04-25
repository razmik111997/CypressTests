import { homeAttributes } from "../Utils/data";
import { footerParts } from "../pages/Footer";
import { registerPage } from "../pages/SignUp";
describe("Footer panel", () => {
  it("Verify footer panel(home) functionality ", () => {
    registerPage.visit();
    registerPage.getHome();
    cy.url().should("include", homeAttributes.parabankindex);

    footerParts.getATMservices().should("contain", homeAttributes.ATMservices);
    footerParts
      .getWithdrawFunds()
      .should("contain", homeAttributes.withdrawFunds);
    footerParts
      .getTransferFunds()
      .should("contain", homeAttributes.transferFunds);
    footerParts
      .getCheckBalances()
      .should("contain", homeAttributes.checkBalances);
    footerParts.getMakeDeposits();
    footerParts
      .getOnlineServices()
      .should("contain", homeAttributes.onlineServices);

    footerParts.getBillPay().should("contain", homeAttributes.billPay);
    footerParts.getDay.should;
    footerParts.getDay().should("contain", homeAttributes.day);
    footerParts
      .getParaBankIsNowRe_Opened()
      .should("contain", homeAttributes.paraBankIsNowRe_Opened);
     footerParts.getNewOnlineBillPay().should(
       "contain",
       homeAttributes.newOnlineBillPay
     );
     footerParts.getNewOnlineAccountTransfers().should(
       "contain",
       homeAttributes.newOnlineAccountTransfers
     );
     });

     it("Verify footer panel(About Us) functionality ", () => {
       footerParts.visit();
       footerParts.getAboutUs();
     cy.url().should("include",homeAttributes.successAboutUs)
      });
  });

