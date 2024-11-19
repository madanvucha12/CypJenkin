class HomePage {
  enterURL() {
    cy.visit("https://qaautomationlabs.com/");
  }
  validateMenus(menus) {
    cy.contains(menus);
    return this;
  }
  verifyPageTitle() {
    return cy.title().should("eq", "Home - QA Automation Labs");
  }
}

const homePage = new HomePage();
export default homePage;
