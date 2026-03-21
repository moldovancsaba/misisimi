import { type Dictionary } from '@/i18n/dictionaries';

type UseCasesProps = {
  content: Dictionary['useCases'];
};

export default function UseCases({ content }: UseCasesProps) {
  return (
    <section id="use-cases" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>
        <div className="grid-3">
          {content.items.map((item) => (
            <div key={item.eyebrow} className="card-group">
              <span className="capability-eyebrow card-group-eyebrow">
                <span>{item.emoji}</span>
                <span className="eyebrow-text">{item.eyebrow}</span>
              </span>
              <div className="card use-case-card card-portrait">
                <h3>{item.title}</h3>
                <div className="case-content">
                  <div className="case-part">
                    <span className="part-label">{content.labels.problem}</span>
                    <p className="case-text">{item.problem}</p>
                  </div>
                  <div className="case-part">
                    <span className="part-label part-label-primary">{content.labels.solution}</span>
                    <p className="case-text">{item.solution}</p>
                  </div>
                  <div className="case-part outcome">
                    <span className="part-label part-label-secondary">{content.labels.outcome}</span>
                    <ul className="outcome-list">
                      {item.outcome.map((text) => (
                        <li key={text}>{text}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
