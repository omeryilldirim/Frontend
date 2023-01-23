const taxRate = 0.18
const shippingPrice = 15.0
const shippingFreePrice = 300

window.addEventListener("load", ()=>{
    localStorage.setItem("taxRate", taxRate)
    localStorage.setItem("shippingPrice", shippingPrice)
    localStorage.setItem("shippingFreePrice",shippingFreePrice )
})

const productsDiv = document.querySelector(".products")
//Capturing ==> Static parent -------> Children
productsDiv.addEventListener("click", (e)=>{
    //e.target vs e.currentTarget
    // alert(e.target.tagName)
    // alert(e.currentTarget.tagName)
    if(e.target.className == "fa-solid fa-minus"){
        alert("minus clicked")
    }
    else if(e.target.classList.contains("fa-plus")){
        alert("plus clicked")
    }
    else if(e.target.getAttribute("class") == "remove-product"){
        alert("remove clicked")
    } else {
        alert("other element clicked")
    }
})

const calculateProductPrice = () =>{
    //product total

}

const calculateCartPrice = ()=>{
    //cart total calculation from products
}