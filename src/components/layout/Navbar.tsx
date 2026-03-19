import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href="/" className="logo-group">
          <Image src="/logo.png" alt="misisimi logo" width={160} height={160} className="logo-img" priority />
          <span className="logo-text text-gradient">misisimi</span>
        </Link>
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
          height: 220px; /* Extreme height for massive branding */
        }
        .logo-group {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-weight: 900;
          font-size: 7rem; /* Extreme scale to match 160px visual unit */
          letter-spacing: -0.09em; 
          line-height: 0.7;
          text-decoration: none;
        }
        .logo-img {
          filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.3));
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
