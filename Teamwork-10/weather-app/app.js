const API_KEY = "8b5a25d706ef2f1751049de4a24571d5"
const btnSubmit = document.querySelector(".btn")
const warningPar = document.querySelector("p.warning")
const btnClear = document.getElementById("clear-all")

let weatherDataList = JSON.parse(localStorage.getItem("weatherDataList")) || [];

// window load event : get weatherdatalist from storage
window.addEventListener("load", () => {
    getWeatherDataListFromLocalStorage();
});

//clear all queries
btnClear.addEventListener("click", ()=>{
    document.querySelector("section.result").remove()
    weatherDataList = []
    localStorage.setItem("weatherDataList", JSON.stringify(weatherDataList))
})

//submit button event
btnSubmit.addEventListener("click", (e)=>{
    e.preventDefault() 
    // check the input value if empty
    const searchInput = document.getElementById("city-input").value
    if(searchInput==""){
        warningPar.innerText = `Please enter a valid city name`
        setTimeout(setWarningDefaultMessage, 3000)
    } else{
        // get inputted city name
        let city  = searchInput.toLowerCase() 
        city = city.charAt(0).toUpperCase() + city.substring(1)
    
        document.querySelector("form").reset()
    
        // check if city is already checked
        weatherDataList.includes(city) ?
        (warningPar.innerText = `You have already checked the weather for ${city} 🙃 please check another city`) &&
        setTimeout(setWarningDefaultMessage, 3000)
        : getWeatherData(city)
    }
})

const getWeatherDataListFromLocalStorage = ()=>{
    weatherDataList.forEach(city=>{
        getWeatherData(city)
    })
}

const getWeatherData = async (city) =>{
    try {
        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        if (!response.ok) {
            throw new Error(`Input is not matched any data`);
        }
        const data = await response.json()
        const name = data.name
        const country = data.sys.country
        const temp = data.main.temp
        const description = data.weather[0].description
        const iconCode = data.weather[0].icon

        // load results to UI
        const resultSection = document.querySelector(".result")
        resultSection.innerHTML += `
        <div class="card p-2 d-flex flex-column justify-content-evenly align-items-center g-1">
            <h5 class="card-title">${name}, ${country}</h5>
            <p class="card-title display-1">${Math.trunc(temp)}<sup class="display-5">°C</sup></p>
            <img src="http://openweathermap.org/img/wn/${iconCode}@2x.png" alt="weather-image">
            <p class="card-text">${description}</p>
        </div>`

        //load info to localStorage
        weatherDataList.includes(city) || 
        weatherDataList.push(city) && localStorage.setItem("weatherDataList", JSON.stringify(weatherDataList))

    } catch (error) {
        warningPar.innerText = error.message
        setTimeout(setWarningDefaultMessage, 3000)
    }
}

function setWarningDefaultMessage(){
    warningPar.innerText = `Winter is coming...🥶🥶`
}