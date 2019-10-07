const SeleniumInfra = require('./selenium-chrome.js')

let x = new SeleniumInfra()

class Store{
    constructor(url){
        url = x.getURL(url)
        }
async checkCurrentDay(){
    await x.write("STORE", "id", "inputSearch")
    await x.clickElement("id", "inputSearchSubmit")
    let d = new Date();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    d.getDayName = function() {
        return days[this.getDay()]}
    let day = d.getDayName()
    console.log(day)

    if (day == await x.getTextFromElement("//th[@style= 'color: rgb(212, 126, 21); font-weight: bold;']", "xpath" )){
               if (x.findElementBy("//th[@class='todayInfo' style='color': rgb(212, 126, 21); font-weight: bold;']", "xpath" )){

            console.log("current day and time are bold")}
            else{
                console.log("the day is bold and the time is not")
            }}
       
    else{
        console.log("day is not equal to current day")}}}


        module.exports = Store