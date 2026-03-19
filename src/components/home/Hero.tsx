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
              We diagnose, design, and implement custom AI solutions that automate workflows, reduce costs, and unlock actionable insights.
            </p>
            <div className="cta-group">
              <Link href="#contact" className="btn btn-primary">Get Your AI Diagnostic</Link>
              <Link href="#how-it-works" className="btn btn-secondary">See How It Works</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="cube-wrapper">
              <img src="/hero-cube.png" alt="Capability Cube" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .cta-group {
          display: flex;
          gap: 1.25rem;
          margin-top: 1rem;
        }
        .btn-secondary:hover {
          border-color: white;
          background: rgba(255, 255, 255, 0.1);
        }
        .hero {
          position: relative;
          overflow: hidden;
          background: transparent;
          padding: 80px 0;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-visual {
          position: relative;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .workflow-diagram {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3rem;
        }
        .node {
          width: 140px;
          height: 140px;
          border-radius: 40px; /* Squircle for modern feel */
          background: var(--surface);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Sora', sans-serif;
          font-weight: 800;
          font-size: 0.875rem;
          color: white;
          z-index: 2;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
        }
        .node::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 40px;
          padding: 2px;
          background: var(--gradient);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        .line {
          position: absolute;
          width: 4px;
          height: 60px;
          background: var(--accent);
          z-index: 1;
        }
        .line-1 { top: 125px; }
        .line-2 { bottom: 125px; }
        .accent-circle {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          z-index: 0;
        }
        h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 1.5rem;
          max-width: 900px;
          color: white;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          line-height: 1.8;
          max-width: 640px;
          margin-bottom: 3rem;
          color: #E2E8F0;
        }
        /* Global button styles are now managed in globals.css */
        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-subtitle {
            margin: 0 auto 2.5rem;
          }
          .cta-group {
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
