'use client';
const solutions = [
  { 
    step: "Diagnose", 
    title: "Identify where AI creates real value", 
    description: "Business analysis, data review, and opportunity mapping." 
  },
  { 
    step: "Build", 
    title: "Develop custom models, workflows, and integrations", 
    description: "Architecture design, tool selection, and engineering." 
  },
  { 
    step: "Deploy", 
    title: "Launch production-ready systems with measurable impact", 
    description: "Launch, monitoring, and ongoing optimization." 
  }
];

export default function Solution() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container">
        <h2 className="section-title">We turn AI from concept into working systems</h2>
        <p className="section-subtitle">MISISIMI combines strategy, engineering, and automation to deliver AI solutions that integrate directly into your business operations.</p>
        <div className="grid">
          {solutions.map((item, i) => (
            <div key={i} className="solution-card">
              <div className="step-number">{i + 1}</div>
              <h3>{item.step}</h3>
              <p className="solution-title">{item.title}</p>
              <p className="solution-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .bg-accent-soft {
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          text-align: center;
          color: white;
        }
        .section-subtitle {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 4rem;
          font-size: 1.125rem;
          color: var(--text);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .step-card {
          position: relative;
          padding: 3rem;
          background: var(--surface);
          backdrop-filter: blur(10px);
          border-radius: var(--radius-card);
          border: 1px solid var(--border);
          transition: transform 0.3s ease;
        }
        .step-card:hover {
          transform: translateY(-5px);
          border-color: var(--secondary);
        }
        .step-number {
          position: absolute;
          top: 1rem;
          right: 2rem;
          font-size: 8rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.05);
          line-height: 1;
          pointer-events: none;
        }
        h3 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: white;
        }
        p {
          color: #E2E8F0;
          line-height: 1.7;
        }
        .solution-title {
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .solution-desc {
          color: var(--muted);
          font-size: 0.9375rem;
        }
      `}</style>
    </section>
  )
}
