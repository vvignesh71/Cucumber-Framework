Feature: Free CRM Login Feature

Scenario Outline: Free CRM Login Test scenario

Given User is already on login screen

Then User checks for title of login screen

Then User enters "<username>" and "<password>"

Then clicks on Login Button

Then user is now on home page

Then user close the browser



Examples:

 | username | password |
 | naveenk  | test@123 |
 |  tom     | test456  | 

