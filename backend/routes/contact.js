const express = require('express');
const router = express.Router();
const db = require('../db');

// POST contact message
router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields required' });
  }

  db.run('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)', [name, email, message], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, id: this.lastID });
  });
});

module.exports = router;