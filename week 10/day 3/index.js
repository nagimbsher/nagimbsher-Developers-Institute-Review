 
// fetch ("https://jsonplaceholder.typicode.com/users")


// .then((res) =>{
//   return res.json();
// })
// .then((data) =>{
//   console.log(data);
// })
// .catch((err) =>{
//   console.log(err);
// });


// fetch ("https://jsonplaceholder.typicode.com/posts?userId=2")

// .then((res) =>{
//   return res.json();
// })
// .then((data) =>{
//   console.log(data);
// })
// .catch((err) =>{
//   console.log(err);
// });


//|||||||||||

// GET - get data - CRUD - R - Reading data

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "GET",
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// // POST - CRUD - C - Create a resource
// const a = fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "my title",
//     body: "lorum epsum dolore sit amet",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json",
//   },
// });

// // a.then(res=> res.json())
// // .then(data => {
// //     console.log(data);
// // })

// // PUT - CRUD - U - Update a resurce
// const b = fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 2,
//     id: 1,
//   }),
//   headers: {
//     "Content-type": "application/json",
//   },
// });

// // b.then(res=> res.json())
// // .then(data => {
// //     console.log(data);
// // })


// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:'DELETE'
// })
// .then(res=>res.json())
// .then(data => {
//     console.log(data);
// })



//||||||||||||||


//Async / Await

 async function simpleSaync(){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(2)
        },2000) 
    })
}
 //simpleSaync();
 //.then (d=>console.log(d))
//console.log('x=>',x)

async function x (){
    try{
        console.log('waiting....');
    const  a = await simpleSaync()
    console.log(a);
    console.log('resolved');


    }catch(error) {
        console.log('error=>',error);
    }
}
 x()



//||||||||



fetch ('https://jsonplaceholder.typicode.com/users')
.then(res =>res.json())
.then(data=>{
    console.log(data);
})
.catch(e=>{
    console.log(e);
})

async function getdate(){
    try{
        const res = await fetch ('https://jsonplaceholder.typicode.com/users');
        const date = await res.json()
        console.log('data=>',date);
    }catch(error){
        console.log('error=>',error);
    }
}
getdate()




//||||||||||||

// const timeout = async (miliseconds,id) =>  {
// await new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         console.log("Done!");
//         resolve();

//     }, miliseconds);
// });
// };
// //Warning!!
// //forEach
// async function x (){
//     console.log('Before','Done!');
//     ['first','sexond','third'].forEach(async(item) =>{
//        await timeout(2000,item)
//     })
//     console.log('after','Done!');
// }
// x()



//const x =async () =>{

//}

//const y = async fuction(){

//}



// const timeout = async (miliseconds,id) =>  {
//     await new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("Done!");
//             resolve();
    
//         },miliseconds);
//     });
//     };
//     //Warning!!
//     //forEach
//     async function x (){
//         console.log('Before','Done!');
//         // ['first','sexond','third'].forEach(async(item) =>{
//         //    await timeout(2000,item)
//         // })
//         for (item of ['first', 'second' ,'third']){
//             await timeout(2000,item)
//         }
//         console.log('after','Done!');
//     }
//     x()
    






