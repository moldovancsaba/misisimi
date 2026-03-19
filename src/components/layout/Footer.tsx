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
          </div>
          
          <nav className="footer-column">
            <h4>Solutions</h4>
            <Link href="/services#diagnostic">AI Diagnostic</Link>
            <Link href="/services#custom">Custom Models</Link>
            <Link href="/services#automation">Automation</Link>
          </nav>

          <nav className="footer-column">
            <h4>Company</h4>
            <Link href="/services">Services</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/#contact">Contact</Link>
          </nav>

          <div className="footer-column">
            <h4>Connect</h4>
            <a href="mailto:hello@misisimi.com" className="email-link">hello@misisimi.com</a>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} misisimi — Zero2Done Execution
          </div>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
