import { type Dictionary } from '@/i18n/dictionaries';

type UseCasesProps = {
  content: Dictionary['useCases'];
};

export default function UseCases({ content }: UseCasesProps) {
  const rowsWithImages = content.items.filter((item) => item.image);
  const rowsWithoutImages = content.items.filter((item) => !item.image);

  return (
    <section id="use-cases" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>
        {!!rowsWithImages.length && (
          <div className="media-rows">
            {rowsWithImages.map((item, index) => (
              <div key={item.eyebrow} className="media-row-group">
                <span className="capability-eyebrow card-group-eyebrow">
                  <span>{item.emoji}</span>
                  <span className="eyebrow-text">{item.eyebrow}</span>
                </span>
                <div className={`media-row ${index % 2 === 1 ? 'media-row-reverse' : ''}`}>
                  <div className="media-row-media">
                    <img src={item.image} alt={item.eyebrow} className="media-row-image" />
                  </div>
                  <div className="card use-case-card media-item-landscape">
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
              </div>
            ))}
          </div>
        )}
        {!!rowsWithoutImages.length && (
          <div className="grid-3">
            {rowsWithoutImages.map((item) => (
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
        )}
      </div>
    </section>
  );
}
