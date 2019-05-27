Feature: Search 

Scenario Outline: Searching > Smart TV

  Given I open Walmart`s search page
  When I entered for search "<search>"
  And I selected an item "<item>"
  And I clicked Add to cart
  And I clicked Checkout 
  Then I should see the item in shopping cart "<result>"
  Examples:
  | search            | item                                          | result |
  | samsung smart tv  | Samsung Curved UHD 4K Smart TV UN55NU7300FXZC | 1      |
