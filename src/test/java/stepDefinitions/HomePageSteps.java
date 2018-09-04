package stepDefinitions;

import cucumber.TestContext;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import pageObjects.HomePage;

public class HomePageSteps {
	TestContext testContext;
	HomePage homePage;
	
	public HomePageSteps(TestContext context)
	{
		testContext = context;
		homePage = testContext.getPageObjectManager().getHomePage();
	}
	
	
	@Given("^user is on the home page$")
	public void user_is_on_the_home_page(){
		homePage.navigateTo_HomePage();
	}
	
	@When("^they search for \"([^\"]*)\"$")
	public void they_search_for(String product){
		homePage.perform_Search(product);
	}

}
