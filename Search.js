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
    console.log(await driver.getTitle());
  } finally {
    // quit the browser session
    await driver.quit();
  }
}

searchOnDemoQA();