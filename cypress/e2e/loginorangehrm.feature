Feature: Login
    Scenario Outline: Login to Orange HRM website
             Given User is at the Login page
             When User enters username as '<username>' and password as '<password>'
             And User clicks on Login button
             Then User is able to successfully Login to the website
             Examples:
                     |username |password
                     |Admin    |admin123
                     