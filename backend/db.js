const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');

const db = new sqlite3.Database('./docodo.db', (err) => {
  if (err) {
    console.error('❌ DB connection failed:', err.message);
  } else {
    console.log('✅ Connected to SQLite DB');
  }
});

// USERS TABLE
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'user',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// BLOGS TABLE
db.run(`
  CREATE TABLE IF NOT EXISTS blogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    author TEXT,
    slug TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// CONTACTS TABLE
db.run(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Seed admin if not exists
const adminEmail = 'ameyakshirsagar02@gmail.com';
const adminPassword = 'Ameya@02';
const hashed = bcrypt.hashSync(adminPassword, 10);

db.get('SELECT * FROM users WHERE username = ?', [adminEmail], (err, row) => {
  if (err) {
    console.error('❌ Failed to check admin user:', err.message);
    return;
  }

  if (!row) {
    db.run(
      'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
      [adminEmail, hashed, 'admin'],
      (err) => {
        if (err) {
          console.error('❌ Failed to insert admin:', err.message);
        } else {
          console.log('✅ Admin user seeded');
        }
      }
    );
  } else {
    console.log('ℹ️ Admin already exists');
  }
});

module.exports = db;
