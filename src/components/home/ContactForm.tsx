'use client';

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
            <h2 className="section-title">Diagnostic Requested</h2>
            <p style={{ fontSize: '1.25rem' }}>Thank you. We&apos;ll review your business profile and contact you within 24–72 hours.</p>
            <button 
              onClick={() => setSubmitted(false)} 
              className="btn btn-primary" 
              style={{ marginTop: '2rem' }}
            >
              Back to Form
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
            <h2 className="section-title">Get Your AI Diagnostic</h2>
            <p>Start with a clear understanding of where AI fits your business. We&apos;ll review your operations and identify high-ROI automation opportunities.</p>
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
            <div className="form-group">
              <input type="text" placeholder="Industry" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Tell us about the core complexity or bottleneck you want to solve" required />
            </div>
            <button type="submit" className="btn btn-primary">Request Free Diagnostic</button>
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
        input, textarea {
          width: 100%;
          padding: 1rem 1.25rem;
          background: #0F0F18;
          border: 1px solid var(--border);
          color: white;
          border-radius: 12px;
          font-size: 1rem;
          transition: border-color 0.2s;
          font-family: inherit;
        }
        textarea {
          min-height: 120px;
          resize: vertical;
        }
        input:focus, textarea:focus {
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
