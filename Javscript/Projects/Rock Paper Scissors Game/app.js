let score = document.querySelector(".score");
let container = document.querySelector(".container");
let mypoints = 0;
let computerpoints = 0;
let arr =["Rock","Paper","Scissors"];
let myarr =[];

let playerScore = document.createElement("h5");
playerScore.innerText =`Your Socre : ${mypoints} `;
score.appendChild(playerScore);

let computerScore = document.createElement("h5");
computerScore.innerText =`Computer Score : ${computerpoints} `;
score.appendChild(computerScore);

let rock = document.createElement("button");
rock.innerText = "Rock";
rock.classList.add("btn");
container.appendChild(rock);

let paper = document.createElement("button");
paper.innerText = "Paper";
paper.classList.add("btn");
container.appendChild(paper);

let scissors = document.createElement("button");
scissors.innerText = "scissors";
scissors.classList.add("btn");
container.appendChild(scissors);

let myChoice = document.createElement("h5");
myChoice.innerText = ` You Chose :`;
container.appendChild(myChoice);

let computerChoice = document.createElement("h5");
computerChoice.innerText = "Computer Chose : ";
container.appendChild(computerChoice);

let notification = document.createElement("h5");
container.appendChild(notification);

rock.addEventListener("click",()=>{
    // console.log("rock button is clicked !");
    myarr.push("Rock");
    // console.log(myarr);
    myChoice.innerText = ` You Chose : Rock ` ;
    Comparison1();
    if(mypoints === 5){
    notification.innerText = "Player Wins The Match! Refresh Again.";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    } 
    if(computerpoints === 5){
    notification.innerText = "Computer Wins The Match! Refresh Again.";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    }
});

paper.addEventListener("click",()=>{
    // console.log("paper button is clicked !");
    myarr.push("Paper");
    // console.log(myarr);
    myChoice.innerText = ` You Chose : Paper ` ;
    Comparison2(); 
    if(mypoints === 5){
    notification.innerText = "Player Wins The Match! Refresh Again.";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    } 
    if(computerpoints === 5){
    notification.innerText = "Computer Wins The Match! Refresh Again.";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    }
});

scissors.addEventListener("click",()=>{
    // console.log("scissors button is clicked !");
    myarr.push("Scissors");
    // console.log(myarr);
    myChoice.innerText = ` You Chose : Scissors ` ;
    Comparison3();
    if(mypoints === 5){
    notification.innerText = "Player Wins The Match! Refresh Again.";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    } 
    if(computerpoints === 5){
    notification.innerText = "Computer Wins The Match! Refresh Again.";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    }
    
});

function Comparison1(){
    let idx = Math.floor(Math.random()*3);
    // console.log(arr[idx]);
    if(arr[idx] == "Rock"){
    //    console.log("Draw"); 
       notification.innerText = "Draw";
    } else if(arr[idx]== "Paper"){
        // console.log("computer Wins");
        notification.innerText = "computer Wins";
        computerpoints++;
        computerScore.innerText =`Computer Score : ${computerpoints} `;
    } else if(arr[idx] == "Scissors"){
        // console.log("You win");
        notification.innerText = "You Wins";
        mypoints++;
        playerScore.innerText =`Your Socre : ${mypoints} `;
    }
    computerChoice.innerText = `Computer Chose : ${arr[idx]} `;
}

function Comparison2(){
    let idx = Math.floor(Math.random()*3);
    // console.log(arr[idx]);
    if(arr[idx] == "Paper"){
        // console.log("Draw");
        notification.innerText = "Draw";
    } else if(arr[idx]== "Scissors"){
        // console.log("computer Wins");
        notification.innerText = "computer Wins";
        computerpoints++;
        computerScore.innerText =`Computer Score : ${computerpoints} `;
    } else if(arr[idx] == "Rock"){
        // console.log("You win");
        notification.innerText = "You Wins";
        mypoints++;
        playerScore.innerText =`Your Socre : ${mypoints} `;
    }
    computerChoice.innerText = `Computer Chose : ${arr[idx]} `;
}

function Comparison3(){
    let idx = Math.floor(Math.random()*3);
    // console.log(arr[idx]);
    if(arr[idx] == "Scissors"){
        // console.log("Draw");
        notification.innerText = "Draw";
    } else if(arr[idx]== "Rock"){
        // console.log("computer Wins");
        notification.innerText = "computer Wins";
        computerpoints++;
         computerScore.innerText =`Computer Score : ${computerpoints} `;
    } else if(arr[idx] == "Paper"){
        // console.log("You win");
        notification.innerText = "You Wins";
        mypoints++;
        playerScore.innerText =`Your Socre : ${mypoints} `;
    }
    computerChoice.innerText = `Computer Chose : ${arr[idx]} `;
}

