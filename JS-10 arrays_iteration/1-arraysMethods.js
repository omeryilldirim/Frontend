//? ===============================================
//?           DIZI ERISIM METOTLARI
//? ===============================================

console.log("**** ACCESS ****")
const numbers = [3, 5, 2, "4", "four", 3, "4", "bes", "1"]

//* includes()
//*-----------------------------------------------------------

console.log(numbers.includes(4));
console.log(numbers.includes("4"));

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur. Bulunumazsa -1 dondurur.

console.log(numbers.indexOf(3));
console.log(numbers.indexOf(3,6));
console.log(numbers.lastIndexOf(3));
console.log(numbers.lastIndexOf(7));

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string'e cevirir.

console.log(numbers.join());
const str = numbers.join('')
console.log(str);

let data = [3,1,5,7,8,910,22,3]
data = data.sort((a,b)=>b-a).join(" ")
console.log(data);

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(numbers.toString());

//* slice(start, end) -- end exclusive
//*-----------------------------------------------------------

const cars =["BMW", "Mercedes", "Fiat", "Anadol"]
console.log(cars.slice(2,4));
console.log(cars.slice(1));

//* concat()
//*-----------------------------------------------------------

const message = ["The weather", "is", "very", "nice"]
const now = [new Date().toLocaleString()]
console.log(now); // '1/4/2023, 8:36:56 PM'

const concattedMessage = message.concat(now, "JS arrays", [[1,3,4]])
console.log(concattedMessage);