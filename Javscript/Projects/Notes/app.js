let textarea = document.querySelector("textarea");
let addbtn = document.querySelector(".add");
let delbtn = document.querySelector(".delete");

addbtn.addEventListener("click",()=>{
    Add();
});

textarea.addEventListener("keypress",(event)=>{
    if (event.key == "Enter"){
        Add()
    }
});


 

function Add(){
       if(textarea.value == ""){
        alert("write something first");
        return;
    }
    
    let output = document.querySelector(".output");
    output.classList.add("output");
    
    let Note = document.createElement("div");
    Note.classList.add("Note");
    
    let text = document.createElement("p");
    text.classList.add("text");
    text.innerText = textarea.value ;
   
    let btn = document.createElement("button"); 
    btn.classList.add("delete");
    btn.innerText = "Delete";
    btn.addEventListener("click",()=>{
        output.removeChild(Note);
    });
    

    Note.appendChild(text);
    Note.appendChild(btn);
    output.appendChild(Note);
    textarea.value = "";

}
