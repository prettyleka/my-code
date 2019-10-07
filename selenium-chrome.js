const { Builder, By, Key } = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);




class SeleniumInfra {
    constructor() {
        this.driver = new Builder().forBrowser('chrome').build();
    }


    async getURL(url) {
        await this.driver.get(url)
    }

    async close() {
        await this.driver.quit()
    }

    async clickElement(locatorType, locatorValue, element) {
        try {
            if (!element) {
                element = await this.driver.findElement(By[locatorType](locatorValue));
            }
            await element.click()
            await this.driver.sleep(5000)
            console.log(`Clicked on element with locator ${locatorValue} and locator type ${locatorType}`)
        }
        catch (error) {
            console.error(`Got error while trying to click on element with locator ${locatorValue} and locator type ${locatorType}`)
        }
    }


    async write(data, locatorType, locatorValue, element) {
        try {
            if (!element) {
                element = await this.driver.findElement(By[locatorType](locatorValue))
                await element.sendKeys(data, Key.RETURN)
            }
        }

        catch (error) {
            console.error(`Got error while trying to click on element with locator ${locatorValue} and locator type ${locatorType}`)
        }
    }


    async getTextFromElement(locatorValue, locatorType, element) {
        try {
            if (!element) {
                element = await this.driver.findElement(By[locatorType](locatorValue))
                // console.log("i'm here")
                let text = await element.getText()
                await this.driver.sleep(2000)
                    console.log(text);
                    return text
                
            
        }}

        catch (error) {
            console.error(`Got error while trying to find element with locator ${locatorValue} and locator type ${locatorType}`)
        }
    }



    async clearElementField(locatorValue, locatorType, element) {
        try {
            if (!element) {
                element = await this.driver.findElement(By[locatorType](locatorValue))
                element.clear()
            }
        }
        catch (error) {
            console.error(`Got error while trying to click on element with locator ${locatorValue} and locator type ${locatorType}`)
        }
    }


// Check if element exists
async isElementExists(locatorType , locatorValue){
    let element
    try {
        element = await this.driver.findElement(By[locatorType](locatorValue))
        return true
    }
    catch{
        return false
    }
}

    async findElementBy(locatorType, locatorValue, element) {
        try {
            if (!element) {
                element = await this.driver.findElement(By[locatorType](locatorValue)).then(function(element){
                    element.forEach(function (element) {
                        element.getText().then(function(text){
                            console.log(text)})})})
            }
                
        }

        catch (error) {
            return ("no element")
        }
    }
    // Find all the elements with the same type and value and return array(list)
    async findElementListBy(locatorType , locatorValue , fromElement){
        let element
        try{
            if(fromElement){
                element = await fromElement.findElements(By[locatorType](locatorValue))
            }
            else{
                element = await this.driver.findElements(By[locatorType](locatorValue))
            }
            return element
        }
        catch{
            console.error(`Got error while trying to find element with ${locatorType} = ${locatorValue}`)
        }
    }
            
            
            
            
            
    async urlValidation(pageName) {
        try {
            console.log(await this.driver.wait(until.urlContains(pageName), 8000))} 
        catch (error) {
            console.log(error);}
    }


}


        
module.exports = SeleniumInfra

  


