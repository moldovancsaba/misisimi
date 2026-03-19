'use client';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="section-padding" style={{ background: 'var(--primary)', color: 'white' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
          Start with a clear understanding of where AI fits your business
        </h2>
        <Link href="#contact" className="btn btn-primary" style={{ background: 'var(--accent)', borderColor: 'var(--accent)', fontSize: '1.25rem', padding: '16px 32px' }}>
          Get Your AI Diagnostic
        </Link>
      </div>
    </section>
  );
}
