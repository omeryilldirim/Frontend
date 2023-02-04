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
            //weather card creation
            const {main, sys, weather, name} = response
            const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
            //alternative iconUrl
            const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

            // js => querySelector-All(selector),  jquery => find(selector)
            const cityCardList = listJQ.find(".city")
            // array.from = .get()
            const cityCardListArray = cityCardList.get()
            if(cityCardListArray.length > 0){
                const filteredArray = cityCardListArray.filter((card)=>$(card).find("span").text() == name)
                if(filteredArray.lenght > 0){
                    msgJQ.text(`You already know the weather for ${name}, Please search for another city 😉`);
                    //styling
                    msgJQ.css({ "color": "red", "text-decoration": "underline" });
                    setTimeout(() => {
                        msgJQ.text(``);
                    }, 3000);
                    formJQ.trigger("reset");
                    return;
                }
            }

            const createdLi = $("<li></li>")
            createdLi.addClass("city")
            //* text(), val(), attr(), html() 
            createdLi.html(
                `<h2 class="city-name" data-name="${name},${sys.country}">
                    <span>${name}</span>
                    <sup>${sys.country}</sup>
                </h2>
                <div class="city-temp">${Math.round(main.temp)}
                    <sup>°C</sup>
                </div>
                <figure>
                    <img class="city-icon" src="${iconUrlAWS}">
                    <figcaption>${weather[0].description}</figcaption>
                </figure>`)
            //append and prepend ==> js + jquery
            listJQ.prepend(createdLi)
            
            // formJQ[0].reset()
            formJQ.trigger("reset")
            
            //jquery animate
            $(".city").click((e) => {
                //convert js to jquery
                //jquery chaning
                $(e.target)
                    .animate({ left: '50px' })
                    .animate({ left: '150px' })
                    .animate({ left: '250px' })
                    .animate({ left: '150px' })
                    .animate({ left: '50px' })
                    .animate({ left: '0px' });
            });

            //jquery slideup-slidedown
            $(".city img").click((e) => {
                //convert js to jquery
                //jquery chaining
                $(e.target)
                    .slideUp(1500)
                    .slideDown(1500)
            });

            //jquery slideup-slidedown
            // $(".city img").click((e) => {
            //     //convert js to jquery
            //     //jquery chaning
            //     $(e.target)
            //         .hide()
            // });

        },
        beforeSend: (request) => {
            //add headers
            //send tokenKey
        },
        complete: () => { },
        error: (XMLHttpRequest) => {
            //error handling
            msgJQ.text(`${XMLHttpRequest.status} ${XMLHttpRequest.statusText}`);
            //styling
            msgJQ.css({ "color": "red", "text-decoration": "underline" });
            setTimeout(() => {
                msgJQ.text(``);
            }, 3000);
            formJQ.trigger("reset");
        }
    });
    
}