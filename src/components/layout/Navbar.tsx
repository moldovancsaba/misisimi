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
          height: 160px;
          max-width: 1000px;
          margin: 0 auto;
          width: 100%;
          padding: 0 1.5rem; /* Matches the hero section padding exactly */
        }
        .logo-group {
          display: flex;
          align-items: center;
          gap: 2rem;
          text-decoration: none !important;
          white-space: nowrap;
        }
        .logo-img {
          width: clamp(80px, 6vw, 120px);
          height: auto;
          filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.3));
          flex-shrink: 0;
          margin-left: -1.5rem; /* Offsets the image whitespace to align cube with content edge */
        }
        .logo-text {
          position: relative;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
          font-weight: 950;
          font-size: clamp(2.5rem, 5vw, 4rem);
          letter-spacing: -0.05em; 
          line-height: 1;
          text-transform: uppercase;
          flex-shrink: 0;
          z-index: 1;
        }
        .logo-text::after {
          content: "MISISIMI";
          position: absolute;
          left: 0;
          top: 15px; /* Distance 15px */
          width: 100%;
          height: 100%;
          color: white; /* 100% White Shadow */
          z-index: -1; /* Confirmed BACKGROUND placement */
          filter: none; /* No blur as requested */
          pointer-events: none;
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
