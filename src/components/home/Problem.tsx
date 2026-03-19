'use client';
export default function Problem() {
  const problems = [
    "Manual processes slow down operations and increase costs",
    "Data exists but is not used effectively",
    "Tools are fragmented and not integrated",
    "AI feels complex, expensive, and risky"
  ];

  return (
    <section id="problem" className="section-padding" style={{ background: 'var(--background)' }}>
      <div className="container">
        <div className="problem-content">
          <h2 className="section-title">Most businesses know AI matters — but don’t know where to start</h2>
          <div className="problem-grid">
            {problems.map((problem, i) => (
              <div key={i} className="problem-item">
                <div className="problem-dot"></div>
                <p>{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .problem-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 4rem;
          color: var(--primary);
        }
        .problem-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          text-align: left;
        }
        .problem-item {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 2rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-card);
        }
        .problem-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent);
          margin-top: 0.5rem;
          flex-shrink: 0;
        }
        p {
          color: var(--text);
          font-size: 1.125rem;
          line-height: 1.5;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .problem-grid {
            grid-template-columns: 1fr;
          }
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
