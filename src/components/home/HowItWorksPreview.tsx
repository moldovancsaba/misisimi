'use client';
const steps = [
  { title: "AI Diagnostic", time: "24–72h", desc: "Identify high-ROI automation opportunities." },
  { title: "Solution Design", desc: "Architecture design, tool selection, and roadmap." },
  { title: "Development", desc: "Custom model building and system integration." },
  { title: "Deployment", desc: "Launch, monitoring, and continuous optimization." }
];

export default function HowItWorksPreview() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
        </div>
        <div className="grid-3">
          {steps.map((step, i) => (
            <div key={i} className="card step-card card-portrait">
              <div className="step-num">{i + 1}</div>
              <h3>{step.title}</h3>
              {step.time && <span className="step-badge">{step.time}</span>}
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
