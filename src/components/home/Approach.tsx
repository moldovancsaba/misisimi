import { type Dictionary } from '@/i18n/dictionaries';

type ApproachProps = {
  content: Dictionary['approach'];
};

export default function Approach({ content }: ApproachProps) {
  const rowsWithImages = content.items.filter((item) => item.image);
  const rowsWithoutImages = content.items.filter((item) => !item.image);

  return (
    <section id="how-it-works" className="section-padding">
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
                    <img src={item.image} alt={item.step} className="media-row-image" />
                  </div>
                  <div className="card step-card media-item-landscape">
                    <h3>{item.step}</h3>
                    <div className="case-content">
                      <div className="case-part">
                        <span className="part-label">{content.labels.focus}</span>
                        <p className="case-text">{item.title}</p>
                      </div>
                      <div className="case-part">
                        <span className="part-label part-label-primary">{content.labels.execution}</span>
                        <p className="case-text">{item.description}</p>
                      </div>
                      <div className="case-part">
                        <span className="part-label part-label-secondary">{content.labels.output}</span>
                        <p className="solution-output">{item.output}</p>
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
                <div className="card step-card card-portrait">
                  <h3>{item.step}</h3>
                  <div className="case-content">
                    <div className="case-part">
                      <span className="part-label">{content.labels.focus}</span>
                      <p className="case-text">{item.title}</p>
                    </div>
                    <div className="case-part">
                      <span className="part-label part-label-primary">{content.labels.execution}</span>
                      <p className="case-text">{item.description}</p>
                    </div>
                    <div className="case-part">
                      <span className="part-label part-label-secondary">{content.labels.output}</span>
                      <p className="solution-output">{item.output}</p>
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
