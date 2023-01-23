const taxRate = 0.18
const shippingPrice = 15.0
const shippingFreePrice = 300

window.addEventListener("load", ()=>{
    localStorage.setItem("taxRate", taxRate)
    localStorage.setItem("shippingPrice", shippingPrice)
    localStorage.setItem("shippingFreePrice",shippingFreePrice)
    calculateCartPrice()
})

const productsDiv = document.querySelector(".products")

//Capturing ==> Static parent -------> Children
productsDiv.addEventListener("click", (e)=>{
    //e.target vs e.currentTarget
    // alert(e.target.tagName)
    // alert(e.currentTarget.tagName)
    if(e.target.className == "fa-solid fa-minus"){
        // alert("minus clicked")
        if(e.target.nextElementSibling.innerText > 1){
            e.target.nextElementSibling.innerText--
            calculateProductPrice(e.target)
        } 
        else{
            //innerText vs textContext(whitespaces)
            if(confirm(`Are you sure to remove ${e.target.closest(".product-info").querySelector("h2").innerText} from your cart?`)){
                e.target.closest(".product").remove()
            }
        }
        
        calculateCartPrice()
    }
    else if(e.target.classList.contains("fa-plus")){
        // alert("plus clicked")
        e.target.parentElement.querySelector(".quantity").innerText++
        calculateProductPrice(e.target)
        calculateCartPrice()
    }
    else if(e.target.getAttribute("class") == "remove-product"){
        // alert("remove clicked")
        if(confirm(`Are you sure to remove ${e.target.closest(".product-info").querySelector("h2").innerText} from your cart?`)){
            e.target.closest(".product").remove()
        }
        calculateCartPrice()
    } else {
        alert("other element clicked")
    }
})

const calculateProductPrice = (target) =>{
    //each product total calculation
    //productTotalPrice => quantity * price
    const productInfoDiv = target.closest(".product-info")
    //unit price
    //div.class vs .class ? which one is faster
    const price = productInfoDiv.querySelector("div.product-price strong").innerText
    //quantity
    const quantity = productInfoDiv.querySelector("p.quantity").innerText
    productInfoDiv.querySelector("div.product-line-price").innerText = (price * quantity).toFixed(2)
}

const calculateCartPrice = ()=>{
    //cart total calculation
    //NodeList
    const productLinePriceDivs = document.querySelectorAll("div.product-line-price")

    //! reduce vs forEach
    let subtotal = 0
    //FOREACH => array + nodeList
    productLinePriceDivs.forEach(div=>{
        subtotal += parseFloat(div.innerText)
    })
    const taxPrice = subtotal * localStorage.getItem("taxRate")

    const shippingPrice = parseFloat(subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice") ? 
    localStorage.getItem("shippingPrice") : 0)

    const totalPrice = subtotal + taxPrice + shippingPrice

    document.querySelector("#cart-subtotal").lastElementChild.innerText = subtotal.toFixed(2)
    document.getElementById("cart-tax").children[1].innerText = taxPrice.toFixed(2)
    document.querySelector("#cart-shipping p:nth-child(2)").innerText = shippingPrice
    document.querySelector("#cart-total p:last-child").innerText = totalPrice.toFixed(2)

}