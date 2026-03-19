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
            <a href="/services">Services</a>
            <a href="/how-it-works">How It Works</a>
            <a href="/#faq">FAQ</a>
            <a href="/#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
