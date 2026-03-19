'use client';
export default function UseCases() {
  const cases = [
    {
      title: "Operations Automation",
      problem: "Manual workflows consume time and create bottlenecks.",
      solution: "Automated workflows using AI + integrations.",
      outcome: ["30–60% time reduction", "Fewer manual errors"]
    },
    {
      title: "Customer Support AI",
      problem: "High volume of repetitive customer queries.",
      solution: "AI assistant trained on company data.",
      outcome: ["Faster response times", "Reduced support workload"]
    },
    {
      title: "Data Insights & Forecasting",
      problem: "Decisions made without structured data insights.",
      solution: "Predictive models and dashboards.",
      outcome: ["Better forecasting", "Improved decision quality"]
    }
  ];

  return (
    <section id="use-cases" className="section-padding">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>Where AI creates immediate value</h2>
        <div className="use-case-grid">
          {cases.map((item, i) => (
            <div key={i} className="card use-case-card">
              <h3>{item.title}</h3>
              <div className="case-content">
                <div className="case-part">
                  <span className="part-label">Problem</span>
                  <p>{item.problem}</p>
                </div>
                <div className="case-part">
                  <span className="part-label">Solution</span>
                  <p>{item.solution}</p>
                </div>
                <div className="case-part outcome">
                  <span className="part-label">Outcome</span>
                  <ul className="outcome-list">
                    {item.outcome.map((text, j) => (
                      <li key={j}>{text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .use-case-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }
        .use-case-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        h3 {
          font-size: 1.5rem;
          color: var(--primary);
          border-bottom: 2px solid var(--accent);
          padding-bottom: 0.5rem;
          display: inline-block;
          margin-bottom: 1rem;
        }
        .case-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .case-part {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .part-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 800;
          color: var(--accent);
          letter-spacing: 0.05em;
        }
        p {
          font-size: 1rem;
          color: var(--text);
          line-height: 1.4;
        }
        .outcome-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .outcome-list li {
          color: var(--primary);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .outcome-list li::before {
          content: '→';
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}
