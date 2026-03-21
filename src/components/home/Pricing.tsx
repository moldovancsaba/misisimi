import Link from 'next/link';
import { type Dictionary } from '@/i18n/dictionaries';

type PricingProps = {
  content: Dictionary['pricing'];
};

export default function Pricing({ content }: PricingProps) {
  return (
    <section id="pricing" className="section section-dark" aria-labelledby="pricing-title">
      <div className="container pricing-layout">
        <div className="pricing-copy reveal">
          <p className="section-kicker">{content.kicker}</p>
          <h2 id="pricing-title" className="section-title section-title-left">{content.title}</h2>
          <div className="pricing-lines">
            <p>{content.lineOne}</p>
            <p>{content.lineTwo}</p>
          </div>
          <div className="pricing-rate">{content.rate}</div>
          <p className="pricing-support">{content.support}</p>
        </div>

        <aside className="pricing-panel reveal">
          <h3>{content.examplesTitle}</h3>
          <div className="pricing-example-list">
            {content.examples.map((item) => (
              <div key={item.name} className="pricing-example-row">
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <Link href="#contact" className="btn btn-primary" data-track="pricing-cta">
            {content.cta}
          </Link>
        </aside>
      </div>
    </section>
  );
}
