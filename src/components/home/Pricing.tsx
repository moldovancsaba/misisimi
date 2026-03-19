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
    <section id="pricing" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Pricing aligned with delivered capabilities — not hours</h2>
          <p className="section-subtitle">Transparent, modular, and outcome-based pricing using Value Credits.</p>
        </div>
        
        <div className="pricing-grid">
          {/* Card 1: Value System */}
          <div className="card pricing-card card-portrait">
            <h3>Value Credit System</h3>
            <p className="credit-rate">1 Value Credit = €200</p>
            <ul className="benefits-list">
              <li>No hourly billing</li>
              <li>No hidden scope expansion</li>
              <li>Cost tied to deliverables</li>
              <li>Full transparency upfront</li>
            </ul>
          </div>

          {/* Card 2: AI Diagnostic */}
          <div className="card pricing-card promo-card card-portrait">
            <span className="badge">Entry Offer</span>
            <h4>AI Diagnostic</h4>
            <div className="promo-content">
              <p className="price">3–5 credits</p>
              <p className="price-eur">(€600 – €1,000)</p>
              <p className="delivery">24–72 hours</p>
            </div>
            <a href="#contact" className="btn btn-secondary btn-sm">Get Diagnostic</a>
          </div>

          {/* Card 3: Credit Scale */}
          <div className="card pricing-card table-card card-portrait">
            <h4 className="table-title">Credit Scale</h4>
            <div className="table">
              {credits.map((item, i) => (
                <div key={i} className="table-row">
                  <span className="item-type">{item.type}</span>
                  <span className="credit-val">{item.value} {item.value === 1 ? 'Credit' : 'Credits'}</span>
                </div>
              ))}
            </div>
            <p className="note">Typical projects: 25–60 credits</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pricing-grid {
          gap: 2.5rem;
        }
        .promo-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: flex-start;
        }
        .promo-card .btn {
          width: min(220px, 100%);
          justify-content: center;
        }
      `}</style>
    </section>
  );
}
