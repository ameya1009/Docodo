import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Docodo</title>
        <meta
          name="description"
          content="Get in touch with Docodo — your creative partner in branding, digital strategy, and growth."
        />
      </Helmet>

      <div className="contact-main-card">
        <h2 className="contact-main-title">Contact Us</h2>
        <p className="contact-main-desc">
          Ready to elevate your brand? Reach out to us today!
        </p>
        <div className="contact-card-grid">
          <div className="contact-card">
            <div className="contact-card-icon contact-card-icon-doc" aria-label="Phone">📞</div>
            <h3 className="contact-card-title contact-card-title-doc">Phone</h3>
            <p className="contact-card-desc">+91 9284310604</p>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon contact-card-icon-profile" aria-label="Email">✉️</div>
            <h3 className="contact-card-title contact-card-title-profile">Email</h3>
            <p className="contact-card-desc">info@docodo.in</p>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon contact-card-icon-settings" aria-label="Address">📍</div>
            <h3 className="contact-card-title contact-card-title-settings">Address</h3>
            <p className="contact-card-desc">Suyog Lucky Homes, Wagholi</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
