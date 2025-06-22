import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [token] = useState(localStorage.getItem('token'));
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  // Load blogs
  useEffect(() => {
    fetch('http://localhost:3001/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(() => setMessage('Failed to load blogs'));
  }, []);

  // Create blog
  const handleCreate = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, content })
    });
    const data = await res.json();
    if (res.ok) {
      setBlogs([data, ...blogs]);
      setTitle('');
      setContent('');
      setMessage('✅ Blog created');
    } else {
      setMessage(`❌ ${data.error}`);
    }
  };

  // Delete blog
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3001/api/blogs/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) {
      setBlogs(blogs.filter(b => b.id !== id));
      setMessage('🗑️ Blog deleted');
    }
  };

  return (
    <div className="admin-container">
      <h2>🛠️ Admin Blog Manager</h2>
      {message && <p>{message}</p>}

      <form onSubmit={handleCreate}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Blog title" required />
        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Blog content" required />
        <button type="submit">+ Create Blog</button>
      </form>

      <hr />
      <h3>📚 Existing Blogs</h3>
      {blogs.map(blog => (
        <div key={blog.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h4>{blog.title}</h4>
          <p>{blog.content}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
