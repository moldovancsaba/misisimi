'use client';
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo-group">
          <Link href="/" className="logo-link">
            <img src="/logo.svg" alt="MISISIMI Logo" className="logo-img" />
            <span className="logo-text text-gradient">MISISIMI</span>
          </Link>
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
          background: rgba(3, 3, 3, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 90px;
          max-width: var(--container-max);
          margin: 0 auto;
          width: 100%;
          padding: 0 2rem;
        }
        .logo-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          text-decoration: none !important;
        }
        .logo-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        .logo-img {
          height: 32px;
          width: 32px;
        }
        .logo-text {
          font-family: 'Sora', sans-serif;
          font-size: 1.75rem;
          font-weight: 900;
          letter-spacing: -0.04em;
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
