let arr = [];
let val = 0;
let heading = document.querySelector(".heading");
let container = document.querySelector(".container");
let transaction = document.querySelector(".transaction");
let Payment = document.querySelector(".payment");
let amount = 0;

let input = document.createElement("input");
input.type="text";
input.placeholder = "Enter Exp Name";

let amountinput = document.createElement("input");
amountinput.type="number";
amountinput.placeholder = "enter your Amount";

let h2 = document.createElement("h2");
h2.innerText = "Expense Tracker";
heading.appendChild(h2);
let h3 = document.createElement("h2");
h3.innerText = `Expense Name = `;

let h4 = document.createElement("h4");
h4.innerText = `Amount = ₹ `;

let btn = document.createElement("button");
btn.innerText = "Add";

let trans = document.createElement("h2");
trans.innerText = "Transaction";

let total = document.createElement("h5");
Payment.appendChild(total);

container.appendChild(h3);
container.appendChild(input);
container.appendChild(h4);
container.appendChild(amountinput);
container.appendChild(btn);

transaction.appendChild(trans);

btn.addEventListener("click",()=>{
    btnEvent();
    
});

function btnEvent(){
    
    let obj = {Name : input.value ,
               Amount : Number(amountinput.value)
    }
    arr.push(obj);
    console.log(arr);
    amount += obj.Amount ;
    total.innerText = `Total Bill : ${amount}`;
    input.value = "";
    amountinput.value = "";
    let NewExp = document.createElement("h5");
    NewExp.innerText = `Expense Name : ${arr[val].Name}`;

    let NewAmount = document.createElement("h5");
    NewAmount.innerText = `Amount : ₹ ${arr[val].Amount} `;
    
    let Delbtn = document.createElement("button");
    Delbtn.innerText = "Delete";

    transaction.appendChild(NewExp);
    transaction.appendChild(NewAmount);
    transaction.appendChild(Delbtn);
    
    Delbtn.addEventListener("click",()=>{
        amount -= obj.Amount;
        total.innerText = `Total Bill : ${amount}`;
        transaction.removeChild(NewExp);
        transaction.removeChild(NewAmount);
        transaction.removeChild(Delbtn); 
    });
    val++;
    
}





