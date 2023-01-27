// const camelize = (str) =>{
//     let newStr =""
//     let arr = str.split(/-|\s/g)
//     arr.forEach((e, i)=> {
//         if(i == 0){
//             newStr += e[0].toLowerCase() + e.substring(1)
//         } else{
//             let word = e.toLowerCase()
//             newStr += word[0].toUpperCase() + word.substring(1)
//         }
//     })
//     return newStr
// }

// console.log(camelize("JavaScript coding ChAlLenge"))
// console.log(camelize("JavaScript-coding-challenge"))
// console.log(camelize("javaScriptCodingChallenge"))

const info = [
'C1234 - John Doe, London, Full-Stack',
'C2345 - Jane Doe, London, Data-Science',
'C2346 - Mary Ann, Paris, AWS-Devops',
'C2347 - Adam Smith, Texas, AWS-Devops',
'C2444 - Michael Great, Arizona, Full-Stack',
'C2555 - William Cash, Manchester, Data-Science',
'C2455 - Patrick Jane, Madrid, Full-Stack']

const table = document.createElement("table")
document.querySelector(".info").appendChild(table)
table.style.border ="1px solid black"
table.style.borderCollapse ="collapse"

const header = document.createElement("tr")
header.innerHTML =
`
<th>St Nr</th>
<th>First Name</th>
<th>Last Name</th>
<th>Location</th>
<th>Path</th>
`
table.appendChild(header)

info.forEach(person=>{
    person = person.replace(" -", ",").split(", ")
    console.log(person);
    table.innerHTML += 
    `<tr>
    <td>${person[0]}</td>
    <td>${person[1].split(" ")[0]}</td>
    <td>${person[1].split(" ")[1]}</td>
    <td>${person[2]}</td>
    <td>${person[3]}</td>
    </tr>`
})