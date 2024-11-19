Feature:Login to Sauce demo login
        Given User is at the login page
        When User enters username as '<username>' and password as '<password>'
        Then user clicks on login button 
        And User is able to successfully login to the website
        Examples:
                    |username|password|
                    |standard_user| secret_sauce|