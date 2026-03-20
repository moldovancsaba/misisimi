'use client';
const credits = [
  { type: "Small improvement", value: 1 },
  { type: "Minor feature", value: 2 },
  { type: "Standard feature", value: 3 },
  { type: "Large module", value: 5 },
  { type: "Strategic component", value: 8 },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Pricing aligned with delivered capabilities — not hours</h2>
          <p className="section-subtitle">Pricing is structured around deliverables and business scope, not time spent. The diagnostic is the entry point, then project scope expands through value credits.</p>
        </div>
        <div className="grid-3 pricing-grid">
          <div className="card-group">
            <span className="capability-eyebrow card-group-eyebrow">
              <span>💎</span>
              <span className="eyebrow-text">Pricing Principle</span>
            </span>
            <div className="card pricing-card card-portrait">
              <h3>Value Credit System</h3>
              <div className="case-content">
                <div className="case-part">
                  <span className="part-label">Rate</span>
                  <p className="credit-rate">1 Value Credit = €200</p>
                </div>
                <div className="case-part">
                  <span className="part-label part-label-primary">How It Works</span>
                  <ul className="capability-list">
                    <li>No hourly billing</li>
                    <li>No hidden scope expansion</li>
                    <li>Cost tied to deliverables</li>
                    <li>Full transparency upfront</li>
                  </ul>
                </div>
                <div className="case-part">
                  <span className="part-label part-label-secondary">Benefit</span>
                  <p className="pricing-detail">Commercial scope stays tied to outputs, which makes planning, approval, and expectation-setting much clearer.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-group">
            <span className="capability-eyebrow card-group-eyebrow">
              <span>🎯</span>
              <span className="eyebrow-text">Entry Offer</span>
            </span>
            <div className="card pricing-card promo-card card-portrait">
              <h4>AI Diagnostic</h4>
              <div className="case-content">
                <div className="case-part">
                  <span className="part-label">Scope</span>
                  <div className="promo-content">
                    <p className="price">3–5 credits</p>
                    <p className="price-eur">(€600 – €1,000)</p>
                    <p className="delivery">24–72 hours</p>
                  </div>
                </div>
                <div className="case-part">
                  <span className="part-label part-label-secondary">Output</span>
                  <p className="pricing-detail">You get a clear problem framing, opportunity map, and recommendation for what to build next.</p>
                </div>
                <div className="case-part">
                  <span className="part-label">Action</span>
                  <p className="pricing-detail">Use the diagnostic to decide whether the next step should be automation, a custom system, or a phased delivery roadmap.</p>
                </div>
              </div>
              <a href="#contact" className="btn btn-secondary btn-sm">Get Diagnostic</a>
            </div>
          </div>
          <div className="card-group">
            <span className="capability-eyebrow card-group-eyebrow">
              <span>📊</span>
              <span className="eyebrow-text">Project Range</span>
            </span>
            <div className="card pricing-card table-card card-portrait">
              <h4 className="table-title">Credit Scale</h4>
              <div className="case-content">
                <div className="case-part">
                  <span className="part-label">Examples</span>
                  <div className="credit-scale" role="table" aria-label="Credit scale examples">
                    {credits.map((item) => (
                      <div key={item.type} className="credit-scale-row" role="row">
                        <span className="credit-scale-type" role="cell">{item.type}</span>
                        <span className="credit-scale-badge" role="cell">
                          {item.value} {item.value === 1 ? 'Credit' : 'Credits'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="case-part">
                  <span className="part-label part-label-secondary">Typical Engagement</span>
                  <div className="pricing-note-card">
                    <span className="pricing-note-strong">Typical projects</span>
                    <p className="pricing-detail">25-60 credits (€5,000 - €12,000+)</p>
                  </div>
                </div>
                <div className="case-part">
                  <span className="part-label part-label-primary">Use</span>
                  <p className="pricing-detail">This gives a realistic range for phased delivery instead of an abstract estimate disconnected from deliverables.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
