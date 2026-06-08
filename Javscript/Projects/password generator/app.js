let div = document.querySelector(".container");
let check1 = document.querySelector(".check1");
let result = document.querySelector(".result");
let uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowers = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*&~";
let finalPass = "";
let chars ="";

let passHead = document.createElement("h2");
passHead.innerText = "Password Generator";
div.appendChild(passHead);

let length = document.createElement("h5");
length.innerText = "Length";
div.appendChild(length);

let input = document.createElement("input");
input.placeholder = "Type length";
input.type = "Number";
div.appendChild(input);

let uppertext = document.createElement("p");
uppertext.innerText = "Uppercase";
check1.appendChild(uppertext);

let upper = document.createElement("input");
upper.type = "checkbox";
check1.appendChild(upper);

let lowertext = document.createElement("p");
lowertext.innerText = "Lowercase";
check1.appendChild(lowertext);

let lower = document.createElement("input");
lower.type = "checkbox";
check1.appendChild(lower);

let Num = document.createElement("p");
Num.innerText = "Number";
check1.appendChild(Num);

let Numcheck = document.createElement("input");
Numcheck.type = "checkbox";
check1.appendChild(Numcheck);

let sym = document.createElement("p");
sym.innerText = "Special Symbols";
check1.appendChild(sym);

let symbol = document.createElement("input")
symbol.type = "checkbox"
symbol.style.display="block";
symbol.style.marginBottom = "30px";
check1.appendChild(symbol);

let btn = document.createElement("button");
btn.innerText = "Generate Password";
check1.appendChild(btn);

btn.addEventListener("click",()=>{
console.log("generate button is clicked");
finalPass = "";
chars = "";
let n = input.value;
 if(upper.checked){
    chars += uppers;
    } 
    if(lower.checked){
    chars += lowers;
    }
    if(Numcheck.checked){
    chars += numbers;
    }
    if(symbol.checked){
    chars += symbols;
    }
while(finalPass.length < n){
  let val = Math.floor(Math.random()*chars.length);
  finalPass += chars[val]; 
}
Passgen.innerText = `Your Password is ${finalPass}`;
});
let Passgen = document.createElement("p");
result.appendChild(Passgen);
let res = document.createElement("h4");
res.innerText = "Password Generated";
result.appendChild(res);






