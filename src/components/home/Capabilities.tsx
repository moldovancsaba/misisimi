const capabilities = [
  {
    title: "AI Integration",
    description: "Embed AI into workflows that teams actually use.",
    icon: "🤖"
  },
  {
    title: "Execution Support",
    description: "Operate at leadership level to drive delivery.",
    icon: "⚡"
  },
  {
    title: "Process Redesign",
    description: "Remove bottlenecks and inefficiencies.",
    icon: "⚙️"
  },
  {
    title: "Zero2Done",
    description: "From problem to working system — fully implemented.",
    icon: "🎯"
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="section-padding">
      <div className="container">
        <h2 className="section-title">Capabilities</h2>
        <div className="grid">
          {capabilities.map((cap, i) => (
            <div key={i} className="card transition-all">
              <div className="card-icon">{cap.icon}</div>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .section-title {
          font-size: 2rem;
          margin-bottom: 2.5rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
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
