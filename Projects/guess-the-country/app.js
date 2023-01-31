const flagDiv = document.querySelector(".country-flag")
const infoDiv = document.querySelector(".country-info")
const btnSubmit = document.querySelector(".submit")
const btnShow = document.getElementById("show")
const btnCheck = document.querySelector(".check")
const input = document.getElementById("country-input")
const inputForm = document.querySelector(".user-input")
const messagePar = document.querySelector(".message")

const getCountryData = async (e) =>{
    e.preventDefault()
    infoDiv.classList.contains("hidden") || infoDiv.classList.add("hidden")
    inputForm.style.display = "block"
    messagePar.innerText = "Which country the flag belongs to?"
    const response = await fetch("https://restcountries.com/v3.1/all").then(res=> res.json())
    const data = response[Math.floor(Math.random() * 250)]
    let {name:{common, official},capital,subregion,languages,currencies,borders,maps:{googleMaps},population,flags:{png} } = data
    borders || (borders = "none")
    languages = Object.values(languages)
    currencies = Object.values(currencies).map(cur=> cur.name)

    flagDiv.innerHTML =`<img src="${png}" alt="${common}-flag">`
    infoDiv.innerHTML = 
    `<h4 class="text-center">${common}</h4>
    <p>&#xf024;<strong> Official Name:</strong> ${official}</p>
    <p>&#xf19c;<strong> Capital:</strong> ${capital}</p>
    <p>&#xf57d;<strong> Region:</strong> ${subregion}</p>
    <p>&#xf086;<strong> Languages:</strong> ${languages}</p>
    <p>&#xf3d1;<strong> Currencies:</strong> ${currencies}</p>
    <p>&#xe533;<strong> Population:</strong> ${population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
    <p>&#xe562;<strong> Borders:</strong> ${borders}</p>
    <p>&#xf5a0;<strong> Map:</strong> <a href="${googleMaps}" target="_blank">Go to google map</a></p>`    
}

btnSubmit.addEventListener("click", getCountryData)

btnShow.addEventListener("click", (e)=>{
    e.preventDefault()
    infoDiv.classList.toggle("hidden")
})

btnCheck.addEventListener("click", (e)=>{
    e.preventDefault()
    const userInput = input.value.toLowerCase()
    input.value = ""
    console.log(infoDiv.querySelector("p").innerText.split(": ")[1].toLowerCase());

    if(userInput == infoDiv.querySelector("h4").innerText.toLowerCase() ||
        userInput == infoDiv.querySelector("p").innerText.split(": ")[1].toLowerCase()){
            messagePar.innerText = "Congrats! 🥳"
            infoDiv.classList.contains("hidden") && infoDiv.classList.remove("hidden")
    } else{
        messagePar.innerText = "Try again!"
        setTimeout(()=>{
            messagePar.innerText = "Which country the flag belongs to?"
        }, 3000)
    }
})