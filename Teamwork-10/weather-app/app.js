const API_KEY = "8b5a25d706ef2f1751049de4a24571d5"
const weatherDataList = []
const btnSubmit = document.querySelector(".btn")

//submit button event
btnSubmit.addEventListener("click", (e)=>{
    e.preventDefault()
    // get inputted city name
    const searchInput = document.getElementById("city-input").value
    let city  = searchInput.toLowerCase() 
    city = city.charAt(0).toUpperCase() + city.substring(1)

    document.querySelector("form").reset()

    getCoord(city)
})


const getCoord = async (city) =>{
    
    // get city coordinates
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=8b5a25d706ef2f1751049de4a24571d5`)
    const data = (await response.json())[0]
    const {name, lat, lon} = data
    
    // get city temperature, country, decription
    const response2 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat.toFixed(2)}&lon=${lon.toFixed(2)}&units=metric&appid=${API_KEY}`)
    const data2 = await response2.json()
    const country = data2.sys.country
    const temp = data2.main.temp
    const description = data2.weather[0].description

    // load results to UI
    const resultSection = document.querySelector(".result")
    resultSection.innerHTML += `
    <div class="card">
        <h5 class="card-title">${name}, ${country}</h5>
        <p class="card-text">${Math.trunc(temp)}</p>
        <div> icon </div> 
        <p class="card-text">${description}</p>
    </div>`

    //load info to sessionStorage
    weatherDataList.push(name)
    sessionStorage.setItem("weatherDataList", JSON.stringify(weatherDataList))
}
