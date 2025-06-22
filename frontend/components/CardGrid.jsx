import React from 'react';
import './CardGrid.css';

export default function CardGrid({ cards }) {
  return (
    <div className="card-grid" data-aos="fade-up">
      {cards.map((card, i) => (
        <div className="card" key={i}>
          <div className={`card-icon ${card.iconClass}`}>{card.icon}</div>
          <h3 className={`card-title ${card.titleClass}`}>{card.title}</h3>
          <p className="card-desc">{card.description}</p>
        </div>
      ))}
    </div>
  );
}