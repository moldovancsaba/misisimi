'use client';
import CardGrid from "@/components/layout/CardGrid";
export default function HowItWorksPreview() {
  const steps = [
    { title: "AI Diagnostic", time: "24–72h", desc: "Identify high-ROI automation opportunities." },
    { title: "Solution Design", desc: "Architecture design, tool selection, and roadmap." },
    { title: "Development", desc: "Custom model building and system integration." },
    { title: "Deployment", desc: "Launch, monitoring, and continuous optimization." }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
        </div>
        <CardGrid className="steps-grid">
          {steps.map((step, i) => (
            <div key={i} className="card step-card card-landscape">
              <div className="step-num">{i + 1}</div>
              <h3>{step.title}</h3>
              {step.time && <span className="step-badge">{step.time}</span>}
              <p>{step.desc}</p>
            </div>
          ))}
        </CardGrid>
      </div>
    </section>
  );
}
