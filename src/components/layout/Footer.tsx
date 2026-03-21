import Image from 'next/image';
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
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
              <Image
                src="/misisimi_title.png"
                alt="misisimi"
                width={120}
                height={25}
                className="footer-logo"
              />
            </div>
            <p className="footer-tagline">{content.tagline}</p>
            <div className="footer-meta">
              {content.meta.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <nav className="footer-column">
            <h4>🛠️ {content.columns.solutions}</h4>
            <Link href={`/${locale}#pricing`}>{content.links.diagnostic}</Link>
            <Link href={`/${locale}#services`}>{content.links.customModels}</Link>
            <Link href={`/${locale}#services`}>{content.links.automation}</Link>
          </nav>

          <nav className="footer-column">
            <h4>🌐 {content.columns.company}</h4>
            <Link href={`/${locale}#services`}>{content.links.services}</Link>
            <Link href={`/${locale}#how-it-works`}>{content.links.howItWorks}</Link>
            <Link href={`/${locale}#faq`}>{content.links.faq}</Link>
            <Link href={`/${locale}#contact`}>{content.links.contact}</Link>
          </nav>

          <div className="footer-column">
            <h4>✨ {content.columns.connect}</h4>
            <a href="mailto:hello@misisimi.com" className="email-link">hello@misisimi.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} {content.copyright}
          </div>
          <div className="footer-legal">
            <Link href={`/${locale}#faq`}>{content.links.faq}</Link>
            <Link href={`/${locale}#contact`}>{content.links.contact}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
