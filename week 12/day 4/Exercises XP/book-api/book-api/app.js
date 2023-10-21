// Import required modules
const express = require('express');
const app = express();

// Define the basic data structure for books (You can replace this with a database)
const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', publishedYear: 2021 },
  { id: 2, title: 'Book 2', author: 'Author 2', publishedYear: 2022 },
];

// Middleware to parse JSON in request body
app.use(express.json());

// Implement the "Read all" route
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Implement the "Read" route
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((b) => b.id === bookId);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Implement the "Create" route
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    res.status(400).json({ message: 'All fields are required' });
  } else {
    const newBook = {
      id: books.length + 1,
      title,
      author,
      publishedYear,
    };
    books.push(newBook);
    res.status(201).json(newBook);
  }
});

// Set up the server to listen on port 5000
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
