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
      <header className="service-header">
        <div className="container">
          <h1 className="text-gradient">How It Works</h1>
          <p className="section-subtitle">
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
                  <h2 className="text-gradient" style={{ marginBottom: '1.5rem' }}>{item.title}</h2>
                  <ul className="outcome-list">
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
    </main>
  );
}
