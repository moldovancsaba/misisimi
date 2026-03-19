'use client';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="copyright">
            © {new Date().getFullYear()} misisimi — Zero2Done Execution
          </div>
          <div className="footer-links">
            {/* Add links if needed */}
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          padding: 4rem 0;
          border-top: 1px solid var(--border);
          color: var(--muted);
          font-size: 0.875rem;
        }
        .footer-content {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </footer>
  )
}
