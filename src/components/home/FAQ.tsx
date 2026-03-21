'use client';

import { useState } from 'react';
import { type Dictionary } from '@/i18n/dictionaries';

type FAQProps = {
  content: Dictionary['faq'];
};

export default function FAQ({ content }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-accent-soft">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>
        <div className="faq-container">
          {content.categories.map((category, categoryIndex) => (
            <div key={category.category} className="faq-category">
              <h3 className="category-title">{category.emoji} {category.category}</h3>
              <div className="faq-list">
                {category.questions.map((faq, faqIndex) => {
                  const id = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openIndex === id;

                  return (
                    <div key={faq.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
                      <button className="faq-question" onClick={() => toggle(id)}>
                        <span>{faq.q}</span>
                        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                      </button>
                      <div className="faq-answer">
                        <div className="faq-answer-content">{faq.a}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
