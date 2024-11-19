Feature: open Google
Scenario: User opens the Google homepage
Given the User opens the Google homepage
When the User navigates to the images button
When the User click on search bar
Then the Url of the page should be "https://www.google.com/imghp?h1=en&ogbl"