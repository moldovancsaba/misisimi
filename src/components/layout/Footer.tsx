'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
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
            <p className="footer-tagline">
              Turning AI concept into production-ready business value.
            </p>
            <div className="footer-meta">
              <p>Diagnostic-first engagement</p>
              <p>Operational AI, automation, and integration delivery</p>
              <p>Response target: 24-72 hours</p>
            </div>
          </div>
          
          <nav className="footer-column">
            <h4>🛠️ Solutions</h4>
            <Link href="#pricing">AI Diagnostic</Link>
            <Link href="#services">Custom Models</Link>
            <Link href="#services">Automation</Link>
          </nav>

          <nav className="footer-column">
            <h4>🌐 Company</h4>
            <Link href="#services">Services</Link>
            <Link href="#how-it-works">How It Works</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <div className="footer-column">
            <h4>✨ Connect</h4>
            <a href="mailto:hello@misisimi.com" className="email-link">hello@misisimi.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} misisimi — Zero2Done Execution
          </div>
          <div className="footer-legal">
            <Link href="#faq">FAQ</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
