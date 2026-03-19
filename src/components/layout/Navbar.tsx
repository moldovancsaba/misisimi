import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href="/" className="logo-group">
          <Image src="/logo.png" alt="misisimi logo" width={80} height={80} className="logo-img" />
          <span className="logo-text text-gradient">misisimi</span>
        </Link>
        <div className="nav-tagline">Zero2Done Execution</div>
      </div>
      <style jsx>{`
        .navbar {
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          background: rgba(11, 11, 18, 0.8);
          backdrop-filter: blur(12px);
          z-index: 100;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 140px; /* Increased height for the huge logo */
        }
        .logo-group {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          font-weight: 900; /* Maximum brand impact */
          font-size: 4.5rem; /* Massive size to match 80px logo */
          letter-spacing: -0.08em; /* Extremely tight for the massive scale */
          line-height: 0.8;
          text-decoration: none; /* Explicit removal of underline */
        }
        .logo-img {
          filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.2));
        }
        .logo-text {
          /* Gradient is handled by the text-gradient utility class */
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
