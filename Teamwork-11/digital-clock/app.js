const hourPar = document.querySelector(".hour")
const minutePar = document.querySelector(".minute")
const secondPar = document.querySelector(".second")
const meridiemPar = document.querySelector(".meridiem")
const datePar = document.querySelector(".date")
const dayPar = document.querySelector(".day")
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const updateTime = () => {
    const hour = new Date().getHours()
    const minute = new Date().getMinutes()
    const second = new Date().getSeconds()
    const meridiem = hour <= 12 ? "AM" : "PM"
    const date = (new Date().getDate())+"."+(new Date().getMonth()+1)+"."+(new Date().getFullYear())
    const day  = new Date().getDay()
    
    hourPar.innerText = `${hour % 12 < 10 ? "0"+ hour % 12 : hour % 12}`
    minutePar.innerText = `${minute < 10 ? "0"+ minute : minute}`
    secondPar.innerText = `${second < 10 ? "0"+ second : second}`
    meridiemPar.innerText = `${meridiem}`
    datePar.innerText = date
    dayPar.innerText = weekday[day]
}

updateTime()
window.addEventListener("load", ()=>{setInterval(updateTime, 1000)})