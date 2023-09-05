// what is this - object
// console.log(this);

// window.document.getElementById('')

// let user = {
//     name:'John',
//     lname: 'Due',
//     full: function(){
//         return this.name + " " + this.lname
//     }
// }

// Class
class someclass {
  constructor() {}
  method1() {}
  method2() {}
}

class Fruit {
  constructor(value) {
    this.name = value;
  }
  getFruitName() {
    return this.name;
  }
  setFruitName(param) {
    this.name = param;
  }
}

class Apple extends Fruit {
    #color
    constructor(color){
        super('Apple')
        this.#color= color
    }
    getColor(){
        return this.#color
    }
}

let redapple = new Apple('Red');
let greenapple = new Apple('Green');

// console.log(redapple.getFruitName(), redapple.color);
// console.log(greenapple.getFruitName(), greenapple.getColor());


// Define User class, with username, age and a mothod to get user info

// Create an array to hold user instances
// Function to add a user to the array
// Function to display all users' information


// Define User class
class User {
    #username
    #age
    constructor(username, age){
        this.#username = username;
        this.#age = age;
    }

    getInfo(){
        return `Username: ${this.#username}, Age: ${this.#age}`
    }
}

// Create an array to hold user instances
const usersArray = [];

// Function to add a user to the array
function addUser(username,age){
    const newUser = new User(username,age);
    usersArray.push(newUser)
    console.log(usersArray);
}

function displayUsers(){
    for(const user of usersArray){
        console.log(user.getInfo());
    }
}

addUser('Alice',25);
addUser('Bob',30);
addUser('Eve', 22)

displayUsers()



// let apple = new Fruit('Aplle');
// let orange = new Fruit('Orange');

// console.log(apple.getFruitName());
// orange.setFruitName('Orange Jaffa')
// console.log(orange.getFruitName());

// let obj = {
//   name: "John",
//   email: "jjj@gmail.com",
//   address: {
//     city: "tel aviv",
//   },
// };
// let obj1 = {
//   age: 25,
// };

// /* Merging */

// // const obj3 = {...obj, ...obj1}
// // console.log(obj3);

// /* Spreading */
// const obj3 = { ...obj, username: "johnjohn", a: 1, name: "Marry" };
// console.log(obj3);

// const {
//   a,
//   name,
//   email,
//   username,
//   address: { city },
// } = obj3;
// // const {city} = address
// console.log(city);

// const users = {
//   user1: { age: 44, name: "picard" },
//   user2: { age: 12, name: "sisko" },
//   user3: { age: 109, name: "janeway" },
// }
// filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map
// [
//     { id: "user1", age: 44, name: "picard" },
//     { id: "user3", age: 109, name: "janeway" }
// ];

// const usersKeys = Object.keys(users);
// console.log(usersKeys);

// const adults = usersKeys.filter(key => users[key].age > 30).map(id => ({id,...users[id]}))
// console.log(adults);

// let keys = Object.keys(obj);
// // console.log('keys=>',keys);

// let values = Object.values(obj);
// // console.log('values=>',values);

// let entries = Object.entries(obj)
// // console.log('entries=>',entries);

// let arr = [0,5];
// const [a,b] = arr;

// for(let [a,b] of entries){
//     // console.log(a,b);
// }

// Object.entries(obj).forEach(([a,b])=>{
//     // console.log(a,b);
// })

// let obj1 = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }

// // 'my name is Rudolf the raindeer'

// const sentence = Object.entries(obj1).map(value => value.join(' ')).join(' ')
// console.log(sentence);

// Birthday Cake Candles
// This array are Birthday Cake Candles
// You can blow only the tallest candles
// let arr = [2,4,4,1]
// birthdayCakeCandles function will return
// how many candles you can blow

// function birthdayCakeCandles(arr) {
//     const maxNum = Math.max(...arr);
//     const filtered = arr.filter(item => {
//         return item === maxNum
//     })
//     return filtered.length
// }
// console.log(birthdayCakeCandles([2, 4, 4, 1,6]));

//[2,4,4,1]

/*
 * findIntersection function return an array that
 * contain the numbers exist in both strings from the array.
 * ["1,2,5,6,7", "2,5,7,8,15"] => [2,5,7]
 */

// function findIntersection(strArr) {
//   let arr1 = strArr[0].split(",");
//   let arr2 = strArr[1].split(",");

//   const filtered = arr1.filter((value) => {
//     return arr2.includes(value);
//   });
//   return filtered;
// }