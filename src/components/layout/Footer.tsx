import Link from 'next/link';
import { type Dictionary } from '@/i18n/dictionaries';
import { type Locale } from '@/i18n/config';

type FooterProps = {
  locale: Locale;
  content: Dictionary['footer'];
};

export default function Footer({ locale, content }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href={`/${locale}#top`} className="logo-link footer-logo-link">
            <img src="/logo-misisimi-line.png" alt="MISISIMI" className="brand-logo brand-logo-desktop footer-brand-logo" />
            <img src="/logo-misisimi-rectangle.png" alt="MISISIMI" className="brand-logo brand-logo-mobile footer-brand-logo" />
          </Link>
          <p className="footer-tagline">{content.tagline}</p>
        </div>

        <nav className="footer-links" aria-label={content.label}>
          <Link href={`/${locale}#trust`}>{content.links.trust}</Link>
          <Link href={`/${locale}#outcomes`}>{content.links.outcomes}</Link>
          <Link href={`/${locale}#process`}>{content.links.process}</Link>
          <Link href={`/${locale}#pricing`}>{content.links.pricing}</Link>
          <Link href={`/${locale}#contact`}>{content.links.contact}</Link>
        </nav>

        <div className="footer-meta">
          <a href="mailto:hello@misisimi.com" className="email-link">hello@misisimi.com</a>
          <p>© {new Date().getFullYear()} {content.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
