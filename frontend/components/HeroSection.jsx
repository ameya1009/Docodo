import React from 'react';
import './HeroSection.css';

export default function HeroSection({ title, subtitle, buttonText, buttonLink }) {
  return (
    <section className="hero-section reusable-hero">
      <div className="hero-content" data-aos="fade-up">
        <h1 className="hero-title">
          {title}
        </h1>
        <p className="hero-subtitle">{subtitle}</p>
        {buttonText && buttonLink && (
          <a href={buttonLink} className="hero-btn">{buttonText}</a>
        )}
      </div>
    </section>
  );
}
