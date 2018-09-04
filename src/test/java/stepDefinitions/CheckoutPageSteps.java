package stepDefinitions;

import cucumber.TestContext;
import cucumber.api.java.en.When;
import managers.FileReaderManager;
import pageObjects.CheckoutPage;
import testDataTypes.Customer;

public class CheckoutPageSteps {
	TestContext testContext;
	CheckoutPage checkoutPage;
	
	public CheckoutPageSteps(TestContext context)
	{
		testContext = context;
		checkoutPage = testContext.getPageObjectManager().getCheckoutPage();
	}
	
	@When("^enters \"([^\"]*)\" personal details on the checkout page$")
	public void enter_personal_details_on_checkout_page(String customerName){
		Customer customer = FileReaderManager.getInstance().getJsonReader().getCustomerByName(customerName);
		checkoutPage.fill_PersonalDetails(customer);	
	}

	@When("^selects the same delivery address$")
	public void selects_the_same_delivery_address() throws InterruptedException {
		checkoutPage.check_ShipToDifferentAddress(false);
	}

	@When("^places the order$")
	public void places_the_order() throws Throwable {
		checkoutPage.check_TermsAndCondition(true);
		checkoutPage.clickOn_PlaceOrder();
	}

}
