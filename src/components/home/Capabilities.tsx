'use client';
const deliverables = [
  {
    title: "Custom AI models",
    description: "ML / NLP models tailored to your business data and use cases.",
    icon: "🧬"
  },
  {
    title: "AI automation workflows",
    description: "Connect your existing tools into automated, AI-driven processes.",
    icon: "⚡"
  },
  {
    title: "Data pipelines",
    description: "Modern data infrastructure to feed your AI systems consistently.",
    icon: "📉"
  },
  {
    title: "Predictive analytics",
    description: "Forecast demand, identify churn, and unlock actionable insights.",
    icon: "🔮"
  },
  {
    title: "Internal AI tools",
    description: "Custom dashboards and assistants for your internal teams.",
    icon: "🛠️"
  }
];

export default function WhatWeBuild() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What we actually deliver</h2>
        </div>
        <div className="grid-3">
          {deliverables.map((item, i) => (
            <div key={i} className="card">
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
