'use client';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="cta-banner">
          <h2>Start with a clear understanding of where AI fits your business</h2>
          <Link href="#contact" className="btn btn-primary">
            Get Your AI Diagnostic
          </Link>
        </div>
      </div>
    </section>
  );
}
