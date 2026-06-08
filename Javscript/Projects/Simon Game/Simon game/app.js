let GameStart = false;
let GameSeq = [];
let UserSeq = [];
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["pink","lightseagreen","orange","lightblue"];






document.addEventListener("keypress",function(){
    if(GameStart == false){
        GameStart = true;
 
        // console.log("key was pressed");
        LevelUp();
    }
    
    
    
});

function LevelUp(){
    UserSeq = [];
    level ++;
    h2.innerText = `Level ${level}`;
    let score = document.querySelector(".score");
    score.innerText = `Score = ${level }`;
    let randidx = Math.floor(Math.random()*4);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log(randcolor);
    // console.log(randbtn);
    GameSeq.push(randcolor);
    // console.log(GameSeq);
    btnflash(randbtn);
   

}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },400);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);

}
function CheckAns(idx){
    if(UserSeq[idx]=== GameSeq[idx]){
        if(UserSeq.length ==GameSeq.length){
            setTimeout(LevelUp(),1000);
        }
    } else{
        h2.innerHTML = `Game Over ! Your Score was <b>${level}</b> <br> Press Any Key to Start Again.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
         document.querySelector("body").style.backgroundColor = "white";   
        },150)
        reset();
    }
}


function btnpress(){
    let btn = this;
    userflash(this);
    usercolor = btn.getAttribute("id");
    UserSeq.push(usercolor);
    CheckAns(UserSeq.length - 1);

}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    GameStart = false;
    GameSeq = [];
    UserSeq = [];
    level = 0;
}