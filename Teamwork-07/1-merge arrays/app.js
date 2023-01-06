//? Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.
//? Write a function that takes two arrays of sorted numbers and combines them into one array as result.
//? Please note that, empty arrays to be checked to avoid exception!
// A = [12, 14, 16]; 
// B = [11, 13, 17];
// expectedOutput = [11, 12, 13, 14, 16, 17];

// A = []; 
// B = [11, 13, 17];
// expectedOutput = [11, 13, 17];

const A = []; 
const B = [11, 13, 17];

const expectedOutput = A.concat(B).sort((a,b)=>a-b)
console.log(expectedOutput);