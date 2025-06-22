import React, { useState } from 'react';
import './LoginRegister.css';

// Utility to generate a color from username
function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360;
  return `hsl(${h}, 70%, 80%)`;
}

function UserAvatar({ username }) {
  if (!username) return null;
  return (
    <div
      className="user-avatar"
      style={{
        background: stringToColor(username),
        color: '#444',
        width: 48,
        height: 48,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        margin: '0 auto 12px auto',
        boxShadow: '0 2px 8px rgba(139,92,246,0.10)',
      }}
      title={username}
    >
      {username[0].toUpperCase()}
    </div>
  );
}

function LoginRegister({ onAuthSuccess }) {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);

  const BASE_URL = import.meta.env.VITE_API_BASE || 'http://localhost:3001';

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setShowAvatar(false);

    if (!username.trim() || !password) {
      setMessage('❌ Please enter username and password.');
      setLoading(false);
      return;
    }

    const url = isRegister
      ? `${BASE_URL}/api/auth/register`
      : `${BASE_URL}/api/auth/login`;

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || '❌ Something went wrong');
      } else if (isRegister) {
        setMessage('✅ Registered successfully! Please login.');
        setIsRegister(false);
      } else if (data.token) {
        localStorage.setItem('token', data.token);
        console.log('🔐 Token received:', data.token);
        setMessage('✅ Login successful!');
        if (onAuthSuccess) onAuthSuccess(data.token);
        setUsername('');
        setPassword('');
        setShowAvatar(true);
      } else {
        setMessage('⚠️ Login succeeded but no token returned!');
      }
    } catch (err) {
      console.error('❌ Network error:', err);
      setMessage('❌ Network error. Please try again.');
    }

    setLoading(false);
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setShowAvatar(false);
    setMessage('');
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleAuth} noValidate>
        <h2>{isRegister ? 'Register' : 'Login'}</h2>

        {showAvatar && username && <UserAvatar username={username} />}

        <input
          type="text"
          placeholder="Username"
          value={username}
          autoComplete="username"
          onChange={(e) => setUsername(e.target.value)}
          required
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          autoComplete={isRegister ? 'new-password' : 'current-password'}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Please wait...' : isRegister ? 'Register' : 'Login'}
        </button>

        <div className="auth-toggle">
          {isRegister ? (
            <span>
              Already have an account?{' '}
              <button
                type="button"
                onClick={toggleMode}
                disabled={loading}
                className="link-button"
              >
                Login
              </button>
            </span>
          ) : (
            <span>
              New here?{' '}
              <button
                type="button"
                onClick={toggleMode}
                disabled={loading}
                className="link-button"
              >
                Register
              </button>
            </span>
          )}
        </div>

        {message && <div className="auth-message">{message}</div>}
      </form>
    </div>
  );
}

export default LoginRegister;
