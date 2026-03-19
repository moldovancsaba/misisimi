'use client';

'use client';
import { useState } from 'react';

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What does MISISIMI do?",
        a: "We design and implement AI systems tailored to business operations, from initial strategy to deployment."
      },
      {
        q: "Who is this for?",
        a: "Small and mid-sized businesses looking to apply AI without building internal teams."
      }
    ]
  },
  {
    category: "Product / Service",
    questions: [
      {
        q: "What do you actually deliver?",
        a: "Working AI systems, automation workflows, and strategic roadmaps."
      },
      {
        q: "How long does it take?",
        a: "Diagnostics: 1–3 days. Projects: 2–8 weeks depending on complexity."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        q: "Do I need technical knowledge?",
        a: "No. We handle technical implementation end-to-end."
      },
      {
        q: "Do you integrate with existing systems?",
        a: "Yes. Integration is a core part of delivery."
      }
    ]
  },
  {
    category: "Business",
    questions: [
      {
        q: "How is pricing structured?",
        a: "Diagnostic (fixed), Projects (scope-based), and ongoing support (optional)."
      }
    ]
  },
  {
    category: "Trust",
    questions: [
      {
        q: "What about data security?",
        a: "We follow standard data protection practices and only access necessary data."
      },
      {
        q: "Do you provide support?",
        a: "Yes, post-deployment support is available."
      }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-accent-soft">
      <div className="container">
        <h2 className="section-title">FAQ</h2>
        <div className="faq-container">
          {faqs.map((cat, catIdx) => (
            <div key={catIdx} className="faq-category">
              <h3 className="category-title">{cat.category}</h3>
              <div className="faq-list">
                {cat.questions.map((faq, faqIdx) => {
                  const id = `${catIdx}-${faqIdx}`;
                  const isOpen = openIndex === id;
                  return (
                    <div key={faqIdx} className={`faq-item ${isOpen ? 'open' : ''}`}>
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
