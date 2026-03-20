'use client';

type DeliverableCard = {
  emoji: string;
  title: string;
  eyebrow: string;
  image?: string;
  body: string;
  includes: string[];
  output: string[];
};

const deliverables: DeliverableCard[] = [
  {
    emoji: '🧬',
    eyebrow: 'AI Development',
    image: '/05_ai_development.png',
    title: 'AI Development',
    body: 'We design and build custom AI systems tailored to your operations and data model.',
    includes: [
      'Machine learning models',
      'NLP systems',
      'Recommendation engines',
      'Automation pipelines'
    ],
    output: [
      'Production-ready system',
      'Documentation',
      'Integration into your stack'
    ]
  },
  {
    emoji: '🧠',
    eyebrow: 'AI Consulting',
    image: '/06_ai_consulting.png',
    title: 'AI Consulting',
    body: 'We help you identify where AI creates ROI, what to prioritize, and how to implement it.',
    includes: [
      'AI opportunity mapping',
      'Data readiness assessment',
      'Roadmap creation'
    ],
    output: [
      'AI strategy document',
      'Prioritised use cases'
    ]
  },
  {
    emoji: '⚡',
    eyebrow: 'AI Automation Tools',
    image: '/07_ai_automation_tools.png',
    title: 'AI Automation Tools',
    body: 'We ship lightweight tools that automate repetitive work quickly and integrate with your existing stack.',
    includes: [
      'Workflow automation',
      'AI assistants',
      'Internal productivity tools'
    ],
    output: [
      'Functional tool or script',
      'Setup guide'
    ]
  }
];

export default function WhatWeBuild() {
  const rowsWithImages = deliverables.filter((item) => item.image);
  const rowsWithoutImages = deliverables.filter((item) => !item.image);

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What we actually deliver</h2>
          <p className="section-subtitle">
            Three service layers, each presented as a complete offer with scope, implementation components, and concrete outputs.
          </p>
        </div>
        {!!rowsWithImages.length && (
          <div className="media-rows">
            {rowsWithImages.map((item, index) => (
              <div key={item.eyebrow} className="media-row-group">
                <span className="capability-eyebrow card-group-eyebrow">
                  <span>{item.emoji}</span>
                  <span className="eyebrow-text">{item.eyebrow}</span>
                </span>
                <div className={`media-row ${index % 2 === 1 ? 'media-row-reverse' : ''}`}>
                  <div className="media-row-media">
                    <img
                      src={item.image}
                      alt={item.eyebrow}
                      className="media-row-image"
                    />
                  </div>
                  <article className="card capability-card media-item-landscape">
                    <h3>{item.title}</h3>
                    <div className="case-content">
                      <div className="case-part">
                        <span className="part-label">Overview</span>
                        <p className="capability-body">{item.body}</p>
                      </div>
                      <div className="case-part">
                        <span className="part-label part-label-primary">Includes</span>
                        <ul className="capability-list">
                          {item.includes.map((entry) => (
                            <li key={entry}>{entry}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="case-part">
                        <span className="part-label part-label-secondary">Output</span>
                        <ul className="capability-list">
                          {item.output.map((entry) => (
                            <li key={entry}>{entry}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        )}
        {!!rowsWithoutImages.length && (
          <div className="grid-3">
            {rowsWithoutImages.map((item, i) => (
              <div key={i} className="card-group">
                <span className="capability-eyebrow card-group-eyebrow">
                  <span>{item.emoji}</span>
                  <span className="eyebrow-text">{item.eyebrow}</span>
                </span>
                <article className="card card-portrait capability-card">
                  <h3>{item.title}</h3>
                  <div className="case-content">
                    <div className="case-part">
                      <span className="part-label">Overview</span>
                      <p className="capability-body">{item.body}</p>
                    </div>
                    <div className="case-part">
                      <span className="part-label part-label-primary">Includes</span>
                      <ul className="capability-list">
                        {item.includes.map((entry) => (
                          <li key={entry}>{entry}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="case-part">
                      <span className="part-label part-label-secondary">Output</span>
                      <ul className="capability-list">
                        {item.output.map((entry) => (
                          <li key={entry}>{entry}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
