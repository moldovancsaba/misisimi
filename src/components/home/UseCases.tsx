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
        <div className="section-header">
          <h2 className="section-title">Where AI creates immediate value</h2>
        </div>
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
    </section>
  );
}
