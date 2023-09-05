// 🌟 Exercise 3: User & Id
// Instructions
// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630] ]
const users ={user1: 18273, user2: 92833, user3: 90315};

// const entries = Object.entries(users);
// console.log("entries:",entries);
// const values = Object.values(users);
// console.log("values:",values);
// const keys = Object.keys(users);
// console.log("keys:",keys);

// const result = []
// values.forEach((id,index) => {
//     result.push([keys[index],id *2]);
// });

// console.log("result:",result);

const entries = Object.entries(users);
console.log("entries:",entries);

const result = [];
for (const [name,id] of entries){
    result.push([name,id * 2]);

}
 
console.log("result:",result);

