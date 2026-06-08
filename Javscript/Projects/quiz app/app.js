
// Data

let Questions =[{
    question: "what is the catpital of India ? ",
    options:["delhi","Mumbai","Pune","Jaipur"],
    answer:"delhi"
},{
    question:"Largest planet in our Solar System ? ",
    options : ["Earth","Mars","Jupiter","Venus"],
    answer : "Jupiter"
},{
    question: "Which language is used for web styling?",
    options: ["HTML", "CSS", "Python", "C++"],
    answer: "CSS"
},{
    question: "Which company created JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: "Netscape"
},{
    question: "Which HTML tag is used for images?",
    options: ["<div>", "<img>", "<a>", "<p>"],
    answer: "<img>" 
}];

// Global Values

let val = 0;
let finalScore = 0;
let userAnswers=[];

// First Iteration 

let container = document.querySelector(".container");
let heading = document.querySelector(".heading");
let nochange = document.querySelector(".nochange");   
let Num = document.createElement("div");
Num.innerText = `Question ${val + 1} / 5`;
   
let question = document.createElement("div");
question.innerText = Questions[val].question;

let options = document.createElement("div"); 
Questions[val].options.forEach((option)=>{
let input = document.createElement("input");
input.type = "radio";
input.name = "option";
        input.value = option;
        options.appendChild(input);
        let text = document.createElement("span");
        text.innerText = option;
        options.appendChild(text);
    });
let score = document.createElement("h2");
score.innerText = `Score : ${finalScore}`;

let btn = document.createElement("button");
btn.innerText = "Next";

container.appendChild(Num);
container.appendChild(question);
container.appendChild(options);
container.appendChild(score);
container.appendChild(btn);

btn.addEventListener("click",()=>{
   buttonEvent();
});

// Automation in the Question

function renderQuestion(){
container.innerHTML = "";

let Num = document.createElement("div");
Num.innerText = `Question ${val + 1} / 5`;

let question = document.createElement("div");
question.innerText = Questions[val].question;

let options = document.createElement("div"); 
Questions[val].options.forEach((option)=>{
    let input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = option;
    options.appendChild(input);
    let text = document.createElement("span");
    text.innerText = option;
    options.appendChild(text);
    });     

let score = document.createElement("h2");
score.innerText = `Score : ${finalScore}`;

let btn = document.createElement("button");
btn.innerText = "Next";

container.appendChild(Num);
container.appendChild(question);
container.appendChild(options);
container.appendChild(score);
container.appendChild(btn);

btn.addEventListener("click",()=>{
   buttonEvent();
});

}


function buttonEvent(){
 let selected = false;
    let Ans = document.querySelectorAll('input[type="radio"]');
    Ans.forEach((ans)=>{
        if(ans.checked){
            selected = true;
            userAnswers.push(ans.value);
        }
    })
    if(selected == false){
        alert("Select any of the answers!");
        return ;
    }
    checkAns();
    val++;

    if(val<= Questions.length - 1){
        if(val === Questions.length - 1 ){
        btn.innerText = "submit";
        }else{
        btn.innerText = "Next";
        }
        renderQuestion();
    }else{
        finalScreen();
    }
}


function checkAns(){
    
     if(userAnswers[val] == Questions[val].answer){
        finalScore += 5;
        
    }
    
}

function finalScreen(){
    container.innerHTML = "";
    heading.innerText = "Quiz Finished";
    
    let score = document.createElement("h2");
    score.innerText = `Your Score : ${finalScore}`;
    
    let btn = document.createElement("button");
    btn.innerText="Restart";
    
    container.appendChild(score);
    container.appendChild(btn);
    btn.addEventListener("click",()=>{
        Reset();
    })

}

function Reset(){
    val = 0;
    finalScore = 0;
    userAnswers =[];
    heading.innerText = "Quiz App";
    renderQuestion();
    
}
