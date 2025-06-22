import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | Docodo - Digital Transformation & Branding</title>
        <meta
          name="description"
          content="Docodo is your creative partner for digital transformation, branding, and growth. We help brands soar with innovative solutions."
        />
      </Helmet>

      {/* Hero Section */}
      <header className="hero-section" id="home">
        <div className="hero-overlay" data-aos="fade-up">
          <h1 className="hero-title">
            We Build Brands That <span className="highlight">Soar</span>
          </h1>
          <p className="hero-subtitle">
            Docodo is your creative partner for digital transformation, branding, and growth.
          </p>
          <Link to="/contact" className="hero-btn">Let’s Connect</Link>
        </div>
      </header>

      {/* What We Do Section */}
      <section className="features-section" data-aos="fade-up">
        <h2 className="features-title">What We Do</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3 className="feature-title">Branding & Identity</h3>
            <p className="feature-desc">Crafting memorable brands that stand out in the digital world.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3 className="feature-title">Web Development</h3>
            <p className="feature-desc">Building fast, responsive, and beautiful websites for your business.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📢</div>
            <h3 className="feature-title">Digital Marketing</h3>
            <p className="feature-desc">Helping you reach and grow your audience with smart strategies.</p>
          </div>
        </div>
      </section>

      {/* Welcome Card */}
      <section className="main-card" data-aos="fade-up">
        <h2 className="main-title">Welcome to Docodo!</h2>
        <p className="main-desc">Your one-stop solution for digital transformation.</p>
      </section>
    </>
  );
}

export default Home;