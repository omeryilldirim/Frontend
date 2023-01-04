console.log("****** ITERATION **********")

//* =======================================
//*           FOREACH METHOD
//* =======================================

//? PRINT

const prices = [100,250,50,89]
for(let price of prices){
    console.log(price);
}
console.log("********");

prices.forEach(p => console.log(p))

//? SUM

let sum = 0
prices.forEach(price => sum+=price)
console.log("Sum:", sum);

//! forEach method is void method
console.log(prices.forEach(price => sum+=price)); //! undefined

//? Print every sub total in prices array and increase prices 10%.

let total = 0
prices.forEach((p, i, arr) => {
    total += p
    console.log(`${i+1} iteration : ${total}`);
    arr[i] = Math.trunc(p * 1.1)
})
console.log(prices);

//* =======================================
//*            MAP METHOD
//* =======================================

//? write a code which turn all letters to uppercase

let names = ["Mustafa","Murat","Ahmet","Mustafa","Ayşe","canan"]

const upperNames = names.map( name => name.toLocaleUpperCase())

console.log(upperNames);
console.log(names);
console.log(names.map( name => name.toLocaleUpperCase()));

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 18.23
const dolar = 18.19
const tlPrices = [100, 150, 100, 50, 80]

const euroPrices = tlPrices.map((tl) => Number((tl / euro).toFixed(2)))
const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)))

console.log(euroPrices, dolarPrices)

//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================

//* =======================================
//*             FILTER METHOD
//* =======================================

//* =======================================
//*             REDUCE METHOD
//* =======================================

//* =======================================
//*               OTHERS
//* =======================================
