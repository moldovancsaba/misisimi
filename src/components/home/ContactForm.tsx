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

  return (
    <section id="contact" className="section final-cta" aria-labelledby="contact-title">
      <div className="container final-cta-layout">
        <div className="final-cta-copy reveal">
          <p className="section-kicker">{content.kicker}</p>
          <h2 id="contact-title" className="section-title section-title-left">{submitted ? content.success.title : content.title}</h2>
          <ul className="cta-list">
            {(submitted ? content.success.points : content.points).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="final-cta-note">{submitted ? content.success.text : content.note}</p>
        </div>

        <div className="final-cta-card reveal">
          {submitted ? (
            <button
              type="button"
              className="btn btn-primary final-cta-button"
              onClick={() => setSubmitted(false)}
            >
              {content.success.back}
            </button>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder={content.form.company} required />
              </div>
              <div className="form-group">
                <textarea placeholder={content.form.problem} required rows={4} />
              </div>
              <div className="form-group">
                <input type="email" placeholder={content.form.email} required />
              </div>
              <button type="submit" className="btn btn-primary final-cta-button" data-track="contact-submit">
                {content.form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
