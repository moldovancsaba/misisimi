'use client';
const solutions = [
  {
    step: "Diagnose",
    title: "Find the highest-value AI opportunity first",
    description: "We review operations, data, constraints, and handoff points to identify where AI can create measurable business value.",
    output: "Output: diagnostic brief, prioritized use cases, ROI direction"
  },
  {
    step: "Build",
    title: "Design and implement the right system",
    description: "We translate the selected opportunity into architecture, workflows, integrations, and production-ready engineering work.",
    output: "Output: solution design, implementation, and integrated delivery"
  },
  {
    step: "Deploy",
    title: "Launch with ownership and iteration",
    description: "We deploy the system into real operations, validate outcomes, and refine performance based on live usage.",
    output: "Output: production release, monitoring, and optimization loop"
  }
];

export default function Solution() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How engagement works from first diagnostic to production rollout</h2>
          <p className="section-subtitle">One engagement model: diagnose the opportunity, build the system, then deploy and improve it inside real business operations.</p>
        </div>
        <div className="grid-3">
          {solutions.map((item, i) => (
            <div key={i} className="card step-card card-portrait">
              <div className="step-number">{i + 1}</div>
              <h3>{item.step}</h3>
              <p className="solution-title">{item.title}</p>
              <p className="solution-desc">{item.description}</p>
              <p className="solution-output">{item.output}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
