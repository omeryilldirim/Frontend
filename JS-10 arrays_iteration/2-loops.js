//* ============================================
//*                FOR LOOP
//* ============================================

console.log("******* LOOPS IN ARRAYS ******")

//?-------------- ÖRNEK -------------------
//? grades'in ortalamasini hesaplayiniz.

const grades = [55, 77, 23, 89, 100]
let sum = 0
for(let i=0; i<grades.length; i++){
    sum += grades[i]
}
const avg = sum / grades.length
console.log(avg);

//?-------------- ÖRNEK -------------------
//? arr dizisindeki negatif ve positif sayilari
//? 2 ayri diziye kaydediniz.

const arr = [-5, 15, 22, 0, -4, 45, 78]

let negatives =[]
let positives =[]

for(let j=0;j<arr.length; j++){
    if (arr[j]<0){
        negatives.push(arr[j])
    }else{
        positives.push(arr[j])
    }
}
console.log(negatives);
console.log(positives);
console.log(arr);

//* =========================================
//*             FOR-IN LOOP
//* =========================================

const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"]

const findStudent = name =>{
    let nameCounter = 0
    for(let i in students){
        if(students[i] === name.toLowerCase()){
            nameCounter += 1
        }
    }
    if(nameCounter){
        return `${name} is found ${nameCounter} times`
    } else {
        return `${name} is not found in students`
    }
}

console.log(findStudent("Mehmet"));
console.log(findStudent("ismet"));
console.log(findStudent("feyza"));

//* =========================================
//*            FOR-OF LOOP
//* =========================================

