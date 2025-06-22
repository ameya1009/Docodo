import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Docodo</h2>
          <p>Empowering brands through tech, creativity, and strategy.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/our-work">Our Work</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="#" aria-label="LinkedIn" className="footer-icon">🔗 LinkedIn</a>
          <a href="#" aria-label="Twitter" className="footer-icon">🐦 Twitter</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Docodo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
