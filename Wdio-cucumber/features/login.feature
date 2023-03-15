Feature: The Dummy Automating Website

  Scenario Outline: As I am a Autmation Engineer, Can I go into the secure area if

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a title heading saying <heading>
    And sleep
    And I open new window

    Examples:
      | username                | password     | heading  |
      | standard_user           | secret_sauce | Products |
      | performance_glitch_user | secret_sauce | Products |