'use client';

export default function Problem() {
  const problems = [
    {
      emoji: "⚙️",
      eyebrow: "Operational Drag",
      image: "/01_operational_drag.png",
      title: "Manual work creates avoidable cost and throughput loss",
      problem: "Teams still rely on repetitive handoffs, spreadsheet work, and manual follow-up across core processes.",
      impact: ["Longer cycle times", "Higher operating cost", "More avoidable human error"],
      opportunity: "MISISIMI automates the bottlenecks so teams can focus on higher-value execution."
    },
    {
      emoji: "🔮",
      eyebrow: "Unused Data",
      image: "/02_unused_data.png",
      title: "Business data exists, but it does not drive daily decisions",
      problem: "Important operational and commercial data is scattered across systems and rarely turned into actionable insight.",
      impact: ["Slow decision-making", "Weak forecasting", "Missed optimization opportunities"],
      opportunity: "MISISIMI turns raw data into usable models, dashboards, and decision support."
    },
    {
      emoji: "🔗",
      eyebrow: "Fragmented Stack",
      image: "/03_fragmented_stack.png",
      title: "Tools do not talk to each other in a usable workflow",
      problem: "Businesses often have multiple SaaS tools, but no integrated flow connecting data, actions, and business outcomes.",
      impact: ["Duplicate work", "Broken process visibility", "Low system leverage"],
      opportunity: "MISISIMI connects tools, workflows, and AI logic into one operational system."
    },
    {
      emoji: "🎯",
      eyebrow: "Execution Risk",
      image: "/04_execution_risk.png",
      title: "AI sounds valuable, but buying and implementation feel unclear",
      problem: "Leaders know AI matters, but many projects stall because the path from idea to deployment feels expensive, risky, or vague.",
      impact: ["Delayed adoption", "Poor prioritization", "Wasted experimentation"],
      opportunity: "MISISIMI starts with a diagnostic and translates AI into a scoped, practical rollout."
    }
  ];

  const rowsWithImages = problems.filter((problem) => problem.image);
  const rowsWithoutImages = problems.filter((problem) => !problem.image);

  return (
    <section id="problem" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Most businesses know AI matters — but don’t know where to start</h2>
          <p className="section-subtitle">The problem is rarely a lack of interest. It is usually a lack of operational clarity, integration, and a realistic path to execution.</p>
        </div>
        {!!rowsWithImages.length && (
          <div className="problem-rows">
            {rowsWithImages.map((problem, index) => (
              <div
                key={problem.eyebrow}
                className={`problem-row-group ${index % 2 === 1 ? 'problem-row-group-reverse' : ''}`}
              >
                <span className="capability-eyebrow problem-card-eyebrow">
                  <span>{problem.emoji}</span>
                  <span className="eyebrow-text">{problem.eyebrow}</span>
                </span>
                <div className={`problem-row ${index % 2 === 1 ? 'problem-row-reverse' : ''}`}>
                  <div className="problem-row-media">
                    <img
                      src={problem.image}
                      alt={problem.eyebrow}
                      className="problem-row-image"
                    />
                  </div>
                  <div className="card problem-item problem-item-landscape">
                    <h3>{problem.title}</h3>
                    <div className="case-content">
                      <div className="case-part">
                        <span className="part-label">Problem</span>
                        <p className="case-text">{problem.problem}</p>
                      </div>
                      <div className="case-part">
                        <span className="part-label part-label-primary">Business Impact</span>
                        <ul className="outcome-list">
                          {problem.impact.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="case-part">
                        <span className="part-label part-label-secondary">What We Change</span>
                        <p className="problem-opportunity">{problem.opportunity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {!!rowsWithoutImages.length && (
          <div className="grid-3">
            {rowsWithoutImages.map((problem) => (
              <div key={problem.eyebrow} className="problem-card-group">
                <span className="capability-eyebrow problem-card-eyebrow">
                  <span>{problem.emoji}</span>
                  <span className="eyebrow-text">{problem.eyebrow}</span>
                </span>
                <div className="card problem-item card-portrait">
                  <h3>{problem.title}</h3>
                  <div className="case-content">
                    <div className="case-part">
                      <span className="part-label">Problem</span>
                      <p className="case-text">{problem.problem}</p>
                    </div>
                    <div className="case-part">
                      <span className="part-label part-label-primary">Business Impact</span>
                      <ul className="outcome-list">
                        {problem.impact.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="case-part">
                      <span className="part-label part-label-secondary">What We Change</span>
                      <p className="problem-opportunity">{problem.opportunity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
