'use client';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="cta-banner">
          <h2 className="text-gradient">Ready to automate your operations?</h2>
          <p className="section-subtitle" style={{marginBottom: '3rem'}}>Take the first step with our AI Diagnostic.</p>
          <Link href="#contact" className="btn btn-primary">
            Get Your AI Diagnostic
          </Link>
        </div>
      </div>
    </section>
  );
}
