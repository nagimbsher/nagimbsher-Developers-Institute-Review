// Instructions
//1- Create a promise that resolves itself in 4 seconds and returns a “success” string.
//2- How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
//3- Add code to catch errors and console.log ‘Ooops something went wrong’.

const promise = new Promise((resolve,reject)=>{
    setInterval(() => resolve("success"),4000);
});
// const promise = promise.resolve(
//     setTimeout(()=> a{
//         console.log("success");
//     },400
//     );
promise
.then((res) => console.log("Result:",res))
.catch((err) => console.rror("Oopa, something went wrong",err));