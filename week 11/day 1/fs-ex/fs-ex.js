

const fs =require("fs");


// const data = fs.readFileSync("info","utf-8");
// console.log(data);

// fs.readFile("info.json",utf-8,(err,data) =>{
//     if (err)  console.log(err);
//     console.log(data);
// });
// console.log("after");
const users =[ {name:'Johan'},{name:'Marry'}];

// fs.watchFile("info",JSON.stringify(users), "utf-8",(err)  => {
//     if (err) return console.log(err);
//     console.log("file created");
// });

 fs.copyFile ('info.json','nagim.json',(err) =>{

 })











