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
          <div className="contact-success">
            <h2 className="section-title">Diagnostic Requested</h2>
            <p className="contact-success-text">Thank you. We&apos;ll review your business profile and contact you within 24–72 hours.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn btn-primary contact-success-btn"
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
            <p>Start with a clear understanding of where AI fits your business. We review your operations, identify the best AI opportunity, and outline the fastest path to implementation.</p>
            <div className="contact-trust-list">
              <div className="contact-trust-row">
                <span className="part-label">✨ Response</span>
                <p>Initial reply within 24-72 hours.</p>
              </div>
              <div className="contact-trust-row">
                <span className="part-label part-label-primary">🛠️ Engagement</span>
                <p>Diagnostic first, then scoped delivery based on clear implementation priorities.</p>
              </div>
              <div className="contact-trust-row">
                <span className="part-label part-label-secondary">🌐 Scope</span>
                <p>Suitable for automation, internal tools, applied AI systems, and operational integration projects.</p>
              </div>
            </div>
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
    </section>
  )
}
