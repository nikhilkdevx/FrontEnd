

// //  

// // function saveToDb(data,success,failure){
// //     let timeInterval = Math.floor(Math.random()*10 + 1);
// //     if(timeInterval>4){
// //         success();
// //     } else{
// //         failure();
// //     }
// // }

// // saveToDb("nik",()=>{
// //     console.log("success ! data was saved");
// //     saveToDb("xyz",()=>{
// //         console.log("success 2 ! data was saved");
// //         saveToDb("abc",()=>{
// //             console.log("success 3 ! data was saved");
// //         },()=>{
// //             console.log("failure3! Data was not saved");
// //         })
// //     },()=>{
// //         console.log("failure2! Data was not saved");
// //     });
// // },()=>{
// //     console.log("failure! Data was not saved");
// // });

// // function saveToDb(data){
// //     return new Promise((resolve,reject) => {
// //         let timeInterval = Math.floor(Math.random()*10 + 1);
// //         if(timeInterval > 4){
// //             resolve("success ! Data was Saved ");
// //         } else {
// //             reject("Failure ! Data was not Saved");
// //         }
    
// //     });
// // }

// // saveToDb("abc")
// //     .then((result)=>{
// //     console.log("promise solved");
// //     console.log(result);
// //     return saveToDb("xyz")
    
// //         .then((result)=>{
// //         console.log("data 2 was saved");
// //         console.log(result);
// //             return saveToDb("Nik")
// //             .then((result)=>{
// //             console.log("data 3 saved");
// //             console.log(result);
// //             });
// //     });
// //         })
// //     .catch((error)=>{
// //     console.log("promise rejected");
// //     console.log(error);
// // });


// // setTimeout(function(){
// //     h1.style.color = "blue";
// // },1000);

// // setTimeout(function(){
// //     h1.style.color = "orange";
// // },2000);
// // setTimeout(function(){
// // h1.style.color = "pink";
// // },3000)
// function ColorChange(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve("color changed!");
//         },delay);
//     }); 
// }
// ColorChange("red",1000)
// .then(()=>{
//     ColorChange("pink",1000)
//     .then(()=>{
//         ColorChange("orange",1000)
//         .then(()=>{
//             ColorChange("blue",1000)
//             .then(()=>{
//                 ColorChange("yellow",1000)
//             })
//         })
//     })
// })
// .catch(()=>{
//     console.log("sorry! no color changed");
// });
//  async function greet(){
//     throw "error";
//     return "hi nik";
//  }
// greet ()
// .then ((result)=>{
//     console.log("success");
//     console.log(result);
// })
// .catch((err)=>{
//     console.log("failure");
//     console.log("error happened");
// });

// let hemlo = async ()=>{
//     console.log("5");

// }
//  function getNum(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             let num= Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
//  }
 
// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }
let h1=document.querySelector("h1");
function colorchange(color,delay){
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            let num = Math.floor(Math.random()*6 + 1);
            if (num< 3){
                reject();
            }
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve();
        },delay);
    });
}
async function changecolor(){
    try{
        await colorchange("red",1000);
    await colorchange("orange",1000);
    await colorchange("pink",1000);
    await colorchange("blue",1000);
    await colorchange("yellow",1000);
    await colorchange("black",1000);

    }
    
    catch(err){
        console.log(err);
        console.log("err caught");
    }

    let a = 5
    console.log(a+5);
}
changecolor();