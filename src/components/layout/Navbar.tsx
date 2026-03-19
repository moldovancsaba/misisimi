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
          justify-content: flex-start;
          align-items: center;
          height: 300px; /* Massive height for the final brand statement */
        }
        .logo-group {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          font-weight: 950; /* Absolute maximum weight */
          font-size: 10rem; /* Matches the 160px logo visual presence */
          letter-spacing: -0.1em; 
          line-height: 1; /* Standard line-height to avoid squashing */
          text-decoration: none !important;
        }
        .logo-img {
          filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.4));
        }
        .logo-text {
          display: inline-block;
          vertical-align: middle;
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
