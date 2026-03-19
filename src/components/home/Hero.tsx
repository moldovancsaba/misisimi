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
        .btn-secondary {
          background: transparent;
          color: white;
          border: 4px solid var(--border);
        }
        .btn-secondary:hover {
          border-color: var(--primary);
          background: var(--surface);
        }
        .hero {
          position: relative;
          overflow: hidden;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }
        h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 1.5rem;
          max-width: 900px;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          line-height: 1.6;
          max-width: 640px;
          margin-bottom: 2.5rem;
          color: var(--muted);
        }
        /* Global button styles are now managed in globals.css */
        .hero-visual {
          position: relative;
        }
        .cube-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
        }
        .hero-image {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 0 50px rgba(168, 85, 247, 0.2));
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
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
