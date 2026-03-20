'use client';
import { useState } from 'react';
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo-group">
          <Link href="#top" className="logo-link" onClick={closeMenu}>
            <img src="/misisimi_title.png" alt="MISISIMI" className="brand-logo" />
          </Link>
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={`nav-toggle-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`nav-toggle-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`nav-toggle-line ${isOpen ? 'open' : ''}`}></span>
        </button>
        <div id="site-navigation" className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
          <Link href="#top" className="nav-item" onClick={closeMenu}>Home</Link>
          <Link href="#services" className="nav-item" onClick={closeMenu}>Services</Link>
          <Link href="#how-it-works" className="nav-item" onClick={closeMenu}>How It Works</Link>
          <Link href="#pricing" className="nav-item" onClick={closeMenu}>Pricing</Link>
          <Link href="#faq" className="nav-item" onClick={closeMenu}>FAQ</Link>
          <Link href="#contact" className="nav-item btn btn-nav" onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}
