const btnSubmit = document.querySelector(".submit")
const warningPar = document.querySelector("p.warning")
const btnClear = document.getElementById("clear-all")
const resultSection = document.querySelector(".result")
let weatherDataList = JSON.parse(localStorage.getItem("weatherDataList")) || [];

// window load event : get weatherdatalist from storage
window.addEventListener("load", () => {
    getWeatherDataListFromLocalStorage();
});

//clear all queries
btnClear.addEventListener("click", ()=>{
    document.querySelector("section.result").innerHTML = ""
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
        getWeatherData(searchInput)
    }
})

//remove button event
resultSection.addEventListener("click", (e)=>{
    if(e.target.classList.contains("remove")){
        const name = e.target.parentNode.querySelector("h5").innerText.slice(0, -2)
        const country = e.target.parentNode.querySelector("sup").innerText
        e.target.parentNode.remove()
        weatherDataList = weatherDataList.filter(item=> item.name+item.country != name+country)
        localStorage.setItem("weatherDataList", JSON.stringify(weatherDataList))
    }
})

const getWeatherDataListFromLocalStorage = ()=>{
    const newWeatherDataList = [...weatherDataList]
    weatherDataList=[]
    newWeatherDataList.forEach(item=>{
        getWeatherData(item.name)
    })
}

const getWeatherData = async (city) =>{
    try {
        const API_KEY = "8b5a25d706ef2f1751049de4a24571d5"
        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        if (!response.ok) {
            document.querySelector("form").reset()
            throw new Error(`Input is not matched any data`);
        }
        const data = await response.json()
        const{name, sys:{country}, main:{temp}, weather } = data
        const description = weather[0].description
        const iconCode = weather[0].icon
        const cityObj ={"name":name, "country":country}
        
        // check if city is already checked
        const filteredArr = weatherDataList.filter(item=> item.name == name && item.country == country)

        if(filteredArr.length > 0){
            warningPar.innerText = `You have already checked the weather for ${name} 🙃 please check another city`
            setTimeout(setWarningDefaultMessage, 3000)
        } else {
            // load results to UI
            const resultSection = document.querySelector(".result")
            resultSection.innerHTML += `
            <div class="card p-3 pb-0 d-flex flex-column justify-content-evenly align-items-center g-1">
                <h5 class="card-title">${name}<sup class="h6 text-light bg-primary bg-gradient rounded-1 px-1">${country}</sup></h5>
                <p class="card-title display-2">${Math.round(temp)}<sup class="display-6">°C</sup></p>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${iconCode}.svg" alt="weather-image">
                <p class="card-text">${description}</p>
                <span class="remove btn bg-danger text-light">X</span>
            </div>`
            
            //load info to localStorage
            weatherDataList.push(cityObj)
            localStorage.setItem("weatherDataList", JSON.stringify(weatherDataList))
        }

        document.querySelector("form").reset()

    } catch (error) {
        warningPar.innerText = error.message
        setTimeout(setWarningDefaultMessage, 3000)
    }
}

function setWarningDefaultMessage(){
    warningPar.innerText = `Winter is coming...🥶🥶`
}