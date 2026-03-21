import Link from 'next/link';
import { type Dictionary } from '@/i18n/dictionaries';
import { type Locale } from '@/i18n/config';

type HeroProps = {
  locale: Locale;
  content: Dictionary['hero'];
};

export default function Hero({ locale, content }: HeroProps) {
  return (
    <section className="hero section-padding">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-heading">{content.title}</h1>
            <p className="hero-subtitle">{content.subtitle}</p>
            <div className="cta-group">
              <Link href={`/${locale}#contact`} className="btn hero-btn-primary">🎯 {content.primaryCta}</Link>
              <Link href={`/${locale}#how-it-works`} className="btn hero-btn-secondary">🛠️ {content.secondaryCta}</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-art-wrapper">
              <img src="/hero.png" alt={content.imageAlt} className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
