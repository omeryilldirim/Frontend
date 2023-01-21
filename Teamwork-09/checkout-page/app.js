

item1Obj = {id:"product1", name:"bag", price:25.98, qty:1, subtotal:45.99}
item2Obj = {id:"product2", name:"bag", price:45.99, qty:1, subtotal:45.99}
item3Obj = {id:"product3", name:"bag", price:74.99, qty:1, subtotal:74.99}


localStorage.setItem("item1", JSON.stringify(item1Obj))
localStorage.setItem("item2", JSON.stringify(item2Obj))
localStorage.setItem("item3", JSON.stringify(item3Obj))







// get plus buttons
const buttonsPlus = document.querySelectorAll("#btn-plus")

// add increase event for every plus button
buttonsPlus.forEach((btn)=> btn.addEventListener("click", increaseQuantity))

// get minus buttons
const buttonsMinus = document.querySelectorAll("#btn-minus")

// add decrease event for every plus button
buttonsMinus.forEach((btn)=> btn.addEventListener("click", decreaseQuantity))

// get remove buttons
const buttonsRemove = document.querySelectorAll(".btn-remove")

//add event to remove buttons
buttonsRemove.forEach(btn=>btn.addEventListener("click", removeItem))


function updateSubtotal(){
    let subtotal = document.querySelector(".subtotal span:nth-child(2)").innerText

}





function removeItem (e){
    const product = e.target.closest("section")
    product.style.display = "none"
}

function decreaseQuantity (e) {
    //get item quantity number
    const itemQty = e.target.nextElementSibling
    itemQty.innerText > 1 && (itemQty.innerText = itemQty.innerText - 1)
    //get item price for 1pcs
    const itemPrice = +itemQty.parentNode.previousElementSibling.firstChild.innerHTML.substr(1)
    //calculate item total price
    const itemTotalPrice = itemQty.parentNode.nextElementSibling.nextElementSibling.lastChild
    const newPrice = (itemPrice * +itemQty.innerText).toFixed(2)
    //update item total price
    itemTotalPrice.innerHTML = `$${newPrice}`
    // update local storage subtotal
    const item = e.target.closest("section").getAttribute("class")
    let storageObj  = (JSON.parse(localStorage.getItem(item)))
    storageObj.subtotal = newPrice
    localStorage.setItem(item, JSON.stringify(storageObj)) 
}

function increaseQuantity (e) {
    //get item quantity number
    const itemQty = e.target.previousElementSibling
    itemQty.innerText = +itemQty.innerText + 1
     //get item price for 1pcs
    const itemPrice = +itemQty.parentNode.previousElementSibling.firstChild.innerHTML.substr(1)
    //calculate item total price
    const itemTotalPrice = itemQty.parentNode.nextElementSibling.nextElementSibling.lastChild
    const newPrice = (itemPrice * +itemQty.innerText).toFixed(2)
    //update item total price
    itemTotalPrice.innerHTML = `$${newPrice}`
    // update local storage subtotal
    const item = e.target.closest("section").getAttribute("class")
    let storageObj  = (JSON.parse(localStorage.getItem(item)))
    storageObj.subtotal = newPrice
    localStorage.setItem(item, JSON.stringify(storageObj)) 
}


// load event vs DomContentLoaded
// window.addEventListener("load", () => {
//     getItemListFromLocalStorage();
//   });

