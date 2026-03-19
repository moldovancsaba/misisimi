import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href="/" className="logo-group">
          <Image src="/misisimi_title.png" alt="misisimi title" width={309} height={40} className="logo-title" priority />
        </Link>
        <div className="nav-links">
          <Link href="#capabilities" className="nav-link">Capabilities</Link>
          <Link href="#approach" className="nav-link">Approach</Link>
          <Link href="#testimonials" className="nav-link">Outcomes</Link>
          <Link href="#contact" className="nav-link btn-nav">Contact</Link>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          background: rgba(11, 11, 18, 0.9);
          backdrop-filter: blur(12px);
          z-index: 100;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px; /* Standard height for 40px branding */
          max-width: 1000px;
          margin: 0 auto;
          width: 100%;
          padding: 0 1.5rem; /* Exactly matches hero section padding */
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--muted);
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: var(--text);
        }
        .btn-nav {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 0.5rem 1.25rem;
          border-radius: 6px;
          color: var(--text);
          font-weight: 600;
        }
        .btn-nav:hover {
          border-color: var(--primary);
        }
        .logo-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          text-decoration: none !important;
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
