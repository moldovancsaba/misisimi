'use client';
export default function Pricing() {
  const credits = [
    { type: "Small improvement", value: 1 },
    { type: "Minor feature", value: 2 },
    { type: "Standard feature", value: 3 },
    { type: "Large module", value: 5 },
    { type: "Strategic component", value: 8 },
  ];

  return (
    <section id="pricing" className="section-padding bg-accent-soft">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2.5rem' }}>Pricing aligned with delivered capabilities — not hours</h2>
        <p style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--muted)', fontSize: '1.25rem' }}>Transparent, modular, and outcome-based pricing using Value Credits.</p>
        
        <div className="pricing-grid">
          <div className="pricing-info">
            <h3>Value Credit System</h3>
            <p>1 Value Credit = €200</p>
            <ul className="benefits-list">
              <li>No hourly billing</li>
              <li>No hidden scope expansion</li>
              <li>Cost tied to deliverables</li>
              <li>Full transparency upfront</li>
            </ul>
            <div className="entry-offer card">
              <span className="badge">Entry Offer</span>
              <h4>AI Diagnostic</h4>
              <p className="price">3–5 credits (€600 – €1,000)</p>
              <p className="delivery">Delivery: 24–72 hours</p>
            </div>
          </div>
          <div className="credits-table card">
            <h4>Credit Scale</h4>
            <div className="table">
              {credits.map((item, i) => (
                <div key={i} className="table-row">
                  <span>{item.type}</span>
                  <span className="credit-val">{item.value} {item.value === 1 ? 'Credit' : 'Credits'}</span>
                </div>
              ))}
            </div>
            <p className="note">Typical projects range from 25–60 credits (€5,000 – €12,000+)</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: start;
        }
        h3 { font-size: 2rem; margin-bottom: 1.5rem; color: var(--primary); }
        h4 { font-size: 1.25rem; margin-bottom: 1.5rem; }
        .benefits-list {
          list-style: none;
          margin-bottom: 3rem;
        }
        .benefits-list li {
          padding: 0.5rem 0;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .benefits-list li::before {
          content: '✓';
          color: var(--accent);
          font-weight: 900;
        }
        .entry-offer {
          border-left: 4px solid var(--accent);
        }
        .badge {
          display: inline-block;
          background: var(--accent);
          color: white;
          padding: 2px 10px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .price { font-size: 1.5rem; font-weight: 700; color: var(--primary); margin-bottom: 0.25rem; }
        .delivery { font-size: 0.875rem; color: var(--muted); }
        
        .table {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .table-row {
          display: flex;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border);
        }
        .credit-val { font-weight: 700; color: var(--accent); }
        .note { font-size: 0.875rem; color: var(--muted); text-align: center; font-style: italic; }

        @media (max-width: 968px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
