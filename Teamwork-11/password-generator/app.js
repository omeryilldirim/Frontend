const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "~",
  "|",
  "}",
  "{",
  "[",
  "]",
  ":",
  ";",
  "?",
  ">",
  "<",
  ",",
  ".",
  "/",
  "-",
  "=",
];

let password =""

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

console.log(passwordGenerator());
