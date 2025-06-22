const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../db');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_here';
const ADMIN_EMAIL = 'ameyakshirsagar02@gmail.com'; // Only this user can post

// ✅ GET all blogs (public)
router.get('/', (req, res) => {
  db.all('SELECT * FROM blogs ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      console.error('❌ Blog fetch failed:', err.message);
      return res.status(500).json({ error: 'Failed to fetch blogs' });
    }
    res.json(rows);
  });
});

// ✅ POST blog (admin only)
router.post('/', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token missing' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      console.error('❌ Token invalid:', err.message);
      return res.status(403).json({ error: 'Invalid or expired token' });
    }

    if (user.username !== ADMIN_EMAIL) {
      return res.status(403).json({ error: 'Only admin can post blogs' });
    }

    const { title, content, author, slug } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const query = `INSERT INTO blogs (title, content, author, slug) VALUES (?, ?, ?, ?)`;

    db.run(query, [title, content, author || user.username, slug || null], function (err) {
      if (err) {
        console.error('❌ Failed to insert blog:', err.message);
        return res.status(500).json({ error: 'Failed to add blog post' });
      }

      res.status(201).json({
        id: this.lastID,
        title,
        content,
        author: author || user.username,
        slug,
        created_at: new Date().toISOString()
      });
    });
  });
});

module.exports = router;
