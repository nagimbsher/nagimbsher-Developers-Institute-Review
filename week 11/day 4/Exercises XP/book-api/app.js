/*🌟 Exercise 2: Building A Basic CRUD API With Express.Js
Instructions
In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. Your task is to create routes to manage a collection of books.

Create a new directory named book-api.

Inside the book-api directory, initialize a new Node.js project and install the express package.

Create a new file named app.js in the book-api directory.

In app.js, import the express module and create an instance of an Express app.

Define a basic data array containing a few book objects. Each book object should have properties like id, title, author, and publishedYear.

Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.

Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.

Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. Inside the route handler, create a new book object with an incremented ID and the data from the request body. Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).

*/




const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req,res) =>{
//   res.send("book root")
// })
app.get('/', (req, res) => {
  const book = {
    title: 'How to win friends and influence people',
    authors: ['Dale Carnegie'],
    publisher: 'Pocket Books',
    year: '1936'
  }
 
  res.send(book)
})
 


app.get('/', (req, res) => {
  const books = {
    title: 'How to win friends and influence people',
    authors: ['Dale Carnegie'],
    publisher: 'Pocket Books',
    year: '1936'
  }
 
  res.send(books)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


