'use client';

import { useState } from 'react';
import Link from 'next/link';
import { type Dictionary } from '@/i18n/dictionaries';
import { type Locale } from '@/i18n/config';

type NavbarProps = {
  locale: Locale;
  nav: Dictionary['nav'];
  localeOptions: Array<{ code: Locale; nativeLabel: string }>;
};

export default function Navbar({
  locale,
  nav,
  localeOptions
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const sectionHref = (id: string) => `/${locale}${id}`;

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo-group">
          <Link href={`/${locale}#top`} className="logo-link" onClick={closeMenu}>
            <img src="/logo-misisimi-line.png" alt="MISISIMI" className="brand-logo brand-logo-desktop" />
            <img src="/logo-misisimi-rectangle.png" alt="MISISIMI" className="brand-logo brand-logo-mobile" />
          </Link>
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-label={isOpen ? nav.closeMenu : nav.openMenu}
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={`nav-toggle-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`nav-toggle-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`nav-toggle-line ${isOpen ? 'open' : ''}`}></span>
        </button>
        <div id="site-navigation" className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
          <Link href={`/${locale}#top`} className="nav-item" onClick={closeMenu}>{nav.home}</Link>
          <Link href={sectionHref('#services')} className="nav-item" onClick={closeMenu}>{nav.services}</Link>
          <Link href={sectionHref('#how-it-works')} className="nav-item" onClick={closeMenu}>{nav.howItWorks}</Link>
          <Link href={sectionHref('#pricing')} className="nav-item" onClick={closeMenu}>{nav.pricing}</Link>
          <Link href={sectionHref('#faq')} className="nav-item" onClick={closeMenu}>{nav.faq}</Link>
          <Link href={sectionHref('#contact')} className="nav-item btn btn-nav" onClick={closeMenu}>{nav.contact}</Link>
          <div className="locale-switcher" aria-label={nav.language}>
            {localeOptions.map((option) => (
              <Link
                key={option.code}
                href={`/${option.code}`}
                className={`locale-link ${option.code === locale ? 'locale-link-active' : ''}`}
                onClick={closeMenu}
                lang={option.code}
              >
                {option.nativeLabel}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
