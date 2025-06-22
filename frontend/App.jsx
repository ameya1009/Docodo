import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import OurWork from './pages/OurWork';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

import AppBar from './components/AppBar';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [userInfo, setUserInfo] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(!token);

  useEffect(() => {
    if (!token) {
      setUserInfo(null);
      setShowAuthModal(true);
      return;
    }

    console.log('🔐 Using token:', token);

    fetch('http://localhost:3001/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log('✅ /me response status:', res.status);
        if (!res.ok) throw new Error('Token invalid or expired');
        return res.json();
      })
      .then(data => {
        console.log('✅ Logged in as:', data);
        setUserInfo(data);
        setShowAuthModal(false);
      })
      .catch(err => {
        console.error('❌ /me error:', err.message);
        localStorage.removeItem('token');
        setToken('');
        setUserInfo(null);
        setShowAuthModal(true);
      });
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    setUserInfo(null);
    setShowAuthModal(true);
  };

  const handleAuthSuccess = (newToken) => {
    if (newToken) {
      localStorage.setItem('token', newToken);
      setToken(newToken);
    }
  };

  return (
    <Router>
      <div className="app-bg">
        <AppBar
          userInfo={userInfo}
          onLogout={handleLogout}
          onLoginClick={() => setShowAuthModal(true)}
        />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>

          {showAuthModal && (
            <AuthModal
              onAuthSuccess={handleAuthSuccess}
              onClose={() => setShowAuthModal(false)}
            />
          )}
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
