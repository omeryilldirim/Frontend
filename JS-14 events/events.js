//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******")

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------
const h1 = document.querySelector("header h1")
const langInput = document.getElementById("input")
let newList = null
const buton = document.getElementById("btn")
const buttonRemove = document.getElementById("btn-rmv")

const ul = document.createElement("ul")
buttonRemove.after(ul)

h1.onmouseover = function () {
  h1.style.color = "red"
}

h1.onmouseout = () => {
  h1.style.color = "black"
}

const print = () => {
  document.write("PRINT")
}

// document.getElementById("btn").onclick = () => {
//   alert("Btn clicked")
// }


//? when clicked ADD, add value to list

buton.addEventListener("click", () => {
  console.log(langInput.value)
  !langInput.value
    ? alert("Please enter a langugage")
    : (ul.innerHTML += `<li>${langInput.value}</li>`)
  langInput.value = ""
  langInput.focus()
})


//? when pressed enter, add value to list

langInput.addEventListener("keydown", (event) => {
  //   console.log(event)
  //   if (event.keyCode === 13) {
  //     buton.click()
  //   }

  if (event.code === "Enter") {
    buton.click()
  }
})

//? when clicked REMOVE, remove value from list

buttonRemove.addEventListener("click", ()=>{
  
  ul.lastElementChild === null 
  ? alert("There is no item to delete")
  : ul.lastElementChild.remove()
  console.log(ul.lastElementChild);

  langInput.focus()
})
//? when pressed delete, remove value from list

langInput.addEventListener("keydown", (event) => {

  if (event.code === "Backspace" || event.code === "Delete") {
    buttonRemove.click()
  }
})



window.onload = print()

window.addEventListener("load", () => {
  langInput.focus()
})
