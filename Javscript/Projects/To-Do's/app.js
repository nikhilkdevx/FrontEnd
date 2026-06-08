// counter Practice

// let h1 = document.querySelector("h1");
// let btn1 = document.querySelector(".increase");
// let btn2 = document.querySelector(".decrease");
// let btn3 = document.querySelector(".reset");

// btn1.addEventListener("click", function(){
//     // console.log("increase button was clicked");
//     ValueIncrease();
    
// })

// btn2.addEventListener("click", function(){
//     // console.log("decrease button was clicked");
//     ValueDecrease();
// })

// btn3.addEventListener("click", function(){
//     // console.log("reset button was clicked");
//     ValueReset();
// })

// let value = 0;
// function ValueIncrease(){
    
//     value +=1;
//     h1.innerText = value;
        
// }
// function ValueDecrease(){
//     value -= 1;
//     h1.innerText = value;
// }

// function ValueReset(){
//     value = 0;
//     h1.innerText = value;
// }

// Dark Mode Toggle


// let btn = document.querySelector("button");
// let body = document.querySelector("body");
// btn.addEventListener("click", function(){
//     // console.log("toggle btn clicked");
//     dark();
// });

// function dark(){
//     body.classList.toggle("dark");

// }

// Dynamic Skill Section 
//very powerful and productive technique

// let arr = ["HTML","CSS","JAVASCRIPT","REACT","NODEJS"];
// let div = document.querySelector("#container");
// arr.forEach(element => {
//   let boxes= document.createElement("div");
//    boxes.textContent = element;
//    boxes.classList.add("skills"); 
//    div.appendChild(boxes);
// });

//Dynamic project cards but with array of objects
// let details = [{
//     title:"Html",
//     desc: "used for layout",
//     tech:"web dev"
// },{
//    title:"Css",
//     desc: "used for Styling",
//     tech:"web dev"  
// },{
//      title:"JS",
//     desc: "used for Functions",
//     tech:"web dev"
// },{
//      title:"React",
//     desc: "used for Framework",
//     tech:"web dev"
// }];
// let div = document.querySelector("#container");

// details.forEach(Element =>{
//     // outer Div skill card
//     skillCard(Element);
    
// // });

// function skillCard(Element){
    
//     let boxes = document.createElement("div");
        
//     boxes.classList.add("Cards");
//         div.appendChild(boxes);

//         let h2 = document.createElement("h2");
//         h2.classList.add("cardh2");
//         h2.innerText = Element.title;
//         boxes.appendChild(h2);



//         let p = document.createElement("p");
//         p.classList.add("cardp");
//         p.innerText = Element.desc;
//         boxes.appendChild(p);


//         let span = document.createElement("span");
//         span.classList.add("cardspan");
//         span.innerText = Element.tech;
//         boxes.appendChild(span);
// }

// let arr = [{
//     title : "HTML",
//     Tech: " web dev ",
//     desc : "used for layout making "
// },{
//    title : "CSS",
//     Tech: " web dev",
//     desc : "used for Styling " 
// },{
//     title : "JS",
//     Tech: " web dev",
//     desc : "used for functionality "
// },{
//     title : "React",
//     Tech: " web dev",
//     desc : "used for framework"
// }];

// let div = document.querySelector("#container");
// arr.forEach(element =>{
//     DivCreation(element); 
// });
// function DivCreation(element){
//     let box = document.createElement("div");
//     div.appendChild(box);
//     box.classList.add("Tech");

//     let h2 = document.createElement("h2");
//     box.appendChild(h2);
//     h2.innerText = element.title;
    
    
//     let p = document.createElement("p");
//     box.appendChild(p);
//     p.innerText = element.Tech;
    
//     let span = document.createElement("span");
//     box.appendChild(span);
//     span.innerText = element.desc;
// }

// To- D0 App
let inputMain = document.querySelector(".Tasks");
let Addbtn = document.querySelector(".add");
let Delbtn = document.querySelector(".Delete");
let p = document.querySelector("p");
let editingTask = null;
    
Addbtn.addEventListener("click",()=>{
    // console.log("add button was clicked");
    // console.log(inputMain.value);
    AddTask();
});

inputMain.addEventListener("keypress",(event)=>{
   if(event.key == "Enter"){
    AddTask();
   }

});

function AddTask(){
     if(editingTask){
            editingTask.innerText = inputMain.value;
            editingTask = null;
            inputMain.value ="";
            Addbtn.innerText = "Add Task";
            return;
        }

    let div = document.createElement("div");
    div.classList.add("work");
    
    let container = document.querySelector("#container");
    
    let listItems = document.createElement("p");
    listItems.innerText = inputMain.value;
    
    let checkbox = document.createElement("input");
    checkbox.type="checkbox";
    
    let btn = document.createElement("button");
    btn.classList.add("Delete");
    btn.innerText = "Delete";
    btn.addEventListener("click",()=>{
    // console.log("Delete button was clicked");
    if(checkbox.checked == true){
        container.removeChild(div);
    }else{
        alert("complete your Task First");
    }
    });

    let edit = document.createElement("button");
    edit.innerText = "Edit";
   

    checkbox.addEventListener("change",()=>{
       if(checkbox.checked == true){
        listItems.style.textDecoration = "line-through";
       }else{
        listItems.style.textDecoration = "none";
       } 
    });
    
    edit.addEventListener("click",function(){
               
        inputMain.value = listItems.innerText;
        editingTask = listItems;
        Addbtn.innerText = "Update Task";
    });
   
        

    div.appendChild(checkbox);
    div.appendChild(listItems);
    div.appendChild(edit);
    div.appendChild(btn);

    container.appendChild(div);
    inputMain.value = "";
}



