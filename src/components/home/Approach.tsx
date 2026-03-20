'use client';
const solutions = [
  {
    emoji: "🔍",
    eyebrow: "Step 1",
    image: "/08_step_1.png",
    step: "Diagnose",
    title: "Find the highest-value AI opportunity first",
    description: "We review operations, data, constraints, and handoff points to identify where AI can create measurable business value.",
    output: "Output: diagnostic brief, prioritized use cases, ROI direction"
  },
  {
    emoji: "🛠️",
    eyebrow: "Step 2",
    image: "/09_step_2.png",
    step: "Build",
    title: "Design and implement the right system",
    description: "We translate the selected opportunity into architecture, workflows, integrations, and production-ready engineering work.",
    output: "Output: solution design, implementation, and integrated delivery"
  },
  {
    emoji: "🚀",
    eyebrow: "Step 3",
    image: "/10_step_3.png",
    step: "Deploy",
    title: "Launch with ownership and iteration",
    description: "We deploy the system into real operations, validate outcomes, and refine performance based on live usage.",
    output: "Output: production release, monitoring, and optimization loop"
  }
];

export default function Solution() {
  const rowsWithImages = solutions.filter((item) => item.image);
  const rowsWithoutImages = solutions.filter((item) => !item.image);

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How engagement works from first diagnostic to production rollout</h2>
          <p className="section-subtitle">One engagement model: diagnose the opportunity, build the system, then deploy and improve it inside real business operations.</p>
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
                      alt={item.step}
                      className="media-row-image"
                    />
                  </div>
                  <div className="card step-card media-item-landscape">
                    <h3>{item.step}</h3>
                    <div className="case-content">
                      <div className="case-part">
                        <span className="part-label">Focus</span>
                        <p className="case-text">{item.title}</p>
                      </div>
                      <div className="case-part">
                        <span className="part-label part-label-primary">Execution</span>
                        <p className="case-text">{item.description}</p>
                      </div>
                      <div className="case-part">
                        <span className="part-label part-label-secondary">Output</span>
                        <p className="solution-output">{item.output}</p>
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
            {rowsWithoutImages.map((item, i) => (
              <div key={i} className="card-group">
                <span className="capability-eyebrow card-group-eyebrow">
                  <span>{item.emoji}</span>
                  <span className="eyebrow-text">Step {i + 1}</span>
                </span>
                <div className="card step-card card-portrait">
                  <h3>{item.step}</h3>
                  <div className="case-content">
                    <div className="case-part">
                      <span className="part-label">Focus</span>
                      <p className="case-text">{item.title}</p>
                    </div>
                    <div className="case-part">
                      <span className="part-label part-label-primary">Execution</span>
                      <p className="case-text">{item.description}</p>
                    </div>
                    <div className="case-part">
                      <span className="part-label part-label-secondary">Output</span>
                      <p className="solution-output">{item.output}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
