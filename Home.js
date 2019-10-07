const SeleniumInfra = require('./selenium-chrome.js')

let x = new SeleniumInfra()
  

    class HomePage{
      constructor(url){
          url = x.getURL(url)
          }

      async  search(str){
          x.write(str, "id", "inputSearch")
          // press button

          try{
              if(str === "HOME"){
              await x.clickElement("id", "inputSearchSubmit")
              if(! await x.urlValidation("home.html"))
                  console.log("you are at Home")}
              if(str === "ABOUT"){ 
              await x.clickElement("id", "inputSearchSubmit")
              if(! await x.urlValidation("about.html"))
                  console.log("you are at about")}

              if(str === "PRODUCTS"){
              await x.clickElement("id", "inputSearchSubmit")          
              if(! await x.urlValidation("products.html"))
                  console.log("you are at products")}

              if(str === "CONTACT"){
              await x.clickElement("id", "inputSearchSubmit")          
              if(! await x.urlValidation("contact.html"))
                  console.log("you are at contact")}

              if(str === "STORE"){
              await x.clickElement("id", "inputSearchSubmit")      
              if(! await x.urlValidation("store.html"))
                  console.log("you are at store")}

              if(str !== "STORE"){
                if(str !=="PRODUCTS"){
                    if(str !=="ABOUT"){
                        if(str !== "HOME"){

                  console.log("oops,wrong text")}}}}

              if(str === ""){  
                  console.log("oops,מothing in input")}    }
                      
              catch{
                  console.log("get error in")}}
              




      async advancedSearch(arr =["Chocolate", "Cheese", "Mousse"], rate = [0-3,4,5], date = "09/23/2019", str2 = "black cat went to walk", str3 = "cat" ){
          await x.clickElement("id", "myBtn")

          //type of cake
          let y = await x.getTextFromElement("#modalBodyFormId > div:nth-child(1) > label", "css")
          if(y = arr[0] || arr[1] || arr[2]){
          await x.clickElement("css", "#modalBodyFormId > div:nth-child(1) > input:nth-child(2)")
              console.log("I clicked on choco")
          await x.clickElement("css", "#modalBodyFormId > div:nth-child(1) > input:nth-child(4)")
              console.log("I clicked on cheese")
          await x.clickElement("css", "#modalBodyFormId > div:nth-child(1) > input:nth-child(6)")
              console.log("I clicked on mousse")}
          else{
              console.log("arr is not validate")}
         


            //rating  
          let r = await x.getTextFromElement("#modalBodyFormId > div:nth-child(2) > label", "css")
          if(r = rate[0] || rate[1] || rate[2]){
          await x.clickElement("css", "#modalBodyFormId > div:nth-child(2) > input:nth-child(2)")
              console.log("I clicked on 0-3")
          await x.clickElement("css", "#modalBodyFormId > div:nth-child(2) > input:nth-child(4)")
              console.log("I clicked on 4")
          await x.clickElement("css", "#modalBodyFormId > div:nth-child(2) > input:nth-child(6)")
              console.log("I clicked on 5")}


              //date
          await x.write("09/23/2019", "css", "#modalBodyFormId > div:nth-child(3) > input")
          let d = await x.getTextFromElement("#modalBodyFormId > div:nth-child(3) > input", "css")
          if(d = date){
              console.log("date is valid")}
              else{
                  console.log("date is not valid")}


          //input1 - text              
          await x.write(str2, "css", "#input1")
          let w = await x.getTextFromElement("#input1", "css")
          if(w = str2){
              console.log("good black cat")}
          else{
              console.log("text is not valid")}


          //input2 - word
          await x.write(str3, "css", "#input2")
          let t = await x.getTextFromElement("#input2", "css")
          if(t = str3){
              console.log("good cat")}
          else{
              console.log("text is not valid")}
          
          //search btm
          await x.clickElement("id", "myBtnForm")
          
          }}






  



module.exports = HomePage