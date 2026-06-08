//  let id= setInterval(()=>{
//     console.log("You will be ahead if not watched");
// },1000);

// console.log(id)
// let square = n => n*n;
// let id1= setInterval(()=>{
//     console.log("Hello World");
// },2000);
    
// setTimeout(()=>{
//     clearInterval(id1);
// },5000);

// let arrayAverage = (array)=>{
//     let total = 0;
//     for(let number of array){
//         total += number;

//     }
//     return total/ array.length;

// };
// let array=[3,5,6];
// console.log(arrayAverage(array));

// let Even = (n) =>{
//     if(n%2==0){
//         console.log("Even");
//     }
//     else{
//         console.log("odd");
//     }

// };
// let array = [1,2,3,4,5];
// // function print(el){
// //     console.log(el);
// // }
// // array.forEach(print);

// array.forEach((el)=>{
//     console.log(el);
// })

// let array=[{
//     Name:"Nik",
//     Marks:50 
// },{
//     Name:"kauk",
//     Marks:70 
// },{
//     Name:"Lauk",
//     Marks:70 
// }];
// let gpa = array.map((el) =>{
//     return el.Marks/10 ;
// });
// console.log(gpa);




// array.forEach((el)=>{console.log(el.Marks)});
// let num = [1,2,3,4];
// let triple = num.map((el)=>{
//     return el*3;
// })
// console.log(triple);

// let num = [1,2,3,4,5,6,7,8, 9,10];
// let even = num.filter((el)=>{
//     return (el %2 !=0);
// })
// console.log(even);
// let num = [7,3,5,2];
// let even = num.every((el)=>{
//     return (el%2 !=0);
// })
// console.log(even);
// let num =[2,3,4,5,12];
// let result = num.reduce((res,el)=>{
//     console.log(res);

//     return res+el}
// );
// console.log(result);

// let num =[1,3,4,5,6,7,9];
// let max= num.reduce((max,el)=>{
//     if(el>max){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);

// let mul=num.every((el)=>{return el%10 ==0});
// console.log(mul);
// function getmin(num){
// let min = num.reduce((res,el)=>{
//     if (el<res){
//         return el;
//     }else{return res;}
// });
// return res;
// }
// function sum(a,b=4){
//     return a+b;
// }
// let arr=[1,2,3,4,5,6];
// let square = arr.map(el=>{
//     return el*el;
// });
// let sum = square.reduce((res,el)=>{
//     return (res+el);
// });
// let average = sum/arr.length;
// console.log(square);
// console.log(sum);
// console.log(average);

// let arr =[2,4,6,7];
// let NewArr= arr.map((el)=>{
//     return el+5;
// });
// console.log(NewArr);

// let arr=["a","b","c"];
// let NewArr=arr.map(el=>{
//     return el.toUpperCase()
// });
// console.log(NewArr);
// let arr =[1,2,3];
// let arg =[4,5];
// let double=arg.map((el=>{
//     return 2*el;
// }));
// let NewArr=(...arr,...double);
// function doubleAndReturnArgs(arr,...args){
//     let double = args.map(el=> el*2);
//     return [...arr,...double];
// }
// let result = doubleAndReturnArgs([1,2,3],4,5);
// console.log(result);
// let obj1={
//     Name:"Nik",
//     Marks:20
// };
// let obj2 ={
//     Place:"bihar",
//     contact:23
// };

// function mergeObjects(obj1,obj2){
//     return {...obj1,...obj2};
// }
