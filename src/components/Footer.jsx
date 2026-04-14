import './Footer.css'

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="footer-logo-empire">EMPIRE</span>
                <span className="footer-logo-sub">AUTO GARAGE</span>
              </div>
              <p className="footer-tagline">
                Albany&apos;s Premier Auto Shop.<br />
                Sales · Service · Collision · Tint · PPF · Vinyl · Custom
              </p>
            </div>

            <div className="footer-nav">
              <p className="footer-nav-title">Quick Links</p>
              <ul>
                {['Services', 'About', 'Hours', 'Contact'].map((link) => (
                  <li key={link}>
                    <button onClick={() => scrollTo(link.toLowerCase())}>{link}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <p className="footer-nav-title">Contact</p>
              <p><a href="tel:5189490332">518-949-0332</a></p>
              <p>105 2nd Ave</p>
              <p>Albany, NY 12202</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Empire Auto Garage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
