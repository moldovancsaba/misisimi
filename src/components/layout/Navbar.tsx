import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href="/" className="logo-group">
          <Image src="/logo.png" alt="misisimi logo" width={240} height={240} className="logo-img" priority />
          <span className="logo-text">MISISIMI</span>
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
          height: 400px; /* Massive headroom for 200px branding */
        }
        .logo-group {
          display: flex;
          align-items: center;
          gap: 3rem;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
          font-weight: 700;
          font-size: 200px; /* Explicit size as DRAWN */
          color: white; /* SOLID WHITE as requested */
          letter-spacing: -0.05em; 
          line-height: 1;
          text-decoration: none !important;
          text-transform: uppercase;
        }
        .logo-img {
          filter: drop-shadow(0 0 40px rgba(168, 85, 247, 0.4));
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
