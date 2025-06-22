import React, { useEffect } from 'react';
import './Solutions.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Solutions() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const solutions = [
    {
      name: 'Smart Marketing Automation',
      description: 'Leverage AI-driven tools to optimize content, campaigns, and outreach for local businesses.',
      icon: '📈',
    },
    {
      name: 'Website & App Solutions',
      description: 'Design, develop, and deploy mobile-responsive websites and apps tailored for your brand.',
      icon: '🖥️',
    },
    {
      name: 'Local SEO Boost',
      description: 'Increase your online visibility in local searches to attract more nearby customers.',
      icon: '📍',
    },
    {
      name: 'WhatsApp & Social Media Funnels',
      description: 'Integrate WhatsApp, Instagram, and Facebook for seamless customer communication.',
      icon: '📲',
    },
    {
      name: 'Content Creation Suite',
      description: 'Access AI-generated videos, images, captions, and ideas tailored to your niche.',
      icon: '🎨',
    },
    {
      name: 'CRM & Customer Retention Tools',
      description: 'Track leads, automate follow-ups, and maintain client relationships effectively.',
      icon: '📋',
    },
  ];

  return (
    <section className="solutions-section">
      <div className="solutions-header" data-aos="fade-down">
        <h2>Our Smart Solutions</h2>
        <p>
          Empowering your business with AI, automation, and innovation. Here's how we help you grow:
        </p>
      </div>

      <div className="solutions-grid">
        {solutions.map((s, i) => (
          <div
            key={i}
            className="solution-card"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="solution-icon">{s.icon}</div>
            <h3 className="solution-name">{s.name}</h3>
            <p className="solution-desc">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Solutions;
