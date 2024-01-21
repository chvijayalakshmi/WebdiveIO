#  Basic Functionality of Amazon Web Application

This repository contains test cases for Amazon web application using the **WebDriverIO** JavaScript framework.

### Prerequisites

- Node.js (v21.5.0) installed on your machine

### How to run the test

  1. Clone this git repository and navigate into the cloned repository.
  2. To install the dependencies, run the following command:

     ```bash
     npm install
     ```

  3. To execute the tests, run the following command. This will trigger the tests using the configured test runner.

     ```bash
     npm run wdio
     ```

### Configuration

    The configuration for WebDriverIO is located in the `wdio.conf.js` file. Adjust the configuration based on your needs.

### Folder Structure

    `test/specs`: Contains the test files.
    `test/pageobjects`: Contains page objects used in the tests.

### Additional Notes

    Update the browser capabilities in the configuration file for cross-browser testing.
    Extend and customize the `wdio.conf.js` file for specific requirements.
    Ensure that the WebDriver version matches the browser versions installed on your machine.

### Built With

    WebDriverIO - WebDriver bindings for Node.js.
    Mocha - Test framework.
    
# Project Summary Report

### Approach:
Technology Stack:
Test Automation Framework: WebDriverIO with Mocha.
Test Runner: Built-in WDIO test runner.
Page Object Pattern: Utilized for better code organization and maintenance.

Test Scenario:
Focused on the login functionality, add to cart, delete fom cart.

Test Data:
If captch occurs we have to enter manually.
Parallel Execution:
Implemented parallel execution to save time and resources.
Leverage WebDriverIO's capability for parallel test execution.

### Challenges
Implemented waits with timeouts in order to avoid flaky test
Implementing accessibility test

### Improvements
Implementation of cross browser testing
