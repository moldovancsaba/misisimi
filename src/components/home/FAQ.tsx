'use client';

import { useState } from 'react';

const faqs = [
  {
    emoji: "🎯",
    category: "Engagement",
    questions: [
      {
        q: "What does MISISIMI actually deliver?",
        a: "We deliver AI diagnostics, strategic roadmaps, automation workflows, custom AI systems, and production-ready implementations integrated into existing business operations."
      },
      {
        q: "Who is this for?",
        a: "The service is built for businesses that want applied AI outcomes without hiring a full internal AI team. It fits especially well when operations, customer workflows, or internal decision-making already generate useful data."
      }
    ]
  },
  {
    emoji: "⚙️",
    category: "Process",
    questions: [
      {
        q: "What happens during the diagnostic?",
        a: "The diagnostic reviews your business process, current tools, data readiness, bottlenecks, and opportunities. The output is a clear recommendation on what to automate or build first and why."
      },
      {
        q: "How long does it take?",
        a: "Diagnostics usually take 24 to 72 hours. Delivery projects typically run between 2 and 8 weeks depending on integration complexity, data quality, and scope."
      }
    ]
  },
  {
    emoji: "🚀",
    category: "Delivery",
    questions: [
      {
        q: "Do I need internal technical knowledge?",
        a: "No. MISISIMI handles architecture, implementation, and deployment. Your team mainly provides business context, access to relevant systems, and feedback during validation."
      },
      {
        q: "Do you integrate with existing systems?",
        a: "Yes. Integration is part of the delivery model. The goal is not a disconnected demo, but a working system that fits into your existing stack and operating process."
      }
    ]
  },
  {
    emoji: "💎",
    category: "Commercial",
    questions: [
      {
        q: "How is pricing structured?",
        a: "Pricing starts with a fixed diagnostic and then expands through scope-based value credits. This keeps costs tied to actual deliverables rather than open-ended hourly billing."
      },
      {
        q: "What happens after the diagnostic?",
        a: "After the diagnostic, you receive a recommendation for the next implementation step. That may be a focused automation, a custom AI system, or a phased roadmap, depending on what creates the best return."
      }
    ]
  },
  {
    emoji: "🔐",
    category: "Trust",
    questions: [
      {
        q: "What about data security?",
        a: "Only the data required for the engagement is accessed. The default approach is to minimize access, work inside existing operational boundaries, and define what data is needed before implementation starts."
      },
      {
        q: "Do you provide support?",
        a: "Yes. Post-deployment support and optimization can be included when the solution needs monitoring, iteration, or operational handoff."
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
        <div className="section-header">
          <h2 className="section-title">FAQ</h2>
          <p className="section-subtitle">The core questions buyers usually need answered before starting a diagnostic or delivery engagement.</p>
        </div>
        <div className="faq-container">
          {faqs.map((cat, catIdx) => (
            <div key={catIdx} className="faq-category">
              <h3 className="category-title">{cat.emoji} {cat.category}</h3>
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
