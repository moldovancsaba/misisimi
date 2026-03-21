import { type Dictionary } from '@/i18n/dictionaries';

type TrustProps = {
  content: Dictionary['trust'];
};

export default function Problem({ content }: TrustProps) {
  return (
    <section id="trust" className="section section-dark" aria-labelledby="trust-title">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-kicker">{content.kicker}</p>
          <h2 id="trust-title" className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>

        <div className="metric-grid reveal">
          {content.metrics.map((metric) => (
            <article key={metric.label} className="metric-card">
              <strong className="metric-value">{metric.value}</strong>
              <span className="metric-label">{metric.label}</span>
            </article>
          ))}
        </div>

        <div className="case-grid">
          {content.cases.map((item) => (
            <article key={item.title} className="case-card reveal">
              <h3>{item.title}</h3>
              <div className="case-shift">
                <span>{item.before}</span>
                <span className="case-arrow">→</span>
                <span>{item.after}</span>
              </div>
              <ul className="mini-list">
                {item.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
