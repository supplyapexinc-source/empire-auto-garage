import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">Albany&apos;s Premier Auto Shop</p>
        <h1 className="hero-title">
          EMPIRE<br />
          <span>AUTO</span><br />
          GARAGE
        </h1>
        <p className="hero-tagline">
          Sales &bull; Service &bull; Collision &bull; Tint &bull; PPF &bull; Vinyl Wrap &bull; Custom
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Get a Quote
          </button>
          <button className="btn-outline" onClick={() => scrollTo('services')}>
            Our Services
          </button>
        </div>
        <a href="tel:5189490332" className="hero-phone">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.39 21 3 14.61 3 7a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
          </svg>
          518-949-0332
        </a>
      </div>

      <div className="hero-scroll-hint">
        <span />
      </div>
    </section>
  )
}
