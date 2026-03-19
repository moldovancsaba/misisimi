const outcomes = [
  {
    quote: "Execution speed increased significantly without adding resources.",
    client: "messmass.com"
  },
  {
    quote: "Seamless AI adoption across workflows.",
    client: "amanoba.com"
  },
  {
    quote: "Improved efficiency while keeping team intact.",
    client: "narimato.com"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Client Outcomes</h2>
        </div>
        <div className="grid-3">
          {outcomes.map((item, i) => (
            <div key={i} className="card testimonial-card">
              <p className="testimonial-quote">&quot;{item.quote}&quot;</p>
              <div className="testimonial-author">
                <span className="author-name">{item.client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
