'use client';
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo-group">
          <Link href="/" className="logo-link">
            <img src="/misisimi_title.png" alt="MISISIMI" className="brand-logo" />
          </Link>
        </div>
        <div className="nav-links">
          <Link href="/" className="nav-item">Home</Link>
          <Link href="/services" className="nav-item">Services</Link>
          <Link href="/how-it-works" className="nav-item">How It Works</Link>
          <Link href="#faq" className="nav-item">FAQ</Link>
          <Link href="#contact" className="nav-item btn btn-nav">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
