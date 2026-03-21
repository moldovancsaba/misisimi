import Image from 'next/image';
import { type Dictionary } from '@/i18n/dictionaries';

type CapabilitiesGridProps = {
  content: Dictionary['capabilities'];
};

export default function UseCases({ content }: CapabilitiesGridProps) {
  return (
    <section id="capabilities" className="section" aria-labelledby="capabilities-title">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-kicker">{content.kicker}</p>
          <h2 id="capabilities-title" className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>

        <div className="comic-grid">
          {content.items.map((item) => (
            <article key={item.title} className="comic-card reveal">
              <h3>{item.title}</h3>
              <div className="comic-visual">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="comic-image"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
