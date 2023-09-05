/* Exercise reverse
*  reverse each word in a given String
*  For example:
*  Given this 'word in a given String'
*  result 'drow ni a nevig gnirtS'
*  Do not use Array method 
*  Try not to use chatGPT :)
*/

// /* reverse a single word */



// function reverseWord(str) {
//     let returnStr = '';
//     /* loop in reverse order */
//     for(let i = str.length-1; i >= 0; i--){
//         returnStr += str[i] 
//     }
//     return returnStr;
// }
// /* get words from a given string */
// function reverseAll(str) {
//     let arr = str.split(" ");
//     console.log(arr);
//     let returnArr = [];
//     for(let i = 0; i < arr.length; i++){
//         returnArr.push(reverseWord(arr[i]));
//     }
//     return returnArr.join(' ');

// }

// console.log(reverseAll('reverse each word in a given String'));


// function x() {}

// const getName = function (name) {
//   return name;
// };
// getName("John");

// // es6
// // arrow function
// const getXY = (x, y) =>  x * y;

// getXY(3, 4);

// // console.log(a);
// // let a = 5



// foreach 

// const arr = [1,4,5,6,7];

// arr.forEach((item, index, newarr) =>{
//     console.log(item, index);
//     newarr[index] = item *2
// })

// console.log('arr=>', arr);

/* forEach */

//const arr = [1,4,5,6,7];

//arr.forEach( (item, indx, newarr) => {
//     console.log(item, indx);
//     newarr[indx] = item * 2
// })
// for(x in arr){
//     console.log('for in=>', x,arr[x]);
// }

// for(x of arr){
//     console.log('for of=>', x);
// }

// console.log('arr=>', arr);


/* forEach */

const arr = [
    {id:1, name:'iPhone', price:850},
    {id:2, name:'iPad', price:750},
    {id:3, name:'iWatch', price:650}
];

arr.forEach( (item,) => {

console.log('item>', item.id, item.name, item.price);

})



//some

//const arr = [1,2,3,4,5,6,7,8];

// let bol = arr.some((item )=> {
//     return item == 2
// });
// console.log('bol=>', bol);


//const words = ["wow","hey","bye"];

// Check if at least one element of the array starts with the letter 'h'
// //const words = ["wow","hey","bye"];


// const words = ["wow","hey","bye"];
// let hExist = words.some((item) => item.startsWith('w'))
// console.log('hExist=>',hExist);


// every

// let match = arr.every((item) => {
//     return item <= 8
// })
// console.log('every=>',match)



// function x(a){
//     function y(b){
//         return a * b
//     }
//     return y;
// }
// let cal = x(1.17);
// const VAT = 1.17
// console.log("cal=>",x(VAT)(100))
// console.log("cal=>",x(VAT)(300))
// console.log("cal=>",x(VAT)(200))

// // currying
// const sum = (a) => (b) => a + b;
// console.log(sum(4)(5));

// // compose

// const sum2 = (num) => num *2;
// const sum = (num) => num +1;
// const x = (a,b) => (c) => a (b(c))

// let calc = x(sum2,sum)(6);
// console.log('calc+>',calc);


// objects

// let a = 'name';
// let obj = {
//     //key:value
//     name:'Jhon',
//     last:'Due',
//     age:'24',
//     full: function(){
//         return this.name + " " + this.last
//     }
// }
// //let obj = new object();

// // console.log(obj.name)
// // console.log(obj['last']);

// // obj.city='Tel Aviv';
// // obj['address'] = 'Bezale' 

// console.log(obj.full());



// let name = 'John';
// let email = 'jjjjj@gmail';


// let obj = {
//     name,
//     email
// }

// //console.log(obj);


// for (x in obj ){
//     console.log(x,obj[x]);
// }
//  console.log('keys=>'),Object.keys(obj)
//  console.log('values=>'),Object.values(obj)
//  console.log('entries=>'),Object.entries(obj)


 // by value vs. by reference
//  //by value 
// let a = 10;
//  b = a;
//  b = 8;
//  a = [7,,8,9]

// // console.log('a=>',a, 'b=>,b');

// let arr = [1,2,3];
// let arr2 = [arr];
// arr2[1] = 5
// console.log('arr=>',arr, 'arr2=>,',arr2);


// let obj = {a:5}

// // let obj = Object.assign({},obj)
// let obj2 = {obj} 
// obj.a = 10
// obj.a = 'Nagim,'
// console.log('obj=>', obj,'obj2=>',obj2)


// let obj = {
//     a:5,
//     b: {
//         x:10
//     }
// }

// let json = JSON.stringify(obj);
// let obj2 = JSON.parse(json);
// console.log('json=>',json);
// obj2.bx = 20

// console.log('obj=>',obj, 'obj2', obj2)























































































