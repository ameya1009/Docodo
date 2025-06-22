import React from 'react';
import './CTASection.css';

export default function CTASection({ headline, text, buttonText, buttonLink }) {
  return (
    <section className="cta-section" data-aos="fade-up">
      <h2>{headline}</h2>
      <p>{text}</p>
      <a href={buttonLink} className="hero-btn">{buttonText}</a>
    </section>
  );
}