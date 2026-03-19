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
    <section id="how-it-works" className="section-padding bg-accent-soft">
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
        }
        .section-subtitle {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 4rem;
          font-size: 1.125rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .solution-card {
          position: relative;
          padding: 3rem 2rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          transition: border-color 0.2s;
        }
        .solution-card:hover {
          border-color: var(--primary);
        }
        .step-number {
          font-size: 4rem;
          font-weight: 900;
          color: rgba(168, 85, 247, 0.05);
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          line-height: 1;
        }
        h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--primary);
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
