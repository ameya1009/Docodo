import React from 'react';
import './Careers.css';

function Careers() {
  return (
    <section className="careers-section">
      <div className="careers-header">
        <h2>Careers</h2>
        <p>Join our team of creative thinkers and doers. Explore open positions below!</p>
      </div>

      <div className="careers-grid">
        <div className="careers-card" tabIndex="0" aria-label="Frontend Developer">
          <div className="careers-icon" role="img" aria-hidden="true">👩‍💻</div>
          <h3 className="careers-title">Fullstack Developer</h3>
          <p className="careers-desc">Build beautiful and responsive web experiences.</p>
        </div>

        <div className="careers-card" tabIndex="0" aria-label="UI/UX Designer">
          <div className="careers-icon" role="img" aria-hidden="true">🎨</div>
          <h3 className="careers-title">UI/UX Designer</h3>
          <p className="careers-desc">Design intuitive and engaging user interfaces.</p>
        </div>

        <div className="careers-card" tabIndex="0" aria-label="Marketing Specialist">
          <div className="careers-icon" role="img" aria-hidden="true">📈</div>
          <h3 className="careers-title">Marketing Specialist</h3>
          <p className="careers-desc">Drive growth with creative marketing strategies.</p>
        </div>
      </div>
    </section>
  );
}

export default Careers;
