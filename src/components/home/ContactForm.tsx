'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="contact-grid" style={{ textAlign: 'center', display: 'block' }}>
            <h2 className="section-title">Thank You!</h2>
            <p style={{ fontSize: '1.25rem' }}>Your message has been sent. We&apos;ll be in touch soon.</p>
            <button 
              onClick={() => setSubmitted(false)} 
              className="btn btn-primary" 
              style={{ marginTop: '2rem' }}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-title">Contact</h2>
            <p>Ready to solve your business complexity? Let&apos;s talk.</p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Company" required />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          background: var(--surface);
          padding: 4rem;
          border-radius: 24px;
          border: 1px solid var(--border);
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        input {
          width: 100%;
          padding: 1rem 1.25rem;
          background: #0F0F18;
          border: 1px solid var(--border);
          color: white;
          border-radius: 12px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }
        input:focus {
          outline: none;
          border-color: var(--primary);
        }
        /* Global button styles are now managed in globals.css */
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}
