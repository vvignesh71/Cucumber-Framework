package StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginStepDefinition {
	
	
	 WebDriver driver;
	 

	 @Given("^User is already on login screen$")
	 
	 public void user_is_already_on_login_screen() throws Throwable {
		   
		 System.setProperty("webdriver.chrome.driver","C:\\Users\\Lenovo\\Downloads\\chromedriver.exe");
		 driver = new ChromeDriver();
		
		 driver.get("https://www.freecrm.com/index.html");
		}
	 
	 
	 @Then("^User checks for title of login screen$")
	 public void user_checks_for_title_of_login_screen() throws Throwable {
		 String title = driver.getTitle();
     	 System.out.println("Title of the Page is " + title);
		 Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
		    
		}

	 @Then("^User enters \"(.*)\" and \"(.*)\"$")
	 public void user_enters_the_username_and_password(String username,String password)  {
		
			 driver.findElement(By.name("username")).sendKeys(username);
			 driver.findElement(By.name("password")).sendKeys(password);
	 }
	 
	 
	 @Then("^clicks on Login Button$")
	 public void clicks_on_Login_Button()  {
		 WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
				 JavascriptExecutor js = (JavascriptExecutor)driver;
				 js.executeScript("arguments[0].click();", loginBtn);
	 }
	 
	 @Then("^user is now on home page$")
	 public void user_is_now_on_home_page()  {
		 String title = driver.getTitle();
		 System.out.println("Home Page title ::"+ title);
		 Assert.assertEquals("CRMPRO", title);
	     
	 } 
	 @Then("^user close the browser$")
	 public void user_close_the_browser()  {
	    
		 driver.quit();
	     
	 } 
}
