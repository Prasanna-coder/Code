Feature: The Saucedemo Website automation

  Scenario Outline: As I am Automation Engineer, I should automate if

    Given If I am currently in login page
    When I will pass <username>, <password>
    Then I want to see home page
    And I click on element"//button[@id='add-to-cart-sauce-labs-backpack']"
    And I click on element"//*[@class='shopping_cart_link']"
    And I click on element"//button[@id='checkout']"
    Then I will enter data and validate
    Then I want to logout

    Examples:
      | username                | password     | 
      | standard_user           | secret_sauce |
