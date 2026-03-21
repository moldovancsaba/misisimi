import { type Dictionary } from '@/i18n/dictionaries';

type CapabilitiesProps = {
  content: Dictionary['services'];
};

export default function Capabilities({ content }: CapabilitiesProps) {
  const rowsWithImages = content.items.filter((item) => item.image);
  const rowsWithoutImages = content.items.filter((item) => !item.image);

  return (
    <section id="services" className="section-padding">
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
                  <article className="card capability-card media-item-landscape">
                    <h3>{item.title}</h3>
                    <div className="case-content">
                      <div className="case-part">
                        <span className="part-label">{content.labels.overview}</span>
                        <p className="capability-body">{item.body}</p>
                      </div>
                      <div className="case-part">
                        <span className="part-label part-label-primary">{content.labels.includes}</span>
                        <ul className="capability-list">
                          {item.includes.map((entry) => (
                            <li key={entry}>{entry}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="case-part">
                        <span className="part-label part-label-secondary">{content.labels.output}</span>
                        <ul className="capability-list">
                          {item.output.map((entry) => (
                            <li key={entry}>{entry}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
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
                <article className="card card-portrait capability-card">
                  <h3>{item.title}</h3>
                  <div className="case-content">
                    <div className="case-part">
                      <span className="part-label">{content.labels.overview}</span>
                      <p className="capability-body">{item.body}</p>
                    </div>
                    <div className="case-part">
                      <span className="part-label part-label-primary">{content.labels.includes}</span>
                      <ul className="capability-list">
                        {item.includes.map((entry) => (
                          <li key={entry}>{entry}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="case-part">
                      <span className="part-label part-label-secondary">{content.labels.output}</span>
                      <ul className="capability-list">
                        {item.output.map((entry) => (
                          <li key={entry}>{entry}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
