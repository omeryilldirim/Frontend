const display = document.getElementById("result");
let operator = "";
let operand1 = 0;
let operand2 = 0;
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const valueEl = document.querySelector(".value");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
function percent(a, b) {
  return a * 0.01 * b;
}
function opposite(a) {
  return a * -1;
}

function operate(operator, operand1, operand2) {
  switch (operator) {
    case "+":
      return add(operand1, operand2);
    case "-":
      return subtract(operand1, operand2);
    case "*":
      return multiply(operand1, operand2);
    case "/":
      return divide(operand1, operand2);
    case "%":
      return percent(operand1, operand2);
  }
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("click", () => {
    const keyValue = key.getAttribute("value");
    if (keyValue === "clear") {
      display.textContent = "";
      operator = "";
      operand1 = 0;
      operand2 = 0;
    } else if (keyValue === "=") {
      operand2 = parseFloat(display.textContent);
      display.textContent = operate(operator, operand1, operand2);
      display.textContent.length > 9 &&
        (document.getElementById("result").style.fontSize = "6vh");
      // if(display.textContent.length > 10){
      //   document.getElementById("result").style.fontSize= "5vh"
      // }
      operator = "";
      operand1 = 0;
      operand2 = 0;
    } else if (keyValue === "±") {
      operand1 = parseFloat(display.textContent);
      display.textContent = opposite(operand1);
    } else if (key.classList.contains("operator")) {
      operator = keyValue;
      operand1 = parseFloat(display.textContent);
      display.textContent = "";
    } else {
      if (display.textContent === "") {
        document.getElementById("result").style.fontSize = "10vh";
        display.textContent = keyValue;
      } else {
        if (display.textContent.length <= 9) {
          display.textContent += keyValue;
        } else if (display.textContent.length > 17) {
          document.getElementById("result").style.fontSize = "4vh";
          display.textContent += keyValue;
        } else if (display.textContent.length > 9) {
          document.getElementById("result").style.fontSize = "6vh";
          display.textContent += keyValue;
        }
      }
    }
  });
});

const updateTime = () => {
  const currentTime = new Date();

  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  // if (currentHour > 12) {
  //   currentHour -= 12;
  // }
  hourEl.textContent = currentHour.toString();
  minuteEl.textContent = currentMinute.toString().padStart(2, "0");
};
setInterval(updateTime, 1000);
updateTime();
