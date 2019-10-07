const SeleniumInfra = require('./selenium-chrome.js')

let x = new SeleniumInfra()
  

class Contact{
async visitUs(){
    await x.clickElement("css", "#boxMiddle > a > button")
    if(!await x.urlValidation("store.html")){

        console.log("YES")
    }
    else{
        console.log("oops...")
    }

    }


async contactUs(namestr = "Vasya", emailstr = "vasya@vasya", phonestr = "12345890", messagestr= "Vasya Vasya"){
await x.write("CONTACT", "id", "inputSearch")
await x.clickElement("id", "inputSearchSubmit")
await x.write(namestr,"css", "#inputText")
console.log("I wrote in name")
await x.write(emailstr,"name", "email" )
console.log("I wrote in email")
await x.write(phonestr, "name", "phone")
console.log("I wrote in phone")
await x.write(messagestr, "css", "#boxMainFormContact > form > textarea")
console.log("I wrote in message")
if(emailstr.includes("@", ".com")){
    console.log("email is ok")
}
else{
    console.log("its not an email")
}
if(phonestr.length < 9){
    console.log("its not a phone number")
}
else{
    console.log("this is phone number")
}
}}

module.exports = Contact