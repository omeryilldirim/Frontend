// //! Teamwork 06 JS assignment

// //? 2- Write a function which returns reverse order of the string.
// //? console.log(reverseString('hello world')) // output: dlrow olleh

// const reverseString = function(str){
//   let  result = ""
//   for (i=(str.length)-1 ; i>=0 ; i-- ){
//     result += str[i]
//   }
//   console.log(result);
// }

// reverseString("Hello world!")
// reverseString("how are you")

// //? Write a code that given a string, returns reverse orders of words
// //? "Clarusway" => "Clarusway"
// //? "days. big make things Little" => "Little things make big days."

// const reverseWords = str => {
//     const splitted = str.split(' ')
//     let newStr = ""
//     for (let i = (splitted.length)-1; i >= 0 ; i--)
//         newStr += splitted[i] + " "
//     return newStr
// }

// console.log(reverseWords("Clarusway"));
// console.log(reverseWords("days. big make things Little"));
