import express from 'express';
import { Request, Response } from 'express';
//import userService from '../services/userService';

const router = express.Router();
const userService = require('../services/userService');

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Get user by ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
});

// Add new user
router.post('/users', async (req, res) => {
  try {
    const user = await userService.addUser(req.body);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Update user by ID
router.patch('/users/:id', async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Delete user by ID
router.delete('/users/:id', async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
