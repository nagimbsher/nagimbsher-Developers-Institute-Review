
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



const express = require("express");
const app = express();
const products = require("./data.js");

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

app.use(express.json()); // parse json body content

app.post("/api/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});



app.get("/api/products/:productID", (req, res) => {
  const id = Number(req.params.productID);
  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).send("Product not found");
  }
  res.json(product);
});



app.use(express.json()); // parse json body content

app.put("/api/products/:productID", (req, res) => {
  const id = Number(req.params.productID);
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    return res.status(404).send("Product not found");
  }
  const updatedProduct = {
    id: products[index].id,
    name: req.body.name,
    price: req.body.price,
  };
  products[index] = updatedProduct;
  res.status(200).json("Product updated");
});


app.use(express.json()); // parse json body content

app.delete("/api/products/:productID", (req, res) => {
  const id = Number(req.params.productID);
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    return res.status(404).send("Product not found");
  }
  products.splice(index, 1);
  res.status(200).json("Product deleted");
});



