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
          gap: 0.75rem;
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: -0.01em;
        }
        .logo-text {
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-tagline {
          font-weight: 500;
          font-size: 0.875rem;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>
    </nav>
  )
}
