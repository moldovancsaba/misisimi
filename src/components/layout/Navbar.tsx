'use client';

import { useState } from 'react';
import Link from 'next/link';
import { type Dictionary } from '@/i18n/dictionaries';
import { type Locale } from '@/i18n/config';

type NavbarProps = {
  locale: Locale;
  nav: Dictionary['nav'];
  localeOptions: Array<{ code: Locale; nativeLabel: string; flag: string }>;
};

export default function Navbar({ locale, nav, localeOptions }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const sectionHref = (id: string) => `/${locale}${id}`;

  const handleLocaleChange = (nextLocale: Locale) => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    closeMenu();
    window.location.href = `/${nextLocale}${hash}`;
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href={`/${locale}#top`} className="logo-link" onClick={closeMenu}>
          <img src="/logo-misisimi-line.png" alt="MISISIMI" className="brand-logo brand-logo-desktop" />
          <img src="/logo-misisimi-rectangle.png" alt="MISISIMI" className="brand-logo brand-logo-mobile" />
        </Link>

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
          <Link href={sectionHref('#trust')} className="nav-item" onClick={closeMenu}>{nav.trust}</Link>
          <Link href={sectionHref('#outcomes')} className="nav-item" onClick={closeMenu}>{nav.outcomes}</Link>
          <Link href={sectionHref('#process')} className="nav-item" onClick={closeMenu}>{nav.process}</Link>
          <Link href={sectionHref('#pricing')} className="nav-item" onClick={closeMenu}>{nav.pricing}</Link>
          <Link href={sectionHref('#contact')} className="nav-item btn btn-nav" onClick={closeMenu}>{nav.contact}</Link>
          <div className="locale-switcher">
            <label className="locale-select-wrap" aria-label={nav.language}>
              <span className="locale-select-globe" aria-hidden="true">🌐</span>
              <select
                className="locale-select"
                value={locale}
                onChange={(event) => handleLocaleChange(event.target.value as Locale)}
              >
                {localeOptions.map((option) => (
                  <option key={option.code} value={option.code} lang={option.code}>
                    {option.flag} {option.nativeLabel}
                  </option>
                ))}
              </select>
              <span className="locale-select-caret" aria-hidden="true">▾</span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
