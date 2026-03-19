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
    </section>
  );
}
