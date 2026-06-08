let todo=[];

let req = prompt("enter your request");
while( true){
    if (req=="quit"){
        alert("You Quit");
        break;
    }
    if(req=="list"){
        console.log("-----------");
        for(i=0;i<todo.length;i++)
        console.log(i,todo[i]);
        console.log("-----------");

    } else if(req=="add"){
       let a= prompt("what you want to add");
        console.log(todo.push(a));
        console.log("task added");
    }
      else if (req=="delete"){
       let idx =  prompt("enter that index no you want to delete");
     
       todo.splice(idx,1);
       alert("task deleted");
    } else{
        console.log("wrong request");
    }
         
     req = prompt("enter your request");
}    
