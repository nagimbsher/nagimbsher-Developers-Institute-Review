// The Promise.allSettled() static method takes an iterable of 
// promises as input and returns a single Promise. This returned 
// promise fulfills when all of the input's promises settle 
// (including when an empty iterable is passed), with an
//  array of objects that describe the outcome of each promise.




const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result.status)));

// Expected output:
// "fulfilled"
// "rejected"
