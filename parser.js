const jsdom = require("jsdom")
const { JSDOM } = jsdom;
const axios = require("axios")


const url = "https://www.xbox-now.com/en/deal-list";


let num = 2
const num1 = 3
const num2 = 5

let arr = [];


getList(url, num, num1)

function getList(params, num, number) {

  axios.get(params).then(response => {
    const doc = new JSDOM(response.data);
    const dom = doc.window.document;

    const name = dom.querySelector(`body > div.wrapper > div.content-wrapper > section.content > div:nth-child(2) > div.col-xs-12.col-lg-10 > div > div:nth-child(${num}) > div > div:nth-child(1) > a > span`).textContent.trim();

    const content = dom.querySelector(`body > div.wrapper > div.content-wrapper > section.content > div:nth-child(2) > div.col-xs-12.col-lg-10 > div > div:nth-child(${num}) > div > div:nth-child(2) > div.row > div:nth-child(3) > div:nth-child(2) > span:nth-child(2)`).textContent.trim().slice(0, -4)

    const gold = dom.querySelector(`body > div.wrapper > div.content-wrapper > section.content > div:nth-child(2) > div.col-xs-12.col-lg-10 > div > div:nth-child(${num}) > div > div:nth-child(2) > div.row > div:nth-child(1) > span`).textContent.trim().replace(/[^A-Z]/g, "")

    const region = dom.querySelector(`body > div.wrapper > div.content-wrapper > section.content > div:nth-child(2) > div.col-xs-12.col-lg-10 > div > div:nth-child(${num}) > div > div:nth-child(2) > div.row > div:nth-child(3) > span > span > span > span`).textContent.trim().substring(0, 1)


    const date = dom.querySelector(`body > div.wrapper > div.content-wrapper > section.content > div:nth-child(2) > div.col-xs-12.col-lg-10 > div > div:nth-child(${num}) > div > div:nth-child(1) > div:nth-child(${number}) > span`).textContent.trim().slice(12, 16)

    const img = dom.querySelector(`body > div.wrapper > div.content-wrapper > section.content > div:nth-child(2) > div.col-xs-12.col-lg-10 > div > div:nth-child(${num}) > div > div:nth-child(1) > div.pull-left > a > img`).getAttribute('src')

    console.log(`{ "name": "${name}","price": "${content}","region": "${region}","data": "${date}","status": "${gold}"},`);
    // ,"image": "${img}"

    arr.push(`{ "name": "${name}","price": "${content}","region": "${region}","data": "${date}","status": "${gold}"},`)
    num = num + 1
    getList(url, num, num1)
  })
    .catch(function () {
      getList(url, num, num2)
    })


}

module.exports = { arr }