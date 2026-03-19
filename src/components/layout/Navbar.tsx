import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href="/" className="logo-group">
          <Image src="/logo.png" alt="misisimi logo" width={80} height={80} className="logo-img" priority />
          <span className="logo-text text-gradient">MISISIMI</span>
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
          height: 120px;
          max-width: 1000px; /* Perfectly aligned with hero container */
          margin: 0 auto;
          width: 100%;
          padding: 0; /* Remove padding to match hero alignment */
        }
        .logo-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          text-decoration: none !important;
          white-space: nowrap;
        }
        .logo-img {
          filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.3));
          flex-shrink: 0;
        }
        .logo-text {
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
          font-weight: 800;
          font-size: 3.5rem;
          letter-spacing: -0.05em; 
          line-height: 1;
          text-transform: uppercase;
          flex-shrink: 0;
          -webkit-text-stroke: 3px white; /* Massive high-contrast border */
          paint-order: stroke fill;
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
