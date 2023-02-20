const { Builder, By, Key, until } = require('selenium-webdriver');

(async function registerNewUser() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the registration page
    await driver.get('https://shop.demoqa.com/my-account/');
    await driver.findElement(By.css('#reg_username')).sendKeys('atlanttest1');
    await driver.findElement(By.css('#reg_email')).sendKeys('baddwolf@gmailos.com');
    await driver.findElement(By.css('#reg_password')).sendKeys('atlantatlant1234');
    await driver.findElement(By.css('[name="register"]')).click();
    
    // Wait for the registration success message to appear
    await driver.wait(until.titleIs('My Account – ToolsQA Demo Site'));

    // Print a success message to the console
    console.log('Successfully register and navigated to My Account page!');

  } finally {
    // Close the browser
    await driver.quit();
  }
})();



