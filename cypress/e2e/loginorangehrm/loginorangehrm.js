import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Given("User is at the Login page", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});
When(
  "User enters username as {string} and password as {string}",
  (username, password) => {
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
  }
);
When("User clicks on Login button", () => {
  cy.get("button[type='submit']").click();
});

Then("User is able to successfully Login to the website", () => {
  cy.get(":nth-child(2) > .oxd-main-menu-item > .oxd-text").should(
    "have.text",
    "PIM"
  );
});
