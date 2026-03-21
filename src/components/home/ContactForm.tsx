'use client';

import { useState } from 'react';
import { type Dictionary } from '@/i18n/dictionaries';

type ContactFormProps = {
  content: Dictionary['contact'];
};

export default function ContactForm({ content }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="contact-success">
            <h2 className="section-title">{content.success.title}</h2>
            <p className="contact-success-text">{content.success.text}</p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn btn-primary contact-success-btn"
            >
              {content.success.back}
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
            <h2 className="section-title">{content.title}</h2>
            <p>{content.description}</p>
            <div className="contact-trust-list">
              {content.trust.map((item, index) => (
                <div key={`${item.label}-${index}`} className="contact-trust-row">
                  <span className={`part-label ${index === 1 ? 'part-label-primary' : index === 2 ? 'part-label-secondary' : ''}`}>
                    {item.emoji} {item.label}
                  </span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder={content.form.name} required />
            </div>
            <div className="form-group">
              <input type="email" placeholder={content.form.email} required />
            </div>
            <div className="form-group">
              <input type="text" placeholder={content.form.company} required />
            </div>
            <div className="form-group">
              <input type="text" placeholder={content.form.industry} required />
            </div>
            <div className="form-group">
              <textarea placeholder={content.form.message} required />
            </div>
            <button type="submit" className="btn btn-primary">{content.form.submit}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
