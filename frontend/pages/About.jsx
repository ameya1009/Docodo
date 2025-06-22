import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";
import './About.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <HeroSection
        title="Empowering Ambitious Brands"
        subtitle="Docodo is a design-driven tech studio helping local businesses become unforgettable with bold branding, smart development, and creative strategy."
        buttonText="See Our Work"
        buttonLink="/our-work"
      />

      <main className="about-page">
        {/* Mission Section */}
        <section className="about-section" data-aos="fade-up">
          <h2 className="about-title">Our Mission</h2>
          <p className="about-text">
            At Docodo, we believe in amplifying the power of every brand — no matter its size. 
            Our mission is to democratize high-quality design and technology, helping local businesses 
            compete with global standards. Whether you're building your first brand or scaling an established business, 
            we're here to give you the tools, strategy, and confidence to grow with impact.
          </p>
        </section>

        {/* Who We Are Section */}
        <section className="about-section dark" data-aos="fade-up">
          <h2 className="about-title">Who We Are</h2>
          <p className="about-text">
            Docodo is not just an agency — it’s a creative ally. We blend artistic vision with engineering logic to build 
            standout digital products and memorable brand identities. From stunning websites to powerful brand strategy, 
            we help businesses rise above the noise and connect authentically with their audience.
            <br /><br />
            Our team works closely with clients across India to create digital experiences that drive results — 
            from UI/UX design, branding, and content strategy, to full-stack development, marketing automation, 
            and performance analytics.
          </p>
        </section>

        {/* Core Values */}
        <section className="about-section" data-aos="fade-up">
          <h2 className="about-title">Our Values</h2>
          <ul className="about-text">
            <li><strong>Clarity:</strong> Simple ideas win. We believe in clarity over clutter — in branding, communication, and code.</li>
            <li><strong>Integrity:</strong> We do what’s right, not what’s easy. Every project is built on trust, honesty, and transparency.</li>
            <li><strong>Empowerment:</strong> We empower businesses with tools and knowledge, so they can thrive long after our work is done.</li>
            <li><strong>Creativity with Purpose:</strong> We don’t create to impress — we create to connect, solve, and grow.</li>
          </ul>
        </section>

        {/* Founder Section */}
        <section className="about-founder" data-aos="fade-up">
          <div className="founder-image"></div>
          <div className="founder-text">
            <h2 className="about-title">Meet Ameya Kshirsagar</h2>
            <p className="about-text">
              I’m Ameya — a curious technologist, aspiring entrepreneur, and the founder of Docodo.
              With a background in Electronics & Telecommunication and a deep love for creativity,
              I started this company with one clear goal: to help local brands make a global impression.
              <br /><br />
              I’ve always believed that design and technology should be approachable, not intimidating. 
              Whether it’s transforming a small gym’s online presence or helping a clinic build patient trust through branding — 
              every Docodo project is personal to me. I’m proud to be building something meaningful and human, one solution at a time.
            </p>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          headline="Your Business Deserves a Beautiful Digital Identity"
          text="Let’s connect and craft something remarkable together. Reach out today and let’s bring your vision to life."
          buttonText="Start a Conversation"
          buttonLink="/contact"
        />
      </main>
    </>
  );
}
