//* Variables

const yourChoice = document.getElementById("your-choice");
const pcChoice = document.getElementById("pc-choice");
const select = document.querySelector(".select");
let userSelect;
let pcRandom;
const pcArr = ["rock", "paper", "scissors"];

//* score variables

const scoreYou = document.getElementById("you");
const scorePc = document.getElementById("pc");
const domTopScore = document.querySelector(".top-score");

//* Modal Selectors

const resultDiv = document.querySelector(".result-msg");
const containerEl = document.querySelector(".container");
const modalEl = document.querySelector(".modal-container");
const modalBtn = document.querySelector("#modal-ok");

//* Sonuç mesajı için

const final = document.getElementById("final");

//* Event listeners

select.addEventListener("click", (e) => {
  // console.log(e.target.className);
  // console.log(e.target.getAttribute("alt"));

  //? dive tıklama sonucu gelen null değeri devreden çıkarıyor
  if (e.target.getAttribute("alt")) {
    userSelect = e.target.getAttribute("alt");
    yourChoice.innerHTML = `<img src="./assets/${userSelect}.png"></img>`;
    pc();
  }
});

function pc() {
  pcRandom = pcArr[Math.floor(Math.random() * 3)];
  // console.log(pcRandom);
  pcChoice.innerHTML = `<img src="./assets/${pcRandom}.png"></img>`;
  result();
}

function result() {
  switch (userSelect) {
    case "rock":
      if (pcRandom == "paper") {
        lost();
      } else if (pcRandom == "scissors") {
        win();
      }
      break;
    case "paper":
      if (pcRandom == "scissors") {
        lost();
      } else if (pcRandom == "rock") {
        win();
      }
      break;
    case "scissors":
      if (pcRandom == "rock") {
        lost();
      } else if (pcRandom == "paper") {
        win();
      }
      break;
    default:
      break;
  }

  if (userSelect == pcRandom) {
    resultDiv.classList.add("active");
    resultDiv.innerHTML = "It's a draw";
    containerEl.style.boxShadow = "3px 3px 10px 1px #FFC538";
    resultDiv.style.backgroundColor = "#FFC538";
  }

  if(scoreYou.innerText == 10){
    final.innerHTML = `💃 You Win🕺`
    document.querySelector(".modal").style.backgroundColor = "#5AB7AC"
    modalBtn.style.color = "#5AB7AC"
    topScoreCheck()
  }

  if(scorePc.innerText == '10' || scoreYou.innerText == '10'){
    modal()
  }
}

function lost() {
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "You Lost";
  containerEl.style.boxShadow = "3px 3px 10px 1px #fb778b";
  resultDiv.style.backgroundColor = "#fb778b";
  scorePc.innerText++;
}

function win() {
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "You Win";
  containerEl.style.boxShadow = "3px 3px 10px 1px #5AB7AC";
  resultDiv.style.backgroundColor = "#5AB7AC";
  scoreYou.innerText++;
}

function modal(){
    modalEl.classList.add("show")
}

modalBtn.addEventListener("click", ()=>{
    // modal.classList.remove("show")
    modalEl.style.display = "none"
    window.location.reload()
})

// local storage den high score u çek
let storagedScore = localStorage.getItem("highScore")
console.log(storagedScore)

let topScore; //ekrana yazdıracağım değer.


//local storage boş ise 0-0 yazdırmak için
if(storagedScore){
    topScore = `10 - ${storagedScore}`
}else{
    topScore = "0 - 0"
}

// top score u dom a yazdır.
domTopScore.innerText = topScore;


function topScoreCheck(){
    storagedScore || localStorage.setItem("highScore", +scorePc.innerText )
    
    if (storagedScore >= scorePc.innerText) {
        localStorage.setItem("highScore", +scorePc.innerText);
        
    }

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
