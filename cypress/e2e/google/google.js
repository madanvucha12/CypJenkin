import { Given, When, Then ,And} from "@badeball/cypress-cucumber-preprocessor";
Given("the User opens the Google homepage", () => {
  cy.visit("https://www.google.com");
});
// When step: Navigate to the Google website
When("the User navigates to the images button", () => {
  cy.get("a[aria-label='Search for Images ']").click();
});
// Then step: Verify Google homepage elements
When("the User click on search bar", () => {
  // Assert that the search bar and Google logo elements are visible
  cy.get('textarea[name="q"]').click();
});
// And step: Verify the URL of the page
Then("the Url of the page should be {string}", (link) => {
  cy.url().should("eq", link);
});