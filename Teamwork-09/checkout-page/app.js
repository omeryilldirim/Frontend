item1Obj = {id:"product1", name:"bag", price:25.98, qty:1, subtotal:45.99}
item2Obj = {id:"product2", name:"shoes", price:45.99, qty:1, subtotal:45.99}
item3Obj = {id:"product3", name:"clock", price:74.99, qty:1, subtotal:74.99}


localStorage.setItem("item1", JSON.stringify(item1Obj))
localStorage.setItem("item2", JSON.stringify(item2Obj))
localStorage.setItem("item3", JSON.stringify(item3Obj))




// get plus buttons
const buttonsPlus = document.querySelectorAll("#btn-plus")

// add increase event for every plus button
buttonsPlus.forEach((btn)=> btn.addEventListener("click", increaseQuantity,))

// get minus buttons
const buttonsMinus = document.querySelectorAll("#btn-minus")

// add decrease event for every plus button
buttonsMinus.forEach((btn)=> btn.addEventListener("click", decreaseQuantity))

// get remove buttons
const buttonsRemove = document.querySelectorAll(".btn-remove")

//add event to remove buttons
buttonsRemove.forEach(btn=>btn.addEventListener("click", removeItem))



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
    const newPrice = Number((itemPrice * +itemQty.innerText).toFixed(2))
    //update item total price
    itemTotalPrice.innerHTML = `$${newPrice}`
    // update local storage subtotal
    //get which item is revised
    const item = e.target.closest("section").getAttribute("class")
    //get the value from local storage
    let storageObj  = (JSON.parse(localStorage.getItem(item)))
    //change the subtotal
    storageObj.subtotal = newPrice
    //send back to local storage
    localStorage.setItem(item, JSON.stringify(storageObj))
    //update cart subtotal
    updatePayment()
}

function increaseQuantity (e) {
    //get item quantity number
    const itemQty = e.target.previousElementSibling
    itemQty.innerText = +itemQty.innerText + 1
    //get item price for 1pcs
    const itemPrice = +itemQty.parentNode.previousElementSibling.firstChild.innerHTML.substr(1)
    //calculate item total price
    const itemTotalPrice = itemQty.parentNode.nextElementSibling.nextElementSibling.lastChild
    const newPrice = Number((itemPrice * +itemQty.innerText).toFixed(2))
    //update item total price
    itemTotalPrice.innerHTML = `$${newPrice}`
    // update local storage subtotal
    //get which item is revised
    const item = e.target.closest("section").getAttribute("class")
    //get the value from local storage
    let storageObj  = (JSON.parse(localStorage.getItem(item)))
    //change the subtotal
    storageObj.subtotal = newPrice
    //send back to local storage
    localStorage.setItem(item, JSON.stringify(storageObj))
    //update cart subtotal
    updatePayment()
}

function updatePayment(){
    const shippingPrice = 15
    // get subtotal element
    const subtotalEl = document.querySelector(".subtotal span:nth-child(2)")
    // add 3 items prices
    let subtotalPrice = 0
    for (let i = 1; i < 4; i++) {
        subtotalPrice += JSON.parse(localStorage.getItem(`item${i}`)).subtotal
    }
    // assign subtotal to dom
    subtotalEl.innerText = `$${subtotalPrice.toFixed(2)}`
    // get tax element
    const taxEl = document.querySelector(".tax span:nth-child(2)")
    // assign tax price to dom
    const taxPrice = (subtotalPrice * 0.18)
    taxEl.innerText = `$${taxPrice.toFixed(2)}`
    // get total element
    const totalEl = document.querySelector(".total span:nth-child(2)")
    // assign totalPrice to dom
    totalEl.innerText = `$${(subtotalPrice+taxPrice+shippingPrice).toFixed(2)}`
}

// load event vs DomContentLoaded
// window.addEventListener("load", () => {
//     getItemListFromLocalStorage();
//   });