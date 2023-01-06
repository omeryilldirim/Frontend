//! JS practice

//? 1. Yetkisiz kullanıcılardan korunmak için e-posta adreslerini gizlemek için bir JavaScript fonksiyonu yazın.
// Test Verisi: console.log(protect_email("robin_singh@example.com")); "robin...@example.com"
console.log("************* Q1 *************");

// const protectEmail = (email) => {
//     const indexNo = email.indexOf("@")
//     const splitted = email.split("")
//     indexNo <= 5 ? splitted.splice(indexNo-2, 2, '...') : splitted.splice(indexNo-5, 5, '...')
//     const newStr = splitted.join("")
//     return newStr
// }
const protectEmail = (email) => {
    const emailName = email.split("@")[0]
    const newStr = emailName.slice(0, emailName.length-3) + "...@" + email.split("@")[1]
  return newStr;
};

console.log(protectEmail("robin@example.com"));
console.log(protectEmail("robin_singh@example.com"));
console.log(protectEmail("omeryilldirim@outlook.com"));


//? 2. Bir dizideki tüm elemanların ortalamasını hesaplayan bir JavaScript fonksiyonu yazın. Test Verisi: console.log(average([1,2,3,4,5])); 3
console.log("************* Q2 *************");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.reduce((accumulator, value)=> accumulator + value) / arr.length);

// const average = (array) => {
//   let sum = 0;
//   array.forEach(num => sum += num)
//   return sum / array.length;
// };

// console.log(average(arr));


//? 3. verilen pozitif olmayan bir tamsayıyı argüman olarak alan ve rakamları azalan sırada döndüren bir fonksiyon yazmaktır. Özetle, rakamları yeniden düzenleyerek mümkün olan en yüksek sayıyı oluşturun.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
console.log("************* Q3 *************");

const biggestNum = (num) => Number(num.toString().split("").sort((a, b) => b - a).join(""));

console.log(biggestNum(42145));
console.log(biggestNum(145263));
console.log(biggestNum(123456789));


// 4. Verilen bir string'de sesli harfleri (a, e, i, o, u) filtreleyin ve sadece sesli harfler olmayan kalan harfleri birleştirin.
// Examples:
// Input: "day" Output: "dy"
// Input: "apple" Output: "ppl"
// Input: "javascript" Output: "jvscrpt"
console.log("************* Q4 *************");


const filterVowels = string => {
    const vowels = ["a", "e", "i", "o", "u"]
    const arr = string.split("")
    return arr.filter(letter => !vowels.includes(letter)).join("")
}
console.log(filterVowels("day"));
console.log(filterVowels("apple"));
console.log(filterVowels("javascript"));


//* ************* Q5 *************
// 5- Bir JavaScript dizisinde tekrar eden  değerleri bulan bir JavaScript programı yazın.
// Examples:
// Input: [1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 9, 9, 10]
// Output: 1, 2, 9
console.log("************* Q5 *************");

const input = [1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 9, 9, 10]

const checkRepeat = (array) => {
    const output = []
    array.forEach((number, index) => {
        array.indexOf(number, index+1)!== -1 && output.push(number)
    });
    return output.join()
}

console.log(checkRepeat(input));


//* ************* Q6 *************
// 6. Elemanları sayılardan oluşan bir listenin elemanlarının karelerinin toplamını bulan bir JavaScript programı yazın.
// Examples:
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Output: 285
console.log("************* Q6 *************");

const input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const base = array => array.reduce((accumulator, number) => {return accumulator + number*number}, 0)

// const base = array => {
//     let sum = 0
//     array.map(number => sum += number*number)
//     return sum
// }

console.log(base(input2));
