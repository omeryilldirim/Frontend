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
//*             FILTER METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim
const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]

const moreThan10000 = salaries.filter((s) => s >= 10000)
console.log(moreThan10000)

const range = salaries.filter((s) => s >= 6000 && s <= 20000)
console.log(range)

//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================
//? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
//? yeni diziye saklayalim.

const lessThan9000Inc = salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1))

console.log(lessThan9000Inc)

salaries
  .filter((x) => x < 9000)
  .map((x) => Math.trunc(x * 1.1))
  .forEach((x) => console.log(x))
//! ForEach terminal methodudur. Br deger dondurmedigi icin devamına baska fonksiyon getirlemez.

//* =======================================
//*             REDUCE METHOD
//* =======================================
// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]

const totalSalary = salaries
  .reduce((t, s) => t + s)
//   .forEach((x) => console.log(x)) //! salaries.reduce(...).forEach is not a function
console.log("TOTAL:", totalSalary)

//* =======================================
//*               OTHERS
//* =======================================

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const ages = [18, 22, 78, 34, 78, 79, 15]
const check = ages.every((age) => age >= 18)
check ? console.log("All ages are over 18") : console.log("Sum are under 18")

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const over80 = ages.some((a) => a >= 80)
console.log(over80) //? false

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
const ageBigThan30First = ages.find((age) => age >= 30)
const ageBigThan30Last = ages.findLast((age) => age >= 30)
console.log(ageBigThan30First, ageBigThan30Last)

console.log(ages.find((age) => age >= 80)) //? undefined

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

const foundIndex = ages.findIndex((age) => age > 18)
console.log(foundIndex) //? 1