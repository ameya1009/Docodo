import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './Blogs.css';

function BlogForm({ onPost, token }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:3001/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content, author }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        onPost(data);
        setTitle('');
        setContent('');
        setAuthor('');
        setMessage('✅ Blog posted successfully!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      setLoading(false);
      setMessage('❌ Network error. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <h3>📝 Write a Blog</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content (Markdown supported)"
        required
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author (optional)"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Posting...' : 'Post Blog'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token') || '';

  // Decode token to get user info (basic check)
  let isAdmin = false;
  try {
    const decoded = JSON.parse(atob(token.split('.')[1]));
    if (decoded?.username === 'ameyakshirsagar02@gmail.com') {
      isAdmin = true;
    }
  } catch (err) {
    isAdmin = false;
  }

  useEffect(() => {
    fetch('http://localhost:3001/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch blogs:', err);
        setLoading(false);
      });
  }, []);

  const deleteBlog = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
    if (!confirmDelete) return;

    const res = await fetch(`http://localhost:3001/api/blogs/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();

    if (res.ok) {
      setBlogs(blogs.filter((b) => b.id !== id));
      alert('🗑 Blog deleted');
    } else {
      alert(`❌ ${data.error}`);
    }
  };

  return (
    <div className="blogs-container">
      <h2>📚 Our Blogs</h2>

      {/* ✅ Only show BlogForm to the special admin */}
      {isAdmin && (
        <BlogForm onPost={(newBlog) => setBlogs([newBlog, ...blogs])} token={token} />
      )}

      {loading ? (
        <p>Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p>No blogs yet.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h3>{blog.title}</h3>
            <p>
              <i>
                By {blog.author || 'Anonymous'} on{' '}
                {new Date(blog.created_at).toLocaleDateString()}
              </i>
            </p>
            <ReactMarkdown>{blog.content}</ReactMarkdown>

            {/* ✅ Show delete option only to admin */}
            {isAdmin && (
              <button onClick={() => deleteBlog(blog.id)}>🗑 Delete</button>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Blogs;
