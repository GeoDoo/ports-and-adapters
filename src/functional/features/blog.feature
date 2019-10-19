Feature: Blog
  As a user I want to read a nice blog

  Scenario: Check list of blog posts
    When I navigate to the homepage
    Then I can see a list of 10 blog posts
