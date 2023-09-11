// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// 1-Use Promise.resolve(value) to create a promise 
//that will resolve itself with a value of 3.
// 2-Use Promise.reject(error) to create a promise
// that will reject itself with the string “Boo!”
const promise1 = Promise.resolve(2);
const promise2 = Promise.reject("Boo");

promise2.then((res) => console.log(res)).catch((err) => console.error(err));