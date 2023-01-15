console.log("***** SELECTORS *****")

document.title = "❤️ DOM"

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

const myHeader = document.getElementById("header")
console.log(myHeader)

myHeader.style.color = "blue"
myHeader.style.backgroundColor = "yellow"

const button = document.getElementById("btn")
const textInput = document.getElementById("input")
button.style.backgroundColor = "black"
button.style.color = "yellow"
button.style.padding = "0.7rem"
button.style.border = "none"
button.style.borderRadius = "10px"
button.style.fontSize = "20px"
textInput.style.padding = "0.7rem"

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================
const list = document.getElementsByTagName("li")
console.log(list) //? HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]

list[0].style.color = "magenta"
list[list.length - 1].style.color = "purple"

const header = document.getElementsByTagName("header")
console.log(header[0])

console.log(list.item(3))
//! getElementsByTagName bize bir HTMLCollection(bir nevi dizi) dondurur.

//! Icerik degistirme (textContent, innerText, innerHTML)
// list[3].textContent = "REACT / VUE"
// list[3].innerText = "REACT / VUE / Swelte"
list[3].innerHTML = "REACT / VUE / Swelte / Angular"

console.log(list[2].textContent) //? Javascript - JS is an object-based language
//? textContent HTML elementinin tum yazi dugumlerini CSS veya HTML 'e bakmasizin verir.

console.log(list[2].innerText) //? innerText CSS parse islemi yaparak yazi elementi dondurur.

console.log(list[2].innerHTML) //? innerHTML tamamen HTML parse islemi yaparak elementlere ulasmamizi saglar

list[4].innerHTML += `<li><a class="link" href="https://www.clarusway.com">CW</a></li>`

//? HTML kodlarini calistirir. (Guvenlik acisindan problemli)

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const itemList = document.getElementsByClassName("list")
console.log(itemList) //?HTMLCollection [section.item-list]
console.log(itemList)

//? Array.from() (HTMLCollection -> Array)
const itemListArr = Array.from(itemList)
console.log(...itemList)
itemListArr.forEach((x) => console.log(x))

//? SPREAD (HTMLCollection -> Array)
const itemListSpread = [...itemList]
console.log(itemListSpread)
itemListSpread.map((x) => console.log((x.style.color = "red")))
//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//? 1- queryselector() etiket secebilir.
const myLi = document.querySelector("li") //? Tag
console.log(myLi)
myLi.style.color = "purple"

//? 2- queryselector() class secebilir.
const addItem = document.querySelector(".add-item")
console.log(addItem)
addItem.style.border = "3px solid grey"

//? 3- queryselector() id secebilir.
const addBtn = document.querySelector("#btn")
console.log(addBtn)
addBtn.style.cursor = "pointer"

//? 4- queryselector() ile CSS deki gibi secim yapilabilir.
const itemH2 = document.querySelector(".item-list h2")
console.log(itemH2)

const addBtnType = document.querySelector("input[type='button']")
console.log(addBtnType.value)

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
const lists = document.querySelectorAll("ul li") //? tagname
console.log(lists) //? Nodelist

lists.forEach((li) => console.log(li.innerText))

console.log(
  document.querySelectorAll("section.item-list ul li:nth-child(4)")[0].innerText
)

console.log(
  document.querySelector("section.item-list ul li:nth-child(4)").innerText
)

document.querySelector("section.item-list ul li:nth-child(4)").innerHTML =
  "<p>Paragraf</p>"
