import { type Dictionary } from '@/i18n/dictionaries';

type ProblemProps = {
  content: Dictionary['problem'];
};

export default function Problem({ content }: ProblemProps) {
  const rowsWithImages = content.items.filter((item) => item.image);
  const rowsWithoutImages = content.items.filter((item) => !item.image);

  return (
    <section id="problem" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>
        {!!rowsWithImages.length && (
          <div className="problem-rows">
            {rowsWithImages.map((problem, index) => (
              <div key={problem.eyebrow} className="problem-row-group">
                <span className="capability-eyebrow problem-card-eyebrow">
                  <span>{problem.emoji}</span>
                  <span className="eyebrow-text">{problem.eyebrow}</span>
                </span>
                <div className={`problem-row ${index % 2 === 1 ? 'problem-row-reverse' : ''}`}>
                  <div className="problem-row-media">
                    <img src={problem.image} alt={problem.eyebrow} className="problem-row-image" />
                  </div>
                  <div className="card problem-item problem-item-landscape">
                    <h3>{problem.title}</h3>
                    <div className="case-content">
                      <div className="case-part">
                        <span className="part-label">{content.labels.problem}</span>
                        <p className="case-text">{problem.problem}</p>
                      </div>
                      <div className="case-part">
                        <span className="part-label part-label-primary">{content.labels.businessImpact}</span>
                        <ul className="outcome-list">
                          {problem.impact.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="case-part">
                        <span className="part-label part-label-secondary">{content.labels.whatWeChange}</span>
                        <p className="problem-opportunity">{problem.opportunity}</p>
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
            {rowsWithoutImages.map((problem) => (
              <div key={problem.eyebrow} className="problem-card-group">
                <span className="capability-eyebrow problem-card-eyebrow">
                  <span>{problem.emoji}</span>
                  <span className="eyebrow-text">{problem.eyebrow}</span>
                </span>
                <div className="card problem-item card-portrait">
                  <h3>{problem.title}</h3>
                  <div className="case-content">
                    <div className="case-part">
                      <span className="part-label">{content.labels.problem}</span>
                      <p className="case-text">{problem.problem}</p>
                    </div>
                    <div className="case-part">
                      <span className="part-label part-label-primary">{content.labels.businessImpact}</span>
                      <ul className="outcome-list">
                        {problem.impact.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="case-part">
                      <span className="part-label part-label-secondary">{content.labels.whatWeChange}</span>
                      <p className="problem-opportunity">{problem.opportunity}</p>
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
