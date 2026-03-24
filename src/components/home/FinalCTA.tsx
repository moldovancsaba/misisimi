'use client';

import { useState } from 'react';
import { type Dictionary } from '@/i18n/dictionaries';

type FinalCTAProps = {
  content: Dictionary['contact'];
};

export default function FinalCTA({ content }: FinalCTAProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      company: String(formData.get('company') || ''),
      problem: String(formData.get('problem') || ''),
      email: String(formData.get('email') || ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      event.currentTarget.reset();
      setSubmitted(true);
    } catch {
      setError(content.form.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section final-cta" aria-labelledby="contact-title">
      <div className="container final-cta-layout">
        <div className="final-cta-copy reveal">
          <p className="section-kicker">{content.kicker}</p>
          <h2 id="contact-title" className="section-title">{submitted ? content.success.title : content.title}</h2>
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
              onClick={() => {
                setSubmitted(false);
                setError('');
              }}
            >
              {content.success.back}
            </button>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="company" placeholder={content.form.company} required />
              </div>
              <div className="form-group">
                <textarea name="problem" placeholder={content.form.problem} required rows={4} />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder={content.form.email} required />
              </div>
              {error ? <p className="form-error">{error}</p> : null}
              <button
                type="submit"
                className="btn btn-primary final-cta-button"
                data-track="contact-submit"
                data-inline-cta
                disabled={submitting}
              >
                {submitting ? content.form.sending : content.form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
