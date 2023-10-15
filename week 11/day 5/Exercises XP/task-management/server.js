//REST API Node.js
express = require('express'); // requre the express framework
 app = express();
 fs = require('fs'); //require file system object


//Step 1: Create a new user variable
 user = {
    "user5": {
        "id":5,
        "firstname":"Liudmyla",
        "lastname":"Nagorna",
        "email":"mila@gmail.com"
      },
} 



//The addUser endpoint
app.post('/addUser', function(req, res){
    //Step 2: read existing users
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        data = JSON.parse(data);
        //Step 3: append user variable to list
        data["user5"] = user["user5"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})


// Endpoint to Get a list of users
app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})

  
//Endpoint to get a single user by id
app.get('/:id', function (req, res) {
    // First retrieve existing user list
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        users = JSON.parse( data );
        user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })


  //Code to delete a user by id
   id = 3;
  app.delete('/deleteUser', function (req, res) {
     // First retrieve existing users
     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + 3];
         
        console.log( data );
        res.end( JSON.stringify(data));
     });
  })


// Create a server to listen at port 8080
 server = app.listen(3000, function(){
    host = server.address().address
    port = server.address().port
    console.log("REST API app listening at http", host, port)
})



// function saveUsers() {
//   try{
//     fs.writeFlesSync (usersFilePath, JSON.stringify(users, null), "utf-8");

//   }catch(error){
//     console.error("Error writing tasks file:",error);
//   }
// }
//saveUsers()