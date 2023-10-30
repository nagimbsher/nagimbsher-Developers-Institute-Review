app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;
    const newBook = {
      id: books.length + 1,
      title,
      author,
      publishedYear,
    };
    books.push(newBook);
    res.status(201).json(newBook);
  });
  