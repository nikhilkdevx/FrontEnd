let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"


let btn = document.querySelector("button");

btn.addEventListener("click",async function(){
    
    let word = document.querySelector("input").value;
    // console.log(word);
    

    let wordArr =  await getWord(word);
    // console.log(wordArr);
    show(wordArr);
    
});

function show(wordArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(wor of wordArr){
        console.log(wor.word);
    }
    let li = document.createElement("li");
    li.innerText = wor.word;
    list.appendChild(li);
}
 
async function getWord(word){
    try{
        let res = await axios.get(url+word);
        return res.data;
    }catch(e){
        console.log("error",e);
        return [];
    }
}