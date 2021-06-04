const {Builder,By,Key,util}= require("selenium-webdriver");
require("chromedriver");

async function example(){
    let driver= await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.google.es");
    await driver.navigate().to("http://localhost:3000")


 
}

example();