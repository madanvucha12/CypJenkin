import { Given, When, Then, And } from "badeball-cypress-cucumber-preprocessor";
Given("User is at the login page", () => {
  cy.visit("https://www.saucedemo.com/");
});
When(
  "User enters username as '<username>' and password as '<password>'",
  (username, password) => {
    cy.get("input[placeholder='Username']").type("standard_user");
    cy.get("input[placeholder='Password']").type("secret_sauce");
  }
);
Then("user clicks on login button ", () => {
  cy.get("button[type='submit']").click();
});

And("User is able to successfully login to the website", () => {
  cy.get("//span[@class='title']").should("have.text", "Products");
});
