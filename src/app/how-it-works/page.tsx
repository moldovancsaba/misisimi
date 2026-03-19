'use client';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function HowItWorksPage() {
  const steps = [
    {
      step: "Step 1",
      title: "AI Diagnostic",
      items: ["Business analysis", "Data review", "Opportunity identification"],
      deliverable: "Diagnostic report (PDF + summary)"
    },
    {
      step: "Step 2",
      title: "Solution Design",
      items: ["Architecture design", "Tool selection", "Timeline and scope"],
      deliverable: "Technical + business roadmap"
    },
    {
      step: "Step 3",
      title: "Development",
      items: ["Model building", "Integration", "Testing"],
      deliverable: "Functional system"
    },
    {
      step: "Step 4",
      title: "Deployment",
      items: ["Launch", "Monitoring", "Iteration"],
      deliverable: "Live system + KPIs"
    }
  ];

  return (
    <main>
      <Navbar />
      <header className="section-padding bg-accent-soft">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>How It Works</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted)', maxWidth: '700px', margin: '0 auto' }}>
            A structured, 4-step process to bring AI into your business operations.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="timeline">
            {steps.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content card">
                  <span className="step-label">{item.step}</span>
                  <h2>{item.title}</h2>
                  <ul>
                    {item.items.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                  <div className="deliverable">
                    <strong>Deliverable:</strong> {item.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .timeline {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          padding-left: 2rem;
          border-left: 2px solid var(--border);
        }
        .timeline-item {
          position: relative;
          margin-bottom: 4rem;
        }
        .timeline-dot {
          position: absolute;
          left: -2.75rem;
          top: 1.5rem;
          width: 24px;
          height: 24px;
          background: var(--accent);
          border: 4px solid var(--background);
          border-radius: 50%;
        }
        .step-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 800;
          color: var(--accent);
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
          display: block;
        }
        h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
        ul {
          list-style: none;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        li {
          color: var(--text);
          font-size: 1.125rem;
        }
        li::before {
          content: '—';
          margin-right: 0.75rem;
          color: var(--accent);
        }
        .deliverable {
          padding: 1rem;
          background: var(--background);
          border-radius: 8px;
          border-left: 4px solid var(--accent);
          font-size: 0.9375rem;
        }
        strong { color: var(--primary); }
      `}</style>
    </main>
  );
}
