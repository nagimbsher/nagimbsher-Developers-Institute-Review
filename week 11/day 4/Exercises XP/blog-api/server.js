
// 🌟 Exercise 1: Building A RESTful API
// Instructions
// You’re tasked with building a RESTful API for a blog platform.
// Users should be able to create, read, update, and delete blog posts using different endpoints.

// Create a directory named blog-api.

// Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the express package by running npm install express in the terminal.

// Create a file named server.js.

// In server.js, require the express package and set up an Express app.

// Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.

// Implement the following routes using Express:
// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.

// Implement error handling for invalid routes and server errors.

// Start the Express app and listen on a specified port (e.g., 3000).



// server.js

// load http module
const http = require('http')

// load third party Express module
const express = require('express')
const app = express()

// define the routes
app.get('/', (req, res) => {
  res.send('Hello, this is my home Page')
})

// define the routes
app.post('/', (req, res) => {
  res.send('Hello, this is my h')
})

app.delete('/about', (req, res) => {
  res.send('Hello, this is my about Page')
})


// create the server
const server = http.createServer(app);

// server listen for any incoming requests
server.listen(3000);

console.log('My node.js web server is alive and running at port 3000')


//CRUD -READ  -GET - get one user - using params
app.get("/api/users/:id", (req, res) => {
  console.log("params=>", req.params);
  const { id } = req.params;
  const user = users.find((item) => item.id == id);
  if (!user) return res.status(404).json({ msg: "user not found" });
  res.json(user);
});

//http://example.com/api/users- create a new user - POST
//CRUD - CREATE -POST - create new user - using body
app.post("/api/users", (req, res) => {
  console.log("body=>", req.body);
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  res.json(users);
});

//CRUD - UPDATE  -PUT - update a user - using params & body
app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const index = users.findIndex((item) => item.id == id);

  if (index === -1) return res.status(404).json({ msg: "user not found" });

  users[index].name = name;
  users[index].email = email;

  res.json(users);
});

//http://example.com/api/users - delete - DELETE
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((item) => item.id == id);
  if (index === -1) return res.status(404).json({ msg: "user not found" });
  users.splice(index, 1);
  res.json(users);
});




