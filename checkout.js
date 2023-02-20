const { Builder, By, Key, until } = require('selenium-webdriver');

async function checkoutOnDemoQA() {
  // create a new WebDriver instance
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // navigate to the website
    await driver.get('https://shop.demoqa.com/');

    // find the search input element and enter the search query
    let searchInput = await driver.wait(until.elementLocated(By.linkText('Search')), 5000);
    driver.findElement(By.name("s")).sendKeys('Shirt', Key.RETURN);
    await searchInput.sendKeys('shirt', Key.RETURN);

    await driver.wait(until.titleContains('Search Results'), 5000);
    let firstItemLink = await driver.findElement(By.css('.products .product:first-child a'));
    await firstItemLink.click();
    let colorDropdown = await driver.findElement(By.name('attribute_pa_color'));
    await colorDropdown.findElement(By.css(`option[value='pink']`)).click();
    let sizeDropdown = await driver.findElement(By.name('attribute_pa_size'));
    await sizeDropdown.findElement(By.css(`option[value='36']`)).click();

    let addToCartButton = await driver.findElement(By.css('.woocommerce div.product div.entry-summary form.cart .button'));
    await addToCartButton.click();

    // navigate to the checkout page
    await driver.get('https://shop.demoqa.com/checkout/');
    let firstNameInput = await driver.findElement(By.id('billing_first_name'));
    await firstNameInput.sendKeys('John');
    let lastNameInput = await driver.findElement(By.id('billing_last_name'));
    await lastNameInput.sendKeys('Doe');
    
    // unable to continue
    let countrySelect = await driver.findElement(By.id('billing_country_field'));
    await countrySelectInput.sendKeys ("Bosnia and Herzegovina");
    await countrySelect.click();
    let streetAddressInput = await driver.findElement(By.id('billing_address_1'));
    await streetAddressInput.sendKeys('123 Main St');
    let cityInput = await driver.findElement(By.id('billing_city'));
    await cityInput.sendKeys('Anytown');
    let stateInput = await driver.findElement(By.id('billing_state'));
    await stateInput.sendKeys('CA');
    let postcodeInput = await driver.findElement(By.id('billing_postcode'));
    await postcodeInput.sendKeys('12345');
    let phoneInput = await driver.findElement(By.id('billing_phone'));
    await phoneInput.sendKeys('555-1234');
    let emailInput = await driver.findElement(By.id('billing_email'));
    await emailInput.sendKeys('johndoe@example.com');
    let placeOrderButton = await driver.findElement(By.id('place_order'));
    await placeOrderButton.click();

    // wait for the order confirmation page to load and print the order number
    await driver.wait(until.titleContains('Order received'), 5000);
    let orderNumber = await driver.findElement(By.css('.woocommerce-order-overview__order strong'));
    console.log('Order number:', await orderNumber.getText());
  } finally {
    // quit the browser session
    await driver.quit();
  }
}

checkoutOnDemoQA();
