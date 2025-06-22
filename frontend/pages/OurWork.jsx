import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '../components/HeroSection';
import CardGrid from '../components/CardGrid';
import CTASection from '../components/CTASection';
import './OurWork.css';

export default function OurWork() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const portfolio = [
    {
      icon: '📱',
      iconClass: 'card-icon-doc',
      title: 'Retail Mobile App',
      titleClass: 'card-title-doc',
      description:
        'We built an intuitive mobile app for a local grocery chain, enabling customers to browse, order, and pay — increasing customer retention by 32%.',
    },
    {
      icon: '🛍️',
      iconClass: 'card-icon-profile',
      title: 'Fashion E-Commerce Platform',
      titleClass: 'card-title-profile',
      description:
        'Designed and developed a responsive, conversion-optimized online store with integrated payment gateway, resulting in a 200% sales boost.',
    },
    {
      icon: '📊',
      iconClass: 'card-icon-settings',
      title: 'Real-Time Business Dashboard',
      titleClass: 'card-title-settings',
      description:
        'A custom analytics platform for a fitness franchise, giving live insights into sales, memberships, and inventory across 5 locations.',
    },
    {
      icon: '🧠',
      iconClass: 'card-icon-insight',
      title: 'AI Chatbot for Coaching Center',
      titleClass: 'card-title-insight',
      description:
        'Created a multilingual AI chatbot to automate FAQs, schedule demos, and guide students — saving 40+ hours/month in support effort.',
    },
    {
      icon: '🧾',
      iconClass: 'card-icon-bill',
      title: 'Billing Software for Salon Chain',
      titleClass: 'card-title-bill',
      description:
        'Built a sleek, touch-friendly POS and billing system tailored for salons with real-time reports and staff performance tracking.',
    },
    {
      icon: '🧬',
      iconClass: 'card-icon-health',
      title: 'Medical Review Dashboard',
      titleClass: 'card-title-health',
      description:
        'Built a review insight dashboard for doctors, integrated with Google Reviews API — helping improve trust and online visibility.',
    },
  ];

  return (
    <>
      <HeroSection
        title="Our Work"
        subtitle="Real-world results for real businesses — see how we’ve blended tech, design, and strategy."
        buttonText="Explore Services"
        buttonLink="/services"
      />

      <section className="main-card" data-aos="fade-up">
        <CardGrid cards={portfolio} />
      </section>

      <CTASection
        headline="Your Project Could Be Next"
        text="Join the growing list of successful brands we've helped. Let’s co-create something meaningful."
        buttonText="Start a Project"
        buttonLink="/contact"
      />
    </>
  );
}
