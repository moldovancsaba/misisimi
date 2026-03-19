'use client';
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

export default function UseCases() {
  return (
    <section id="use-cases" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Where AI creates immediate value</h2>
        </div>
        <div className="grid-3">
          {cases.map((item, i) => (
            <div key={i} className="card use-case-card card-portrait">
              <h3>{item.title}</h3>
              <div className="case-content">
                <div className="case-part">
                  <span className="part-label">Problem</span>
                  <p className="case-text">{item.problem}</p>
                </div>
                <div className="case-part">
                  <span className="part-label" style={{color: 'var(--primary)'}}>Solution</span>
                  <p className="case-text">{item.solution}</p>
                </div>
                <div className="case-part outcome">
                  <span className="part-label" style={{color: 'var(--secondary)'}}>Outcome</span>
                  <ul className="outcome-list">
                    {item.outcome.map((text, j) => (
                      <li key={j} style={{color: '#FFFFFF'}}>{text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
