'use client';

type DeliverableCard = {
  title: string;
  eyebrow: string;
  body?: string;
  items?: string[];
};

const deliverables: DeliverableCard[] = [
  {
    eyebrow: 'AI Development',
    title: 'Primary offer (50%)',
    body: 'We design and build custom AI systems tailored to your operations.'
  },
  {
    eyebrow: 'AI Development',
    title: 'Includes',
    items: [
      'Machine learning models',
      'NLP systems',
      'Recommendation engines',
      'Automation pipelines'
    ]
  },
  {
    eyebrow: 'AI Development',
    title: 'Output',
    items: [
      'Production-ready system',
      'Documentation',
      'Integration into your stack'
    ]
  },
  {
    eyebrow: 'AI Consulting',
    title: 'Strategic layer (35%)',
    body: 'We help you understand where AI creates ROI and how to implement it.'
  },
  {
    eyebrow: 'AI Consulting',
    title: 'Includes',
    items: [
      'AI opportunity mapping',
      'Data readiness assessment',
      'Roadmap creation'
    ]
  },
  {
    eyebrow: 'AI Consulting',
    title: 'Output',
    items: [
      'AI strategy document',
      'Prioritised use cases'
    ]
  },
  {
    eyebrow: 'AI Automation Tools',
    title: 'Fast execution (15%)',
    body: 'Lightweight tools to automate repetitive processes quickly.'
  },
  {
    eyebrow: 'AI Automation Tools',
    title: 'Includes',
    items: [
      'Workflow automation',
      'AI assistants',
      'Internal productivity tools'
    ]
  },
  {
    eyebrow: 'AI Automation Tools',
    title: 'Output',
    items: [
      'Functional tool or script',
      'Setup guide'
    ]
  }
];

export default function WhatWeBuild() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What we actually deliver</h2>
          <p className="section-subtitle">
            The homepage now carries the full service structure instead of the previous stripped-down summary.
          </p>
        </div>
        <div className="grid-3">
          {deliverables.map((item, i) => (
            <article key={i} className="card card-portrait capability-card">
              <span className="capability-eyebrow">{item.eyebrow}</span>
              <h3>{item.title}</h3>
              {item.body ? <p className="capability-body">{item.body}</p> : null}
              {item.items ? (
                <ul className="capability-list">
                  {item.items.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
