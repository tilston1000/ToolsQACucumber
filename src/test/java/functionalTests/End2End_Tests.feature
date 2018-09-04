Feature: Automated End2End Tests
Description: The purpose of this feature is to test End 2 End integration

Scenario Outline: Customer places an order by purchasing an item from search
	Given user is on the home page
	When they search for "dress"
	And choose to buy the first item
	And moves to checkout from mini cart
	And enters "<customer>" personal details on the checkout page
	And selects the same delivery address
	And places the order
Examples:
	|customer|
	|Andy	 |
	