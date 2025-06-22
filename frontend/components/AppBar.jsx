import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Docodo_Logo.jpg';
import './AppBar.css';

function AppBar({ userInfo, onLogout, onLoginClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="appbar">
      <div className="appbar-content">
       <div className="brand">
  <Link to="/" className="brand" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
    <img src={logo} alt="Docodo Logo" className="brand-logo-img" />
  </Link>
</div>


        <div className="nav-wrapper">
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link className="nav-link" to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link className="nav-link" to="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link>
            <Link className="nav-link" to="/our-work" onClick={() => setMenuOpen(false)}>Our Work</Link>
            <Link className="nav-link" to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
            <Link className="nav-link" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link className="nav-link" to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
          </nav>
        </div>

        <div>
          {userInfo ? (
            <div className="profile-dropdown" ref={dropdownRef}>
              <button className="profile-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <div className="profile-avatar">{userInfo.username[0].toUpperCase()}</div>
                <span className="profile-name">{userInfo.username}</span>
                <span className="profile-arrow">&#9662;</span>
              </button>
              {dropdownOpen && (
                <div className="profile-menu">
                  <div className="profile-menu-header">
                    <div className="profile-menu-username">{userInfo.username}</div>
                    <div className="profile-menu-id">ID: {userInfo.id}</div>
                  </div>
                  <button className="profile-menu-logout" onClick={onLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
           <button className="login-btn" onClick={onLoginClick}>
             Login
           </button>

          )}
        </div>
      </div>
    </header>
  );
}

export default AppBar;
