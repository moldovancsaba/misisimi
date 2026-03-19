import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href="/" className="logo-group">
          <Image src="/logo.png" alt="misisimi logo" width={40} height={40} className="logo-img" priority />
          <Image src="/misisimi_title.png" alt="misisimi title" width={180} height={40} className="logo-title" priority />
        </Link>
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
          justify-content: flex-start;
          align-items: center;
          height: 80px; /* Standard height for 40px branding */
          max-width: 1000px;
          margin: 0 auto;
          width: 100%;
          padding: 0 1.5rem; /* Exactly matches hero section padding */
        }
        .logo-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          text-decoration: none !important;
        }
        .logo-img, .logo-title {
          height: 40px;
          width: auto;
          filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.2));
        }
        .logo-img {
          /* No more negative margin needed with asset-based alignment */
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
