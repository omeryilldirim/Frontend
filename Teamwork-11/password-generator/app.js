const symbols = ["!","@","#","$","%","^","&","*","(",")","_","+","~","|","}","{","[","]",":",";","?",">","<",",",".","/","-","="];
const btnGenerate = document.getElementById("btn-generate")
const passwordPar = document.getElementById("password")
const copyIcon = document.querySelector("i")
const passwordContainer = document.querySelector(".container")
const warningSpan = document.getElementById("warning")

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getSymbol(){
    let randomNum = Math.floor(Math.random() * 28 )
    return symbols[randomNum]
}
function getComplete(){
    const number = Math.random()
    return number < 0.5 ? getRandomLower() : getRandomUpper()
}

function passwordGenerator() {
    let password =""
    for (let i = 0; i < 3; i++) {
        password += getRandomNumber()
    }
    for (let i = 0; i < 2; i++) {
        password += getSymbol()
    }
    password += getRandomLower()
    password += getRandomUpper()

    for (let i = 0; i < 3; i++) {
        password += getComplete()
    }
    password = password.split("").sort(() => Math.random() - 0.5).join("")

    return password
}

btnGenerate.addEventListener("click", ()=>{
    passwordPar.innerText = passwordGenerator()
    copyIcon.style.visibility ="visible"
})

passwordContainer.addEventListener("mouseover", ()=>{
    copyIcon.style.opacity = 0.5
})
passwordContainer.addEventListener("mouseout", ()=>{
    copyIcon.style.opacity = 1
})

passwordContainer.addEventListener("click", ()=>{
    if (passwordPar.innerText != "?"){
        navigator.clipboard.writeText(passwordPar.innerText)
        warningSpan.style.visibility = "visible"
        setTimeout(()=>{
            warningSpan.style.visibility = "hidden"
        }, 2000)
    }
})