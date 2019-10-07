const SeleniumInfra = require('./selenium-chrome.js')

let x = new SeleniumInfra()

  


class Products{
    async pressDown(cakeArrow = ["1-2", "3-4"]){
        await prod.write("PRODUCTS", "id", "inputSearch")
        await x.clickElement("id", "inputSearchSubmit")

        await x.clickElement("id", "arrow-down") 
        cakeArrow[0] = x.findElementBy("css", "#productsTable > tbody > tr:nth-child(1)")
        cakeArrow[1] = x.findElementBy("css", "#productsTable > tbody > tr:nth-child(2)")
        
        if(await x.getTextFromElement("#productsTable > tbody > tr:nth-child(2) > th:nth-child(1) > div > h3", "css") == "Chocolate Cake"){
            console.log("it works")
        }
        else{
            console.log("smth gone wrong")
        }

        }

        
    async pressUp(cakeArrow = ["1-2", "3-4"]){
      await x.write("PRODUCTS", "id", "inputSearch")
      await x.clickElement("id", "inputSearchSubmit")
      await x.clickElement("id", "arrow-up") 
      cakeArrow[0] = x.findElementBy("css", "#productsTable > tbody > tr:nth-child(1)")
      cakeArrow[1] = x.findElementBy("css", "#productsTable > tbody > tr:nth-child(2)")
      
      if(await x.getTextFromElement("#productsTable > tbody > tr:nth-child(1) > th:nth-child(1) > div > h3", "css") == "Vanilla Cake"){
          console.log("it works")
      }
      else{
          console.log("smth gone wrong")
      }

      }}


      module.exports = Products