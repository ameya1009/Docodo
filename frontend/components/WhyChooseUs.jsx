import React from 'react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  return (
    <section className="main-card" data-aos="fade-up">
      <h2 className="main-title">Why Choose Docodo?</h2>
      <div className="card-grid">
        <div className="card">
          <div className="card-icon card-icon-doc">💡</div>
          <h3 className="card-title card-title-doc">Creative Strategy</h3>
          <p className="card-desc">Innovative ideas tailored to your brand's voice.</p>
        </div>
        <div className="card">
          <div className="card-icon card-icon-profile">⚡</div>
          <h3 className="card-title card-title-profile">Agile Delivery</h3>
          <p className="card-desc">Fast and flexible execution to match your pace.</p>
        </div>
        <div className="card">
          <div className="card-icon card-icon-settings">📈</div>
          <h3 className="card-title card-title-settings">Scalable Results</h3>
          <p className="card-desc">We build for impact that grows with you.</p>
        </div>
      </div>
    </section>
  );
}
