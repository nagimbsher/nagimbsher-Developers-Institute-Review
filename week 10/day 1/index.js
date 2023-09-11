const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve("result1");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject("result2");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve("result3");
  }, 3000);
});

Promise.all([promise1, promise2, promise3])
.then((results) => {
console.log(results);
}).catch((error) => {
console.log(error);
});
// result2

Promise.allSettled([promise1, promise2, promise3])
.then((results) => {
console.log(results);

// results.map(r => {
//   console.log(`{ status: ${r.status}, value: ${r.value}, reason: ${r.reason} }`);
// })
})
//  [
//   { status: 'fulfilled', value: 'result1' },
//   { status: 'rejected', reason: 'result2' },
//   { status: 'fulfilled', value: 'result3' }
// ]


Promise.race([promise1, promise2, promise3])
.then((results) => {
console.log(results);
})
.catch((error) => {
console.log(error);
});
//result1




// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this
// exercise (but not y).
// The input string will only consist of lower case letters
// and/or spaces.

// "The input string will only consist of lo

// function checker (string) {
//     let arr = [...string]
//     let arr2 = arr.filter(value => ['a','e','i','o','u'].includes(value))
//     console.log(arr2.length)
// }


//fibonacci

//promises methods and async await

// const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );
  
//   console.log(fetchPromise);
  
//   fetchPromise.then((response) => {
//     console.log(`Received response: ${response.status}`);
//   });
  
//   console.log("Started request…");


// const p = newPromise((resolve, reject) => {
//     if (true){
//         res('hi')
//     }else
//     reject(bye);

// });

// p.then ((data) =>{
// return data+"!";

// })
// .then ((data) =>{
//     return data +'#';
//     console.log(data);
// })
// .ctch((e) =>{
//  console.log('err=>',e)
// })



// const promise1 = new Promise((resolve,reject) => {
//     resolve('Resolve promise1')
//   });
//   const promise2 = new Promise((resolve,reject) => {
//     resolve('Reject promise2')
//   });
//   const promise3 = new Promise((resolve,reject) => {
//     resolve('Resolve promise3')
//   });

//promise all ()
// Promise.allSettled()
//promise race()
//Promise all

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// // Expected output: Array [3, 42, "foo"]



// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, 'one');
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'two');
// });

// Promise.race([promise1, promise2]).then((value) => {
//   console.log(value);
//   // Both resolve, but promise2 is faster
// });
// // Expected output: "two"



 
fetch ("https://jsonplaceholder.typicode.com/users")
.then((res) =>{
  return res.json();
})
.then((data) =>{
  console.log(data);
})
.catch((err) =>{
  console.log(err);
});




























