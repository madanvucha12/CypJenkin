Feature: Home page
    Background:
      Given I navigate to the website
    Scenario: I want to verify content in Home page
           Then Validate the menu in home page
           | menu_name |
           | Home |
           | Blog |
           | Contacts |
 
    Scenario: I want to validate title of home page
       Then Validate the title after login
       | title |
       | About Us - QAAutomationLabs |