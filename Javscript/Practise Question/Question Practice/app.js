// // question 1

// let arr =["1","2","3","4","5","2"];
// let num = 2;
// for(let i=0;i<arr.length;i++){
//     if (arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// // question 2
// let num =prompt("enter your number");
// let count = 0;
// while(num>0){
//     count++;
//     num = Math.floor(num/10);
// }
// console.log(count);

// let num = prompt("enter your desired number");
// sum =0;
// while(num>0){
//     let digit = num%10;
//     sum+=digit
//     num = Math.floor(num/10);
    
// }
// console.log(sum);

// let num = 7;
// let result = 1;
// let i = 1;

// while(num>=i){
   
//  result = result*i;
//   i++;
// }

// console.log(result);

let arr=[2,5,7,9,36,96];
let max= arr[0];
for(let i=0;i<=arr.length;i++){
   if( arr[i]>max){
    max=arr[i];
}
    
}
console.log(`the largest number is ${max}`);