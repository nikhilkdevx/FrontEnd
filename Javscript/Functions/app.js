// // function Name(name , age) {
// //     // console.log(`name is ${name} and age is ${age}`);
// //     console.log(name, age);
// // }
// // Name("Nik",20);

// function Mul(i){
//     console.log(i*1);
//     console.log(i*2);
//     console.log(i*3);
//     console.log(i*4);
//     console.log(i*5);
//     console.log(i*6);
//     console.log(i*7);
//     console.log(i*8);
//     console.log(i*9);
//     console.log(i*10);
    
// }
// Mul(65); 

// function sumofn(n){
//     let sum =0;
//     for(let i=1;i<=n;i++){
//         sum = sum+i
        
//     }
//     return sum;
// }

// // // sumofn(6);
// // sumofn(7);
//     let arr = ["Nik","is","coding"];
//     function add(arr){
//     let result="";
//     for(let i=0;i<arr.length;i++){
//         result += arr[i];
//     }
//     return result;
// }  
// let arr =[2,3,4,5,6,9,10];
// let num = 8;
// let result =[];
// for (let i = 0;i < arr.length; i++){
//     if(arr[i]>num){
//         result.push(arr[i]);
//     }
// }
// console.log(result);
// let str ="aabbccddeeffgghtt";
// let resultstr = "";
// for (let i=0; i<str.length ; i++){
//     if(!resultstr.includes(str[i])){
//         resultstr += str[i];
//     }
// }
// console.log(resultstr);
// let country =["Hi", "No", "Yes"];
// let largestcountry ="";
// for (let i=0;i<country.length;i++){
//     if(country[i].length>largestcountry.length){
//         largestcountry = country[i] ;
//     }
// }
// console.log(largestcountry);
// let student = {
//     name : "Nik",
//     class : 14,
//     eng : 30,
//     math : 96,
//     phy : 97 ,
//     getAvg(){
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }
// student.getAvg();
 
// let str = "Apple";
// function CountVowel(str){
//     let count = 0;
//     for(let i=0;i<str.length;i++)
//     if(str.charAt(i)=="a"||
//     str.charAt(i)=="o"||
//     str.charAt(i)=="e"||
//     str.charAt(i)=="i"||
//     str.charAt(i)=="u"||
//     str.charAt(i)=="A"||
//     str.charAt(i)=="O"||
//     str.charAt(i)=="E"||
//     str.charAt(i)=="I"||
//     str.charAt(i)=="U"
// ){
//     count++;
// }
// return count;
// }

let start = 100;
let end = 200;
function generateRandom (start,end){
    let diff = end - start;
    return Math.floor(Math.random()*diff)+start;
} 