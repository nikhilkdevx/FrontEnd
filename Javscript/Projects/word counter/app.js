let textarea = document.querySelector("textarea");
let cha = document.querySelector(".char");
let word = document.querySelector(".word");
let remain = document.querySelector(".remain");

textarea.addEventListener("input",()=>{
let wordCount = textarea.value ;
cha.innerHTML = wordCount.length;

let arr = wordCount.split(" ");
let filterArr= arr.filter((Element)=>{
    return Element != "";
});
word.innerHTML = filterArr.length;

let limit = 200;
remain.innerHTML = limit - wordCount.length;

if(textarea.value.length > 200){
textarea.value = textarea.value.slice(0,200);
textarea.style.color = "red";
}

if(limit - wordCount.length<0){
    remain.innerHTML = 0;
}


});