// * =======================================================
// *                     FOR LOOP
// * =======================================================

//! sum up numbers from 1 to n

console.log("***** FOR LOOP *****");

const n = Number(prompt("Please enter a number"));

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log("SUM:", sum);

//! produce n numbers between 0-100

const num = Number(prompt("Enter a number"));

for (let j = 1; j <= num; j++) {
  const randomNum = Math.round(Math.random() * 100);
  console.log(`${j}. number is ${randomNum}`);
}

//! check whether a number is prime

const primeNum = Number(prompt("Enter a number"));

let isPrime = true;

if (primeNum < 2) {
  console.log("please enter a number bigger than 1 ");
} else {
  for (let i = 2; i < primeNum; i++) {
    if (primeNum % i === 0) {
      console.log(`${primeNum} is not a prime number`);
      isPrime = false;
      break;
    }
  }

  if (isPrime === true) {
    console.log(`${primeNum} is a prime number`);
  }
}
