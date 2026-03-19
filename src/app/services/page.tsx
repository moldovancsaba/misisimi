'use client';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "AI Development (Primary – 50%)",
      desc: "We design and build custom AI systems tailored to your operations.",
      includes: ["Machine learning models", "NLP systems", "Recommendation engines", "Automation pipelines"],
      output: ["Production-ready system", "Documentation", "Integration into your stack"]
    },
    {
      title: "AI Consulting (35%)",
      desc: "We help you understand where AI creates ROI and how to implement it.",
      includes: ["AI opportunity mapping", "Data readiness assessment", "Roadmap creation"],
      output: ["AI strategy document", "Prioritised use cases"]
    },
    {
      title: "AI Automation Tools (15%)",
      desc: "Lightweight tools to automate repetitive processes quickly.",
      includes: ["Workflow automation", "AI assistants", "Internal productivity tools"],
      output: ["Functional tool/script", "Setup guide"]
    }
  ];

  return (
    <main>
      <Navbar />
      <header className="service-header">
        <div className="container">
          <h1 className="text-gradient">Services</h1>
          <p className="section-subtitle">
            Practical AI implementation for small and mid-sized businesses.
          </p>
        </div>
      </header>

      {services.map((service, i) => (
        <section key={i} className="section-padding">
          <div className="container">
            <div className="service-grid">
              <div className="service-content">
                <h2 className="text-gradient" style={{ marginBottom: '2rem' }}>{service.title}</h2>
                <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 4rem', fontSize: '1.5rem', color: '#FFFFFF' }}>{service.desc}</p>
                <div className="spec-grid">
                  <div className="spec-card">
                    <h4>Includes</h4>
                    <ul>
                      {service.includes.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="spec-card">
                    <h4>Output</h4>
                    <ul>
                      {service.output.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
}
