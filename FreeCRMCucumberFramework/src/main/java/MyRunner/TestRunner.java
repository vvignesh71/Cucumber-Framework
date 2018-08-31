package MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\Lenovo\\eclipse-workspace\\FreeCRMCucumberFramework\\src\\main\\java\\Feature", //the path of the feature files
		glue={"StepDefinition"}, //the path of the step definition files
		format = {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
		monochrome = true,
		strict = true,
		dryRun = false
		)

public class TestRunner {

}
