//* Variables 

const yourChoice = document.getElementById("your-choice")
const pcChoice = document.getElementById("pc-choice")
const select = document.querySelector(".select")
let userSelect; 
let pcRandom;
const pcArr = ["rock", "paper", "scissors"]

//* Event listeners

select.addEventListener("click", (e)=> {
    // console.log(e.target.className);
    // console.log(e.target.getAttribute("alt"));

    //? dive tıklama sonucu gelen null değeri devreden çıkarıyor
    if(e.target.getAttribute("alt")){
        userSelect = e.target.getAttribute("alt");
        yourChoice.innerHTML =  `<img src="./assets/${userSelect}.png"></img>`
        pc()
    }
})


function pc(){
    pcRandom = pcArr[Math.floor(Math.random() * 3)]
    // console.log(pcRandom);
    pcChoice.innerHTML = `<img src="./assets/${pcRandom}.png"></img>`
    result()
}

function result(){

}













// not preferred

/* const tasImage = document.querySelector(".rock")
const kagitImage = document.querySelector(".paper");
const makasImage = document.querySelector(".scissors");

tasImage.addEventListener('click',(e)=>{
    console.log(e)
    yourChoice.innerHTML = `<img src="./assets/rock.png"></img>`
})

kagitImage.addEventListener('click',(e)=>{
    console.log(e)
    yourChoice.innerHTML = `<img src="./assets/paper.png"></img>`;
})

makasImage.addEventListener('click',(e)=>{
    console.log(e)
    yourChoice.innerHTML = `<img src="./assets/scissors.png"></img>`;
}) */ 