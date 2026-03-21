import { type Dictionary } from '@/i18n/dictionaries';

type PricingProps = {
  content: Dictionary['pricing'];
};

export default function Pricing({ content }: PricingProps) {
  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>
        <div className="grid-3 pricing-grid">
          <div className="card-group">
            <span className="capability-eyebrow card-group-eyebrow">
              <span>💎</span>
              <span className="eyebrow-text">{content.principle.eyebrow}</span>
            </span>
            <div className="card pricing-card card-portrait">
              <h3>{content.principle.title}</h3>
              <div className="case-content">
                <div className="case-part">
                  <span className="part-label">{content.principle.labels.rate}</span>
                  <p className="credit-rate mixed-copy">{content.principle.rate}</p>
                </div>
                <div className="case-part">
                  <span className="part-label part-label-primary">{content.principle.labels.howItWorks}</span>
                  <ul className="capability-list">
                    {content.principle.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="case-part">
                  <span className="part-label part-label-secondary">{content.principle.labels.benefit}</span>
                  <p className="pricing-detail">{content.principle.benefit}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-group">
            <span className="capability-eyebrow card-group-eyebrow">
              <span>🎯</span>
              <span className="eyebrow-text">{content.entryOffer.eyebrow}</span>
            </span>
            <div className="card pricing-card promo-card card-portrait">
              <h4>{content.entryOffer.title}</h4>
              <div className="case-content">
                <div className="case-part">
                  <span className="part-label">{content.entryOffer.labels.scope}</span>
                  <div className="promo-content">
                    <p className="price mixed-copy">{content.entryOffer.credits}</p>
                    <p className="price-eur mixed-copy">{content.entryOffer.price}</p>
                    <p className="delivery mixed-copy">{content.entryOffer.timeline}</p>
                  </div>
                </div>
                <div className="case-part">
                  <span className="part-label part-label-secondary">{content.entryOffer.labels.output}</span>
                  <p className="pricing-detail">{content.entryOffer.output}</p>
                </div>
                <div className="case-part">
                  <span className="part-label">{content.entryOffer.labels.action}</span>
                  <p className="pricing-detail">{content.entryOffer.action}</p>
                </div>
              </div>
              <a href="#contact" className="btn btn-secondary btn-sm">{content.entryOffer.cta}</a>
            </div>
          </div>
          <div className="card-group">
            <span className="capability-eyebrow card-group-eyebrow">
              <span>📊</span>
              <span className="eyebrow-text">{content.projectRange.eyebrow}</span>
            </span>
            <div className="card pricing-card table-card card-portrait">
              <h4 className="table-title">{content.projectRange.title}</h4>
              <div className="case-content">
                <div className="case-part">
                  <div className="credit-scale" role="table" aria-label={content.projectRange.title}>
                    {content.projectRange.scale.map((item) => (
                      <div key={item.type} className="credit-scale-row" role="row">
                        <span className="credit-scale-type" role="cell">{item.type}</span>
                        <span className="credit-scale-badge mixed-copy" role="cell">{item.credits}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="case-part">
                  <span className="part-label part-label-secondary">{content.projectRange.labels.typicalEngagement}</span>
                  <div className="pricing-note-card">
                    <span className="pricing-note-strong">{content.projectRange.typicalProjectsLabel}</span>
                    <p className="pricing-detail mixed-copy">{content.projectRange.typicalProjectsValue}</p>
                  </div>
                </div>
                <div className="case-part">
                  <span className="part-label part-label-primary">{content.projectRange.labels.use}</span>
                  <p className="pricing-detail">{content.projectRange.use}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
