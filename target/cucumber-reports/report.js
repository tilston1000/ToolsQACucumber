$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("End2End_Tests.feature");
formatter.feature({
  "line": 1,
  "name": "Automated End2End Tests",
  "description": "Description: The purpose of this feature is to test End 2 End integration",
  "id": "automated-end2end-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Customer places an order by purchasing an item from search",
  "description": "",
  "id": "automated-end2end-tests;customer-places-an-order-by-purchasing-an-item-from-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "they search for \"dress\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "choose to buy the first item",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "moves to checkout from mini cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enters \"\u003ccustomer\u003e\" personal details on the checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "selects the same delivery address",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "places the order",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "automated-end2end-tests;customer-places-an-order-by-purchasing-an-item-from-search;",
  "rows": [
    {
      "cells": [
        "customer"
      ],
      "line": 13,
      "id": "automated-end2end-tests;customer-places-an-order-by-purchasing-an-item-from-search;;1"
    },
    {
      "cells": [
        "Andy"
      ],
      "line": 14,
      "id": "automated-end2end-tests;customer-places-an-order-by-purchasing-an-item-from-search;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3949613952,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Customer places an order by purchasing an item from search",
  "description": "",
  "id": "automated-end2end-tests;customer-places-an-order-by-purchasing-an-item-from-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "they search for \"dress\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "choose to buy the first item",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "moves to checkout from mini cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enters \"Andy\" personal details on the checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "selects the same delivery address",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "places the order",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 5665601391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dress",
      "offset": 17
    }
  ],
  "location": "HomePageSteps.they_search_for(String)"
});
formatter.result({
  "duration": 5536427247,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.choose_to_buy_the_first_item()"
});
formatter.result({
  "duration": 6078129752,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.moves_to_checkout_from_mini_cart()"
});
formatter.result({
  "duration": 10611153843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Andy",
      "offset": 8
    }
  ],
  "location": "CheckoutPageSteps.enter_personal_details_on_checkout_page(String)"
});
formatter.result({
  "duration": 11447856,
  "error_message": "java.util.NoSuchElementException: No value present\r\n\tat java.util.Optional.get(Unknown Source)\r\n\tat dataProvider.JsonDataReader.getCustomerByName(JsonDataReader.java:39)\r\n\tat stepDefinitions.CheckoutPageSteps.enter_personal_details_on_checkout_page(CheckoutPageSteps.java:21)\r\n\tat ✽.And enters \"Andy\" personal details on the checkout page(End2End_Tests.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CheckoutPageSteps.selects_the_same_delivery_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckoutPageSteps.places_the_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 663527241,
  "status": "passed"
});
});