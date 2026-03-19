export default function ContactForm() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-title">Contact</h2>
            <p>Ready to solve your business complexity? Let's talk.</p>
          </div>
          <form className="form">
            <div className="form-group">
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Company" />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          background: var(--surface);
          padding: 4rem;
          border-radius: 24px;
          border: 1px solid var(--border);
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        input {
          width: 100%;
          padding: 1rem 1.25rem;
          background: #0F0F18;
          border: 1px solid var(--border);
          color: white;
          border-radius: 12px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }
        input:focus {
          outline: none;
          border-color: var(--primary);
        }
        .btn {
          padding: 1rem;
          border-radius:12px;
          background: var(--gradient);
          color: white;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}
