import './Services.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Sales',
    desc: 'Quality pre-owned vehicles with transparent pricing. Find your next ride at Empire.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Service',
    desc: 'Full mechanical service — oil changes, brakes, diagnostics, engine repairs, and more.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <path d="M12 12v4"/>
        <path d="M8 12h8"/>
      </svg>
    ),
    title: 'Collision',
    desc: 'Expert collision repair and bodywork that restores your vehicle to factory condition.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4"/>
        <path d="M12 16h.01"/>
        <path d="M8 12a4 4 0 0 1 8 0"/>
      </svg>
    ),
    title: 'Window Tint',
    desc: 'Professional window tinting for UV protection, privacy, and a sleek look.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/>
        <path d="M12 6v6l4 2"/>
        <path d="M8.5 14.5A6 6 0 0 0 12 18a6 6 0 0 0 3.5-3.5"/>
      </svg>
    ),
    title: 'PPF',
    desc: 'Paint Protection Film shields your paint from rock chips, scratches, and road debris.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Vinyl Wrap',
    desc: 'Full or partial vinyl wraps in any color or finish — matte, gloss, chrome, and more.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Custom Work',
    desc: 'One-of-a-kind customizations tailored to your vision — no job too unique.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <p className="section-subtitle">What We Do</p>
        <h2 className="section-title">OUR <span>SERVICES</span></h2>
        <div className="divider" />

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
