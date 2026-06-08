let input = document.querySelector("input");
let expression = "";

let seven = document.querySelector(".seven");
seven.addEventListener("click",()=>{
   expression += "7"; 
   
   input.value = expression;
  
});

let eight = document.querySelector(".eight");
eight.addEventListener("click",()=>{
    expression += "8";
    
    input.value = expression;
});

let nine = document.querySelector(".nine");
nine.addEventListener("click",()=>{
     expression += "9";
     input.value = expression;
});

let divide = document.querySelector(".divide");
divide.addEventListener("click",()=>{
     expression += "/";
    input.value = expression;
});

let four = document.querySelector(".four");
four.addEventListener("click",()=>{
     expression += "4";
     input.value = expression;
});

let five = document.querySelector(".five");
five.addEventListener("click",()=>{
     expression += "5";
     input.value = expression;
});

let six = document.querySelector(".six");
six.addEventListener("click",()=>{
    expression += "6";
   input.value = expression;
});

let mul = document.querySelector(".mul");
mul.addEventListener("click",()=>{
    expression += "*";
     input.value = expression;
});

let one = document.querySelector(".one");
one.addEventListener("click",()=>{
     expression += "1";
     input.value = expression;
});

let two = document.querySelector(".two");
two.addEventListener("click",()=>{
    expression += "2";
    input.value = expression;
});

let three = document.querySelector(".three");
three.addEventListener("click",()=>{
    expression += "3";
   input.value = expression;
});

let sub = document.querySelector(".sub");
sub.addEventListener("click",()=>{
    expression += "-";
     input.value = expression;
});

let clear = document.querySelector(".clear");
clear.addEventListener("click",()=>{
    console.log("clear");
    expression = ""; 
    input.value = expression; 
});

let zero = document.querySelector(".zero");
zero.addEventListener("click",()=>{
    expression += "0";
    input.value = expression;
});

let equal = document.querySelector(".equal");
equal.addEventListener("click",()=>{
    console.log(expression);
    input.value = eval(expression);   
});

let add = document.querySelector(".add");
add.addEventListener("click",()=>{
    expression += "+";
    input.value = expression;
});
