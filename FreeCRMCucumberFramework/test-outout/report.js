$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Login Test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User checks for title of login screen",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is now on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 22,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "test456"
      ],
      "line": 23,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Free CRM Login Test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User checks for title of login screen",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is now on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_screen()"
});
formatter.result({
  "duration": 14750177319,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_checks_for_title_of_login_screen()"
});
formatter.result({
  "duration": 235407590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 732847338,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clicks_on_Login_Button()"
});
formatter.result({
  "duration": 5931359102,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_now_on_home_page()"
});
formatter.result({
  "duration": 46472935,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_close_the_browser()"
});
formatter.result({
  "duration": 928440431,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Free CRM Login Test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User checks for title of login screen",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters \"tom\" and \"test456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is now on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_screen()"
});
formatter.result({
  "duration": 8055068510,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_checks_for_title_of_login_screen()"
});
formatter.result({
  "duration": 41710580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "test456",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinition.user_enters_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 894722570,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clicks_on_Login_Button()"
});
formatter.result({
  "duration": 1976800806,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_now_on_home_page()"
});
formatter.result({
  "duration": 156794161,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefinition.LoginStepDefinition.user_is_now_on_home_page(LoginStepDefinition.java:57)\r\n\tat ✽.Then user is now on home page(login.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});