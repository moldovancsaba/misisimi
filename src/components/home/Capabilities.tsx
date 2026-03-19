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
        <h2 className="section-title">What we actually deliver</h2>
        <div className="grid">
          {deliverables.map((item, i) => (
            <div key={i} className="card transition-all">
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3.5rem;
          text-align: center;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .card {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 2rem;
          border-radius: 12px;
          height: 100%;
        }
        .card:hover {
          border-color: var(--primary);
          background: #181825;
        }
        .card-icon {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        h3 {
          margin-bottom: 0.5rem;
          font-size: 1.125rem;
          font-weight: 700;
        }
      `}</style>
    </section>
  )
}
