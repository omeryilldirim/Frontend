//write less, do more
//open source, small, cross-browser,easy ==> library
//easy for dom access, animation(best), ajax 

const formJs = document.querySelectorAll("form")
console.log(formJs);

//? const formJQ = jQuery("form")
// const formJQtoJS = $("form")[0] 
// this converts jquery object to js object and then we cannot use jquery object methods
// console.log(formJQtoJS);

// selectors => eq, th, odd, even (js + jquery)

// console.log($(formJS)); convert js to jquery
const formJQ = $("form").eq(0) // .on("submit")
console.log(formJQ);
const inputJQ = $("input")
const msgJQ = $(".msg")
const listJQ = $(".ajax-section .cities")




//? JS load event
// window.addEventListener("load", ()=>console.log("js loaded"))
//? JQUERY load event
// $(window).on("load", ()=>console.log("jquery loaded"))
// onload, onclick => js + jquery

//? js DomContentLoaded
// document.addEventListener("DOMContentLoaded", ()=>console.log("Dom is ready"))
//? jquery DomContentLoaded
//$(document).on("DOMContentLoaded", ()=>console.log("jQuery Dom is ready"))
$(document).ready(()=>{
    console.log("jQuery Dom is ready")
    // localStorage.setItem("apiKey", EncryptStringAES("8b5a25d706ef2f1751049de4a24571d5"))
})
// formJQ.on("submit", ()=>{})
formJQ.submit((e)=>{
    e.preventDefault()
    getWeatherDataFromApi()
})

const getWeatherDataFromApi = async()=>{
    const apiKey = DecryptStringAES(localStorage.getItem("apiKey"))
    const cityNameInput = inputJQ.val()
    const units = "metric"
    const lang = "tr"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput}&appid=${apiKey}&units=${units}&lang=${lang}`

    //jQuery http request
    // const response = await $.get(url)
    // const response = await $.post(url)
    await $.ajax({
        type : "GET",
        url : url,
        dataType : "json",
        success: (response) => {
            console.log(response);
            //weather card
        },
        beforeSend : (request) => {
            //parameter => headers
            //send tokenKey
        },
        complete : ()=>{},
        error : (XMLHttpRequest) =>{
            //error handling
        }
    });
    
}