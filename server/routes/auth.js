import express from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const router = express.Router();
const secretKey = process.env.SECRET_KEY;
let users = [];

router.get('/register', (req, res) => {
    res.status(200).json(users);
})

router.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  const token = jwt.sign({ username }, secretKey);

  users.push({ username, password, token });
  res.status(201).json({ token });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);

  if (!user) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  jwt.verify(user.token, secretKey, (err) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    res.status(200).json({ message: 'Login successful' });
  });
});

export default router;
