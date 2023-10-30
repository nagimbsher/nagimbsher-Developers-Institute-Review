const express = require('express');
const router = express.Router();


// Implement routes for CRUD operations
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('./controllers/posts');

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
