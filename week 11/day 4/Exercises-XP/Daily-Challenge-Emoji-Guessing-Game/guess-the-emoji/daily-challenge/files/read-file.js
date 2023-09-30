const fs = require('fs')
fs.readFile('file-data.txt', (err, inputD) => {
   if (err) throw err;
      console.log(inputD.toString());
})

