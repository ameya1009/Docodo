import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '../components/HeroSection';
import CardGrid from '../components/CardGrid';
import CTASection from '../components/CTASection';

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      icon: '🎨',
      iconClass: 'card-icon-doc',
      title: 'Branding & Identity',
      titleClass: 'card-title-doc',
      description: 'Craft strong brand identities — logos, color palettes, brand voice, and complete brand guidelines.'
    },
    {
      icon: '💻',
      iconClass: 'card-icon-profile',
      title: 'Website Design & Development',
      titleClass: 'card-title-profile',
      description: 'Fully responsive, SEO-optimized, fast-loading websites built using modern stacks like React and Next.js.'
    },
    {
      icon: '📱',
      iconClass: 'card-icon-apps',
      title: 'Mobile App Development',
      titleClass: 'card-title-apps',
      description: 'Cross-platform mobile apps for Android & iOS using Flutter or React Native — fast, intuitive, and scalable.'
    },
    {
      icon: '📢',
      iconClass: 'card-icon-marketing',
      title: 'Digital Marketing & Growth',
      titleClass: 'card-title-marketing',
      description: 'From social media campaigns, SEO, and Google Ads to influencer and WhatsApp marketing — we’ve got you covered.'
    },
    {
      icon: '📈',
      iconClass: 'card-icon-analytics',
      title: 'Business Strategy & Consulting',
      titleClass: 'card-title-analytics',
      description: 'We help you define your digital roadmap, customer acquisition channels, and scale plans.'
    },
    {
      icon: '🎥',
      iconClass: 'card-icon-video',
      title: 'Content Creation & Reels',
      titleClass: 'card-title-video',
      description: 'High-quality product videos, Instagram reels, photo shoots, and storytelling through visuals.'
    },
    {
      icon: '🧠',
      iconClass: 'card-icon-ai',
      title: 'AI-Powered Services',
      titleClass: 'card-title-ai',
      description: 'Leverage ChatGPT and AI tools to automate support, generate content, and personalize customer experience.'
    },
    {
      icon: '🏪',
      iconClass: 'card-icon-store',
      title: 'Google Business & Local SEO',
      titleClass: 'card-title-store',
      description: 'We optimize your online presence with Google Business setup, map ranking, and local discoverability.'
    },
    {
      icon: '🛍️',
      iconClass: 'card-icon-ecom',
      title: 'E-commerce & Catalog Setup',
      titleClass: 'card-title-ecom',
      description: 'Build your own online store or create easy-to-share WhatsApp catalogs and product menus.'
    },
    {
      icon: '🤝',
      iconClass: 'card-icon-team',
      title: 'Team Training & SOPs',
      titleClass: 'card-title-team',
      description: 'Train your staff on tools, marketing, AI, and productivity — plus ready-to-use SOPs and templates.'
    }
  ];

  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="From branding to AI, we deliver complete digital solutions that help local businesses grow with confidence."
        buttonText="See Our Work"
        buttonLink="/our-work"
      />

      <section className="main-card" data-aos="fade-up">
        <CardGrid cards={services} />
      </section>

      <CTASection
        headline="Let's Build Together"
        text="Partner with us to turn your ideas into reality. Whether you're just starting or scaling, Docodo is your creative tech partner."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </>
  );
}
