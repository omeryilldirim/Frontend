let cart = JSON.parse(localStorage.getItem("cart")) || [];

// get plus buttons
const buttonsPlus = document.querySelectorAll("#btn-plus")

// add increase event for every plus button
buttonsPlus.forEach((btn)=> btn.addEventListener("click", increaseQuantity))

// get minus buttons
const buttonsMinus = document.querySelectorAll("#btn-minus")

// add decrease event for every plus button
buttonsMinus.forEach((btn)=> btn.addEventListener("click", decreaseQuantity))


function decreaseQuantity (e) {
    //get item quantity number
    const itemQty = e.target.nextElementSibling
    itemQty.innerText > 1 && (itemQty.innerText = itemQty.innerText - 1)
    //get item price for 1pcs
    const itemPrice = +itemQty.parentNode.previousElementSibling.firstChild.innerHTML.substr(1)
    //calculate item total price
    const itemTotalPrice = itemQty.parentNode.nextElementSibling.nextElementSibling.lastChild
    //update item total price
    itemTotalPrice.innerHTML = `$${(itemPrice * +itemQty.innerText).toFixed(2)}`
}

function increaseQuantity (e) {
    //get item quantity number
    const itemQty = e.target.previousElementSibling
    itemQty.innerText = +itemQty.innerText + 1
     //get item price for 1pcs
    const itemPrice = +itemQty.parentNode.previousElementSibling.firstChild.innerHTML.substr(1)
    //calculate item total price
    const itemTotalPrice = itemQty.parentNode.nextElementSibling.nextElementSibling.lastChild
     //update item total price
    itemTotalPrice.innerHTML = `$${(itemPrice * +itemQty.innerText).toFixed(2)}`    
}


// load event vs DomContentLoaded
// window.addEventListener("load", () => {
//     getItemListFromLocalStorage();
//   });

