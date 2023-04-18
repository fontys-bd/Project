import express from 'express';
import { Request, Response } from 'express';
//import postService from '../services/postService';

const router = express.Router();
const postService = require('../services/postService');

// Get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get post by ID
router.get('/posts/:id', async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Add new post
router.post('/posts', async (req, res) => {
  try {
    const post = await postService.addPost(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update post by ID
router.patch('/posts/:id', async (req, res) => {
  try {
    const post = await postService.updatePost(req.params.id, req.body);
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete post by ID
router.delete('/posts/:id', async (req, res) => {
  try {
    await postService.deletePost(req.params.id);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
