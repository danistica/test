const { Builder, By, Key, until } = require('selenium-webdriver');

(async function() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://shop.demoqa.com/shop/');
    
    // Navigate to the product page
    await driver.get('https://shop.demoqa.com/product/black-cross-back-maxi-dress/');

    // Select the color and size options
    let colorDropdown = await driver.findElement(By.name('attribute_pa_color'));
    await colorDropdown.findElement(By.css(`option[value='black']`)).click();
    let sizeDropdown = await driver.findElement(By.name('attribute_pa_size'));
    await sizeDropdown.findElement(By.css(`option[value='medium']`)).click();
    console.log("Successfully added color and size");
  } finally {
    await driver.quit();
  }
})();