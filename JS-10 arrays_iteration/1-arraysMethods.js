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



//* slice(start, end) -- end exclusive
//*-----------------------------------------------------------

//* concat()
//*-----------------------------------------------------------
