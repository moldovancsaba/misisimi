import Image from 'next/image';
import Link from 'next/link';
import { type Dictionary } from '@/i18n/dictionaries';
import { type Locale } from '@/i18n/config';

type HeroProps = {
  locale: Locale;
  content: Dictionary['hero'];
};

export default function Hero({ locale, content }: HeroProps) {
  return (
    <section className="hero section" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <h1 id="hero-title" className="hero-title">{content.title}</h1>
          <p className="hero-subtitle">{content.subtitle}</p>
          <div className="hero-actions">
            <Link
              href={`/${locale}#contact`}
              className="btn btn-primary"
              data-track="hero-primary-cta"
            >
              {content.primaryCta}
            </Link>
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="hero-image-shell">
            <Image
              src="/hero.png"
              alt={content.imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 40vw"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
