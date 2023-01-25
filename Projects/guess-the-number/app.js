const userInput = document.getElementById("user-input")
const btnCheck = document.getElementById("btn-check")
const numberAttempt= document.getElementById("numberAttempt")
const modalEl = document.querySelector(".secret-container")
const secretNumber = Math.ceil(Math.random()*100)

window.addEventListener("load", ()=>{
    userInput.focus()
})

localStorage.setItem("user", JSON.stringify({attempt:5}))

btnCheck.addEventListener("click", checkNumber)

document.getElementById("modal-ok").addEventListener("click", ()=>{
    modalEl.style.display = "none"
    window.location.reload()
})

function checkNumber(e){
    e.preventDefault()
    const userNum = userInput.value

    if (userNum <= 0 || userNum > 100) {
        alert("Please enter a number in range : 1 - 100")
    } else if (userNum == secretNumber){
        document.getElementById("final-par").innerHTML = `Wow..You guessed it!👏🥳 <br> The number is ${secretNumber}`
        btnCheck.removeEventListener("click", checkNumber)
        document.querySelector(".secret-container").classList.add("show")
    } else if (userNum > secretNumber){
        updateStorage()
        checkAttempt()
        document.querySelector(".message").innerText = `Guess a lower number than ${userNum} ⬇️⬇️⬇️`
    } else if (userNum < secretNumber){
        updateStorage()
        checkAttempt()
        document.querySelector(".message").innerText = `Guess a higher number than ${userNum} ⬆️⬆️⬆️`
    }

    document.querySelector("form").reset();
}

function checkAttempt(){
    numberAttempt.innerText == 0 && gameOver()
}

function updateStorage() {
    const userStorage = JSON.parse(localStorage.getItem("user"))
    userStorage.attempt -= 1
    localStorage.setItem("user", JSON.stringify(userStorage))
    numberAttempt.innerText = userStorage.attempt
}

function gameOver() {
    document.getElementById("final").innerText = `The number is ${secretNumber}`
    btnCheck.removeEventListener("click", checkNumber)
    document.querySelector(".secret-container").classList.add("show")
}
