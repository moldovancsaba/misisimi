const approach = [
  { step: "Diagnose", description: "Identify core friction points." },
  { step: "Design", description: "Build AI-supported systems." },
  { step: "Deliver", description: "Execute and embed." }
];

export default function Approach() {
  return (
    <section id="approach" className="section-padding bg-accent-soft">
      <div className="container">
        <h2 className="section-title">Approach</h2>
        <div className="grid">
          {approach.map((item, i) => (
            <div key={i} className="approach-card">
              <div className="step-number">{i + 1}</div>
              <h3>{item.step}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .bg-accent-soft {
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .section-title {
          font-size: 2rem;
          margin-bottom: 2.5rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .approach-card {
          position: relative;
          padding: 2.5rem 2rem;
        }
        .step-number {
          font-size: 3rem;
          font-weight: 900;
          color: rgba(168, 85, 247, 0.1);
          position: absolute;
          top: 0.75rem;
          left: 1rem;
          line-height: 1;
        }
        h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          position: relative;
          z-index: 1;
        }
        p {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </section>
  )
}
