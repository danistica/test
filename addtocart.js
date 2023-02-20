const { Builder, By, Key, until } = require('selenium-webdriver');

async function searchOnDemoQA() {
  // create a new WebDriver instance
  let driver = await new Builder().forBrowser('chrome').build();
  
  try {
    // navigate to the website
    await driver.get('https://shop.demoqa.com/');
    
    // find the search input element and enter the search query
    
    let searchInput = await driver.wait(until.elementLocated(By.linkText('Search')), 5000);
    driver.findElement(By.name("s")).sendKeys('Shirt',Key.RETURN);
    await searchInput.sendKeys('shirt', Key.RETURN);
    
    // wait for the search results page to load and print the page title
    await driver.wait(until.titleContains('Search Results'), 5000);
    let firstItemLink = await driver.findElement(By.css('.products .product:first-child a'));
    await firstItemLink.click();
    let colorDropdown = await driver.findElement(By.name('attribute_pa_color'));
    await colorDropdown.findElement(By.css(`option[value='pink']`)).click();
    let sizeDropdown = await driver.findElement(By.name('attribute_pa_size'));
    await sizeDropdown.findElement(By.css(`option[value='36']`)).click();

    let addToCartButton = await driver.findElement(By.css('.woocommerce div.product div.entry-summary form.cart .button'));
    await addToCartButton.click();

    await driver.wait(until.elementLocated(By.css('.woocommerce-message')), 5000);
    let cartTotal = await driver.findElement(By.css('.woocommerce-message'));
    console.log(await cartTotal.getText());
  
  } finally {
    // quit the browser session
    await driver.quit();

  
  }
}

searchOnDemoQA();