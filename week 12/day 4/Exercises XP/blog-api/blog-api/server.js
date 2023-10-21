const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Set the port

// Middleware to parse JSON in request body
app.use(express.json());

// Database connection (You need to replace the placeholders with your actual database credentials)
const { Pool } = require('pg');
const pool = new Pool({
  user: 'uxmohmcw',
  host: 'arjuna.db.elephantsql.com',
  database: 'uxmohmcw',
  password: 'pYIaSAvA2JFfhv2UkeKF2I4aWdfP51-1',
  port: 5432, 
});

// Implement routes for CRUD operations
const postsRouter = require('./server/routes/posts');
app.use('/posts', postsRouter);

// Implement error handling for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Implement server error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the Express app and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
