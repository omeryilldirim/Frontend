const API_KEY = "8b5a25d706ef2f1751049de4a24571d5"
const weatherDataList = []
const btnSubmit = document.querySelector(".btn")
const warningPar = document.querySelector("p.warning")

//submit button event
btnSubmit.addEventListener("click", (e)=>{
    e.preventDefault()
    // remove warning from dom
    warningPar.style.visibility = "hidden" 
    // check the input value if empty
    const searchInput = document.getElementById("city-input").value
    if(searchInput==""){
        warningPar.style.visibility = "visible" 
        warningPar.innerText = `Please enter a valid city name`
    } else{
        // get inputted city name
        let city  = searchInput.toLowerCase() 
        city = city.charAt(0).toUpperCase() + city.substring(1)
    
        document.querySelector("form").reset()
    
        // check if city is already checked
        weatherDataList.includes(city) ?
        (warningPar.innerText = `You have already checked the weather for ${city} 🙃 please check another city`) &&
        (warningPar.style.visibility = "visible")
        : getWeatherData(city)
    }
})

const getWeatherData = async (city) =>{
    // // get city coordinates
    // const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=8b5a25d706ef2f1751049de4a24571d5`)
    // const data = (await response.json())[0]
    // const {name, lat, lon} = data
    
    // get city temperature, country, decription
    const response2 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    
    console.log(response2);
    
    try {
        const data2 = await response2.json()
        const name = data2.name
        const country = data2.sys.country
        const temp = data2.main.temp
        const description = data2.weather[0].description
        const iconCode = data2.weather[0].icon

        // load results to UI
        const resultSection = document.querySelector(".result")
        resultSection.innerHTML += `
        <div class="card p-2 d-flex flex-column justify-content-evenly align-items-center g-1">
            <h5 class="card-title">${name}, ${country}</h5>
            <p class="card-title display-1">${Math.trunc(temp)}<sup class="display-5">°C</sup></p>
            <img src="http://openweathermap.org/img/wn/${iconCode}@2x.png" alt="weather-image">
            <p class="card-text">${description}</p>
        </div>`

        //load info to sessionStorage
        weatherDataList.push(city)
        sessionStorage.setItem("weatherDataList", JSON.stringify(weatherDataList))

    } catch (error) {
        console.log(error);
    }

}
