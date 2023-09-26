
//🌟 Exercise 7: Reading And Copying Files
//Instructions
//Create a directory named file-explorer.

// Inside the file-explorer directory, create a file named copy-file.js.

// In copy-file.js, use the fs module to read the content from a file named source.txt and then write the same content to a new file named destination.txt.

// Create another file named read-directory.js.

// In read-directory.js, use the fs module to read the list of files in a specified directory and display their names in the terminal.

// Open a terminal in the file-explorer directory.

// Run node copy-file.js to copy the content from source.txt to destination.txt.

// Run node read-directory.js to list the files in the directory.





const fs = require('fs');

fs.writeFile('source.txt', 'reated in Node.js',(err) =>{
    if(err){
        throw new Error(err);
    }
    console.log("File was written successfully");
});


fs.readFile('source.txt', 'utf8',(err, data) => {

    if(err){
        throw new Error(err);
    }
    console.log(data);
 })
