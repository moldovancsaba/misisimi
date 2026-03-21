import { type Dictionary } from '@/i18n/dictionaries';

type OutcomesProps = {
  content: Dictionary['outcomes'];
};

export default function Outcomes({ content }: OutcomesProps) {
  return (
    <section id="outcomes" className="section" aria-labelledby="outcomes-title">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-kicker">{content.kicker}</p>
          <h2 id="outcomes-title" className="section-title">{content.title}</h2>
        </div>

        <div className="outcome-grid">
          {content.items.map((item) => (
            <article key={item.title} className="outcome-card reveal">
              <span className="outcome-icon" aria-hidden="true">{item.emoji}</span>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
