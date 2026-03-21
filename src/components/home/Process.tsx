import Image from 'next/image';
import { type Dictionary } from '@/i18n/dictionaries';

type ProcessProps = {
  content: Dictionary['process'];
};

export default function Process({ content }: ProcessProps) {
  return (
    <section id="process" className="section section-dark" aria-labelledby="process-title">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-kicker">{content.kicker}</p>
          <h2 id="process-title" className="section-title">{content.title}</h2>
        </div>

        <div className="step-grid">
          {content.items.map((item) => (
            <article key={item.step} className="step-card reveal">
              <div className="step-media">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="step-image"
                />
              </div>
              <div className="step-copy">
                <span className="step-index">{item.step}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
