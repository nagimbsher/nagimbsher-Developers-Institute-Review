// 🌟 Exercise 3: File Management Using CommonJS Syntax
// Instructions
// Create a file named fileManager.js.

// Inside fileManager.js, define a module that exports functions for reading and writing files.
// Export functions named readFile and writeFile.
// Implement the readFile function to read the content of a specified file using the fs module.
// Implement the writeFile function to write content to a specified file using the fs module.

// Create a file “Hello World.txt” containing the sentence “Hello World !! “

// Create a file “Bye World.txt” containing the sentence “Bye World !! “

// Create another file named app.js.

// In app.js, import the functions from the fileManager.js module.

// Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.

// Run app.js and verify that the file reading and writing operations are successful.


const fs =require("fs");

try{
    fs.writeFileSync('data.tex','Create in Node.js');
    console.log("File written successfully");

}catch(e){
    console.log(e);
}

try{
    const data = fs.readFileSync('data.tex','utf8');
    console.log(data);
}catch(e){
    console.log(e)
}

module













// const fs =require("fs");


// const data = fs.readFileSync("info","utf-8");
// console.log(data);

// fs.readFile("info.json",utf-8,(err,data) =>{
//     if (err)  console.log(err);
//     console.log(data);
// });
// console.log("after");

// const users =[ {name:'Johan'},{name:'Marry'}];

// fs.watchFile("info",JSON.stringify(users), "utf-8",(err)  => {
//     if (err) return console.log(err);
//     console.log("file created");
// });

//  fs.copyFile ('info.json','nagim.json',(err) =>{

//  })


// const fs = require("fs/promises");

// fs.readFile("./hello.tex",  { encoding: "utf8" })
// .then ((res) => console.log(res))
// .catch(console.error);

// fs.writeFile("goodjob.tex", "good job my bro");
// fs.appendFile("goodjob.tex", "\ngood night");
// fs.unlink("goodjob.tex")

// async function handleFiles(){
// try {
// const res = await fs.readFile("./hello.tex",  { encoding: "utf8" });
// console.log(res);
// await fs.writeFile("goodjob.tex", "good job my bro");
// await fs.appendFile("goodjob.tex", "\ngood night");
// await fs.unlink("goodjob.tex");

// }catch (err){
// console.error(err);
// }

// }
// handleFiles();