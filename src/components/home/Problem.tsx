'use client';
export default function Problem() {
  const problems = [
    "Manual processes slow down operations and increase costs",
    "Data exists but is not used effectively",
    "Tools are fragmented and not integrated",
    "AI feels complex, expensive, and risky"
  ];

  return (
    <section id="problem" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Most businesses know AI matters — but don’t know where to start</h2>
        </div>
        <div className="grid-4 problem-grid">
          {problems.map((problem, i) => (
            <div key={i} className="card problem-item card-portrait">
              <div className="problem-dot"></div>
              <p>{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
