import './About.css'

const stats = [
  { value: 'Locally Owned', sub: '& Operated', label: 'Albany, NY' },
  { value: '5K+', sub: 'Happy Customers', label: 'And Counting' },
  { value: 'Complete', sub: 'Auto Solutions', label: 'Sales, Service & Custom' },
  { value: '100%', sub: 'Satisfaction Goal', label: 'Every Time' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-text">
            <p className="section-subtitle">Who We Are</p>
            <h2 className="section-title">BUILT ON <span>TRUST</span></h2>
            <div className="divider" />
            <p className="about-body">
              Empire Auto Garage is Albany&apos;s go-to destination for everything automotive.
              From daily drivers to show cars, we treat every vehicle like it&apos;s our own.
              Our team of certified technicians and skilled craftsmen bring passion and precision
              to every job that rolls through our doors.
            </p>
            <p className="about-body">
              Whether you need a routine oil change, a full collision repair, a custom vinyl wrap,
              or protection film for a brand-new luxury vehicle — Empire has the skills, tools,
              and experience to get the job done right the first time.
            </p>
            <a href="tel:5189490332" className="about-btn">
              Call Us Today
            </a>
          </div>

          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <span className="stat-value">{s.value}</span>
                <span className="stat-sub">{s.sub}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
