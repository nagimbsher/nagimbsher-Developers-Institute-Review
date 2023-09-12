//Promise.race()
//when you only want the result from the first
//resolved promise

let p1 = Promise.reject(111);

let p2 = Promise.resolve(222);

let p3 = new Promise((resolve,reject) => {
    setTimeout(resolve,100,333);
});

Promise.race([p3,p2,p1])
.then((result) =>{
    console.log('winning',result);
})
.catch((result ) =>{
    console.log(('failed',result))
})
  // Expected output: "222"



// different example


const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  });
  // Expected output: "two"
  