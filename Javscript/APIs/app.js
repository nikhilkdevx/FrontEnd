
// fetch(url)
// .then((res)=>{
// return res.json();
// }) 
// .then((data)=>{
// console.log("data1 = ",data.fact);
// return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2 = ",data2.fact);
// })
// .catch((err)=>{
//     console.log(err);
    
// });
// async function getFacts(){
//     try{
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
//     } catch(err){
//         console.log("error happend"); 
//     }
    
    
// }
// getFacts();

// let button = document.querySelector("button");

// button.addEventListener("click",async function(){
//  let facts = await getFacts();
// //  console.log(facts);
//  let p = document.querySelector("p");
//  p.innerText = facts;
 
// });
 
//  let url = "https://catfact.ninja/fact"

//  async function getFacts(){
//     try{
//     let res = await axios.get(url);
//     return(res.data.fact);
    
//     }catch(e){
//         return("error happend",e);
//     }
//  }

let button = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";

button.addEventListener("click",async () => {
    let Link = await GetImage();
    // console.log(Link);
    let img = document.querySelector("#result");
    img.setAttribute("src",Link);
});

async function GetImage(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    } catch(e){
        return("Image not found 404!");
    }
}
 
     

