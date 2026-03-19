'use client';
const solutions = [
  { 
    step: "Diagnose", 
    title: "Identify where AI creates real value", 
    description: "Business analysis, data review, and opportunity mapping." 
  },
  { 
    step: "Build", 
    title: "Develop custom models, workflows, and integrations", 
    description: "Architecture design, tool selection, and engineering." 
  },
  { 
    step: "Deploy", 
    title: "Launch production-ready systems with measurable impact", 
    description: "Launch, monitoring, and ongoing optimization." 
  }
];

export default function Solution() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">We turn AI from concept into working systems</h2>
          <p className="section-subtitle">MISISIMI combines strategy, engineering, and automation to deliver AI solutions that integrate directly into your business operations.</p>
        </div>
        <div className="grid-3">
          {solutions.map((item, i) => (
            <div key={i} className="card step-card card-landscape">
              <div className="step-number">{i + 1}</div>
              <h3>{item.step}</h3>
              <p className="solution-title">{item.title}</p>
              <p className="solution-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
