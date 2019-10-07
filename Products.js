const SeleniumInfra = require('./selenium-chrome.js')

let x = new SeleniumInfra()


  


class Products{
    constructor(url){
        url = x.getURL(url)
        }
    async pressDown(cakeArrow = ["Choco", "Vanilla"]){
        await x.write("PRODUCTS", "id", "inputSearch")
        await x.clickElement("id", "inputSearchSubmit")
        cakeArrow[0] = x.findElementBy("css", "#productsTable > tbody > tr:nth-child(1)")//choco
        cakeArrow[1] = x.findElementBy("css", "#productsTable > tbody > tr:nth-child(2)") // vanilla    
        await x.clickElement("id", "arrow-down") 
 
        if(await x.findElementBy("#productsTable > tbody > tr:nth-child(2) > th:nth-child(1)", "css") !== cakeArrow[1]){
            console.log("it works")
        }
        else{
            console.log("smth gone wrong")
        }

        }


    async pressUp(cakeArrow = ["Choco", "Vanilla"]){

      await x.write("PRODUCTS", "id", "inputSearch")
      await x.clickElement("id", "inputSearchSubmit")
      cakeArrow[0] = x.getTextFromElement("#productsTable > tbody > tr:nth-child(1) > th:nth-child(1) > div > h3", "css") //choco
      cakeArrow[1] = x.getTextFromElement("#productsTable > tbody > tr:nth-child(2) > th:nth-child(1) > div > h3", "css") //vanill
      await x.clickElement("id", "arrow-up")       
      if(await x.getTextFromElement("#productsTable > tbody > tr:nth-child(1) > th:nth-child(1) > div > h3", "css") !== cakeArrow[0]) {
          console.log("it works")
      }

      else{
          console.log("smth gone wrong")
      }

      }}


      module.exports = Products