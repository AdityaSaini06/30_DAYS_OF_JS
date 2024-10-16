
const hours =document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(()=>{
    let currTime = new Date();

    hours.textContent = 
    (currTime.getHours() < 10 ? "0":" ")+ currTime.getHours();
    minutes.textContent =
    (currTime.getMinutes() < 10 ? "0" : "") + currTime.getMinutes();
    seconds.textContent =
    (currTime.getSeconds() < 10 ? "0" : "") + currTime.getSeconds();
},1000)
