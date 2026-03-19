import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href="/" className="logo-group">
          <Image src="/logo.svg" alt="misisimi logo" width={32} height={32} />
          <span className="logo-text">misisimi</span>
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
          height: 72px;
        }
        .logo-group {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-weight: 800; /* Heavier for brand impact */
          font-size: 1.5rem;
          letter-spacing: -0.05em; /* Tight logo tracking */
          line-height: 1;
        }
        .logo-text {
          color: var(--text);
          /* Removed gradient from logo text for cleaner "executive" look, 
             or keep it subtle if desired. I'll use text-color for now. */
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
