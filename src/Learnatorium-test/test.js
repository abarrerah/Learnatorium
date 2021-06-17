const {Builder,By,Key,util}= require("selenium-webdriver");
require("chromedriver");

async function example(){
    let driver= await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.google.es");
    await driver.navigate().to("http://localhost:3000");
    await driver.findElement(By.id("loginIcon")).click();
    await driver.findElement(By.id("registerButton")).click();
    
    await driver.findElement(By.xpath("//input[@id='inputRegister inputRegister1']")).sendKeys("abrahambarrerah1999@gmail.com");
    await driver.findElement(By.xpath("//input[@id='inputRegister inputRegister2']")).sendKeys("abrahambh1999");
    await driver.findElement(By.xpath("//input[@id='inputRegister inputRegister3']")).sendKeys("tbuo6kyppm86tT");
    await driver.findElement(By.xpath("//input[@id='inputRegister inputRegister4']")).sendKeys("tbuo6kyppm86tT");
    await driver.findElement(By.xpath("//input[@id='buttonsRegister buttonsRegister1']")).click();


}

example();