import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../../pageobject/HomePage";

beforeEach(() => {
  cy.viewport(1600, 720);
});

Given("I navigate to the website", () => {
  homePage.enterURL();
});

Then("Validate the menu in home page", (datatable) => {
  datatable.hashes().forEach((element) => {
    homePage.validateMenus(element.menu_name);
  });
});

Then("Validate the title after login", (datatable) => {
  datatable.hashes().forEach((element) => {
    homePage.verifyPageTitle(element.title);
  });
});
