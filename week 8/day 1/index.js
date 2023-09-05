
// //Des

// let arr = ['ab','bcd','fih'];
// // const a = arr[0]
// // const b = arr [i]
// const [a, b,rest] =arr

// console.log(a,b,rest);

// let obj = {
//     name: 'Jhon',
//     email: 'jjjj@.com'
// }
//  const {email,name}= obj
//  console.log(name,email)

/* array method
 * forEach
 * some
 * every
 * map
 * filter
 * reduce
 * find
 * findIndex
 */


// find the smallest distance 2 numbers in arr
// [2,5,3,7,2,3,6,8,6] => 2

//find the smallest distance between 2 numbers in array
 //[2,5,3,7,2,3,6,8,6] 
//Orkhan Ibrahimli18:21
// for(let i = 0; i<arr.length; i++){
//     for(j = i+1; j<arr.length; j++){
//         if(arr[i] == arr[j]){
//             distance.push(j-i)
//         } 
//     }
//     console.log(Math.max(distance));
// }


// function minimumDistance(a) {
//     let distance = [];
//     for (let i = 0; i < a.length; i++) {
//       if(a.indexOf(a[i]) !== a.lastIndexOf(a[i])){
//         let min = a.lastIndexOf(a[i]) - a.indexOf(a[i])
//         distance.push(min)
//       }
//     }
//     return (distance.length === 0) ? -1 : distance.sort()[0]
//   }

// Exercise 
// Creat ab funtion that  get an arry of numbers as input and return 
// a new arry  with  all numbers  mlitiply by 2
// for example:
//Give this array [ 1,2,3,4]
// result [2,4,6,8]

// function map(arr){
//     arr.for
// }




// let users = ["eli", "adam", "dan", "john"];
  
// let email = users.map((item) => {
//   return item + "@gmail.com";
// });

// console.log(email);



// const people = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Smith' },
//     { firstName: 'Michael', lastName: 'Johnson' }
//   ];

//   const fullnames = people.map(item => {
//     return item.firstName + ", " + item.lastName;
//   })
   
  


//Exercise 
// Creat a function that get an arry of numbers

 
// function filter (arr){
//     arr.forEach 
// }



// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// // get all names that includes Sa
// return item.toLowerCase().includes("S".toLowerCase()); // item.startsWith('Sa')


// let arr = [2,5,10,100]

// const total = arr.reduce((total,item) => {
//     return total +item 
// },100)

// console.log('total =>t0tal');


// const people = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Smith' },
//     { firstName: 'Michael', lastName: 'Johnson' }
//   ];
// // find the index element with firstNme == Jane

// const index = people.find((item )=> item.firstName ==="Jane");
// console.log("index=>",index);

// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


function calDigit(num){
let arr= new String(num).split("");
let sum = 0;
for (x in arr){
sum += Number(arr[x])
}
if (sum <10)return sum;
console.log(sum)
return calDigit(sum)
}
console.log(calDigit(16));



// function calcDigit(num) {
//     let arr = new String(num).split("");
//     let sum = 0;
//     for(x in arr) {
//       sum += Number(arr[x])
//     }
    
//     if(sum < 10) return sum;
//     console.log(sum);
//     return calcDigit(sum)
//   }
//   function calcDigit2(num){
//     let arr = new String(num).split("");
//     let sum = arr.reduce((total,num)=>{
//       return total + Number(num)
//     },0)
  
//     return (sum < 10) ? sum : calcDigit2(sum)
//   }
  
//   console.log(calcDigit2(493193));













































