const { Builder, By, Key, until } = require('selenium-webdriver');

async function exampleTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navigate to login page
    await driver.get('https://shop.demoqa.com/my-account/');

    // Enter username
    await driver.findElement(By.id('username')).sendKeys('atlanttest1');

    // Enter password
    await driver.findElement(By.id('password')).sendKeys('datlantatlant123');

    // Click the login button
    await driver.findElement(By.name('login')).click();

    // Wait until the "My Account" page loads and confirm that the title is correct
    await driver.wait(until.titleIs('My Account – ToolsQA Demo Site'));

    // Print a success message to the console
    console.log('Successfully logged in and navigated to My Account page!');
    

  } finally {
    // Quit the driver
    await driver.quit();
  }
}

// Call the function to run the test
exampleTest();