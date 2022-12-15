//**************** CALCULATOR *******************

const num1 = Number(prompt("Please enter the first number"));
const num2 = Number(prompt("Please enter the second number"));
const operator = prompt("Please enter the opration symbol (+, -, *, /) :");
let result = "no operation yet";

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  alert("Please enter a valid operation symbol!");
}

console.log(result);

// //**************** DAY PROGRAMMER *******************

const day = prompt("Please enter the day");

switch (day) {
  case "monday" || "tuesday" || "wednesday" || "thursday":
    console.log("InClass");
    break;
  case "friday":
    console.log("Teamwork");
    break;
  case "saturday":
    console.log("InClass + Workshop");
    break;
  case "sunday":
    console.log("Self-Study");
    break;
  default:
    console.log("Please enter a valid string");
    break;
}

//**************** SALARY INCREASE *******************

const minWage = 5000;
const salary = Number(prompt("Please enter your salary"));

if (salary <= minWage) {
  newSalary = salary * 1.5;
} else {
  newSalary = salary * 1.1;
}

console.log(`Your new salary : ${newSalary}`);
alert(`Your new salary : ${newSalary}`);

//**************** INCOME-OUTCOME *******************

const income = Number(prompt("Please enter your income"));
const outcome = Number(prompt("Please enter your outcome"));

const condition = income - outcome >= minWage;

condition
  ? alert("You are available for loan 🤑")
  : alert("You are NOT available for loan 🥺");
