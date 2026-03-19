const outcomes = [
  {
    quote: "Execution speed increased significantly without adding resources.",
    client: "messmass.com"
  },
  {
    quote: "Seamless AI adoption across workflows.",
    client: "amanoba.com"
  },
  {
    quote: "Improved efficiency while keeping team intact.",
    client: "narimato.com"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="section-title">Client Outcomes</h2>
        <div className="grid">
          {outcomes.map((item, i) => (
            <div key={i} className="testimonial-card">
              <p className="quote">"{item.quote}"</p>
              <div className="client-info">
                <strong>{item.client}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .testimonial-card {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 2.5rem;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .quote {
          font-style: italic;
          margin-bottom: 2rem;
          color: var(--text);
          font-size: 1.25rem;
        }
        .client-info strong {
          color: var(--primary);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.875rem;
        }
      `}</style>
    </section>
  )
}
