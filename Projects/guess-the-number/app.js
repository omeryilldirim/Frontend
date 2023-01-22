const userInput = document.getElementById("user-input")
const btnCheck = document.getElementById("btn-check")
const numberAttempt= document.getElementById("numberAttempt")

localStorage.setItem("user", JSON.stringify({attempt:5}))

let secretNumber = Math.round(Math.random()*100)
console.log(secretNumber);

btnCheck.addEventListener("click", checkNumber)

function checkNumber(){
    
    const userNum = userInput.value

    if (userNum < 0 || userNum > 100) {
        alert("Please enter a number in range : 0 - 100")
    } else if (userNum == secretNumber){
        alert("Wooow...You nailed it ! 👏🥳")
    } else if (userNum > secretNumber){
        alert("You need to guess a lower number  ⬇️⬇️⬇️")
    } else if (userNum < secretNumber){
        alert("You need to guess a higher number  ⬆️⬆️⬆️")
    }

    updateStorage()

    if (numberAttempt.innerText == 0){
        gameOver()
    }
}

function updateStorage() {
    const userStorage = JSON.parse(localStorage.getItem("user"))
    userStorage.attempt -= 1
    localStorage.setItem("user", JSON.stringify(userStorage))
    numberAttempt.innerText = userStorage.attempt
}

function gameOver() {
    
}