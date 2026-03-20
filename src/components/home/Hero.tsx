'use client';
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero section-padding">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="text-gradient">Build and deploy practical AI systems for your business — without complexity</h1>
            <p className="hero-subtitle">
              We diagnose the right opportunity, design the right system, and implement AI solutions that automate workflows, reduce costs, and produce measurable operational value.
            </p>
            <div className="cta-group">
              <Link href="#contact" className="btn btn-primary">🎯 Get Your AI Diagnostic</Link>
              <Link href="#how-it-works" className="btn btn-secondary">🛠️ See How It Works</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-art-wrapper">
              <img src="/hero.png" alt="MISISIMI hero artwork" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
