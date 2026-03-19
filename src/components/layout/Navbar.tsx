'use client';
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo-group">
          <Link href="/" className="logo">MISISIMI</Link>
        </div>
        <div className="nav-links">
          <Link href="/" className="nav-item">Home</Link>
          <Link href="/services" className="nav-item">Services</Link>
          <Link href="/how-it-works" className="nav-item">How It Works</Link>
          <Link href="#faq" className="nav-item">FAQ</Link>
          <Link href="#contact" className="nav-item btn btn-nav">Contact</Link>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          background: rgba(245, 247, 250, 0.8); /* Corrected FA to 250 */
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
          max-width: 1000px;
          margin: 0 auto;
          width: 100%;
          padding: 0 1.5rem;
        }
        .logo-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          text-decoration: none !important;
        }
        .logo {
          font-family: 'Sora', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary);
          text-decoration: none;
          letter-spacing: -0.02em;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }
        .nav-item {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-item:hover {
          color: var(--accent);
        }
        .btn-nav {
          background: var(--primary);
          color: white;
          padding: 8px 20px;
          border-radius: var(--radius-btn);
          border: none;
          font-size: 0.9375rem;
        }
        .btn-nav:hover {
        }
        .logo-title {
          height: 40px;
          width: auto;
          filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.2));
        }
        .nav-tagline {
          font-weight: 600;
          font-size: 0.75rem;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-left: 1px solid var(--border);
          padding-left: 1rem;
        }
      `}</style>
    </nav>
  )
}
