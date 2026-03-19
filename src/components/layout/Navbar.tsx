'use client';
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo-group">
          <Link href="#top" className="logo-link">
            <img src="/misisimi_title.png" alt="MISISIMI" className="brand-logo" />
          </Link>
        </div>
        <div className="nav-links">
          <Link href="#top" className="nav-item">Home</Link>
          <Link href="#services" className="nav-item">Services</Link>
          <Link href="#how-it-works" className="nav-item">How It Works</Link>
          <Link href="#pricing" className="nav-item">Pricing</Link>
          <Link href="#faq" className="nav-item">FAQ</Link>
          <Link href="#contact" className="nav-item btn btn-nav">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
