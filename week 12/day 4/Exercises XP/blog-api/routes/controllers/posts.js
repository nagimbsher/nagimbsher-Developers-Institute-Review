const db = require('../models/db');

// Get all blog posts
const getAllPosts = async (req, res, next) => {
  try {
    const query = 'SELECT * FROM posts';
    const { rows } = await db.query(query);
    res.json(rows);
  } catch (error) {
    next(error);
  }
};

// Get a specific blog post by ID
const getPostById = async (req, res, next) => {
  const postId = req.params.id;
  try {
    const query = 'SELECT * FROM posts WHERE id = $1';
    const { rows } = await db.query(query, [postId]);
    if (rows.length === 0) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    next(error);
  }
};

// Create a new blog post
const createPost = async (req, res, next) => {
  const { title, content } = req.body;
  try {
    const query = 'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *';
    const { rows } = await db.query(query, [title, content]);
    res.status(201).json(rows[0]);
  } catch (error) {
    next(error);
  }
};

// Update an existing blog post by ID
const updatePost = async (req, res, next) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  try {
    const query = 'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *';
    const { rows } = await db.query(query, [title, content, postId]);
    if (rows.length === 0) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    next(error);
  }
};

// Delete a blog post by ID
const deletePost = async (req, res, next) => {
  const postId = req.params.id;
  try {
    const query = 'DELETE FROM posts WHERE id = $1 RETURNING *';
    const { rows } = await db.query(query, [postId]);
    if (rows.length === 0) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };
