import express from 'express';
import { authenticateToken } from '../middleware/authenticateToken.js';
import 'dotenv/config';

const router = express.Router();

let userTasks = {};

router.get('/', (req, res) => {  
  res.status(200).json(userTasks);
});

router.post('/', authenticateToken, (req, res) => {
  const newTask = req.body;
  if (!newTask.name || newTask.name.trim() === '') {
    return res.status(400).json({ error: 'Task name cannot be empty' });
  }

  const username = req.user.username;

  if (!userTasks[username]) {
    userTasks[username] = [];
  }

  userTasks[username].push(newTask);
  res.status(201).json(userTasks);
});

export default router;
