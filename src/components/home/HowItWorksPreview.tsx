'use client';
export default function HowItWorksPreview() {
  const steps = [
    { title: "AI Diagnostic", time: "24–72h", desc: "Identify high-ROI automation opportunities." },
    { title: "Solution Design", desc: "Architecture design, tool selection, and roadmap." },
    { title: "Development", desc: "Custom model building and system integration." },
    { title: "Deployment", desc: "Launch, monitoring, and continuous optimization." }
  ];

  return (
    <section className="section-padding" style={{ background: 'white' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>How It Works</h2>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div key={i} className="step-card">
              <div className="step-num">{i + 1}</div>
              <h3>{step.title}</h3>
              {step.time && <span className="step-badge">{step.time}</span>}
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }
        .step-card {
          position: relative;
          padding: 2.5rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-card);
          transition: transform 0.2s ease;
        }
        .step-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
        }
        .step-num {
          font-size: 3rem;
          font-weight: 900;
          color: rgba(59, 130, 246, 0.1);
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          line-height: 1;
        }
        h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--primary);
        }
        .step-badge {
          display: inline-block;
          padding: 4px 12px;
          background: var(--accent);
          color: white;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        p {
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
