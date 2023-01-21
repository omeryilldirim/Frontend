// Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).
// I=1,V=5,X=10,L=50,C=100,D=500,M=1000

// Example:,
// 1000=M 900=CM 90=XC
// 2008 is written as MMVIII:
// 2000=MM 8=VIII


function add (n,symbol) {
    let text = ""
    for (let i = 1; i <= n; i++){
        text += symbol     
    }
    return text
}

const convertNumeral = (num) =>{
    // get units digit
    let first = num % 10 // 8
    num = num-first // 2850
    //convert to romen numeral
    if (first === 9){
        first = "IX"
    } else if(first === 4){
        first = "IV"
    } else {
        first / 5 >= 1 ? 
        first = "V" + add((first%5), "I")
        : first = add(first, "I")
    }
    
    // get tens digit
    let second = num % 100 //50
    num = num-second
    //convert to romen numeral
    if (second === 90){
        second = "XC"
    } else if(second === 40){
        second = "XL"
    } else {
        second / 50 >= 1 ? second = "L" + add((second%50/10), "X") : second = add((second%50/10), "X")
    }

    // get hundreds digit
    let third = num % 1000 // 800
    num = num-third
    //convert to romen numeral
    if (third === 900){
        third = "CM"
    } else if(third === 400){
        third = "CD"
    } else {
        third / 500 >= 1 ? third = "D" + add((third%500/100), "C") : third = add((third%500/100), "C")
    }

    // get thousands digit
    let fourth = num % 10000 //2000
    //convert to romen numeral
    fourth = add((fourth/1000), "M") // MM

    return fourth+third+second+first
}

console.log(convertNumeral(2247));
console.log(convertNumeral(1990));
console.log(convertNumeral(2008));
console.log(convertNumeral(990));
console.log(convertNumeral(385));
console.log(convertNumeral(44));


