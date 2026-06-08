let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let display = document.querySelector(".clock");

let seconds = 0;
let minutes = 0;
let timer;

start.addEventListener("click",()=>{
    if(timer){
        return;
    }
    timer = setInterval(() => {
        seconds++;
        if(seconds == 60){
            minutes++;
            seconds = 0;
        }
        let formattedseconds;
        if(seconds < 10){
            formattedseconds = `0${seconds}`;
        }else{
            formattedseconds = seconds;
        }
        let formattedMinutes;
        if(minutes < 10){
            formattedMinutes = `0${minutes}`;
        }else{
            formattedMinutes = minutes;
        }
        
        display.innerHTML = `${formattedMinutes}:${formattedseconds}`;
    }, 1000);
    
});

stop.addEventListener("click",()=>{
    clearInterval(timer);
    timer = null;
});

reset.addEventListener("click",()=>{
    seconds = 0;
    minutes = 0;
    display.innerHTML = `${minutes}:${seconds}`;
    clearInterval(timer);
    timer = null;
});