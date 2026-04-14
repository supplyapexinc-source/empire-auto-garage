import './Hours.css'

const schedule = [
  { day: 'Monday', hours: '8:00 AM – 6:00 PM' },
  { day: 'Tuesday', hours: '8:00 AM – 6:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM – 6:00 PM' },
  { day: 'Thursday', hours: '8:00 AM – 6:00 PM' },
  { day: 'Friday', hours: '8:00 AM – 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

function isOpen() {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const time = hour + minute / 60
  if (day >= 1 && day <= 5) return time >= 8 && time < 18
  if (day === 6) return time >= 9 && time < 16
  return false
}

export default function Hours() {
  const open = isOpen()
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <section id="hours" className="hours">
      <div className="container">
        <div className="hours-inner">
          <div className="hours-header">
            <p className="section-subtitle">When to Visit</p>
            <h2 className="section-title">BUSINESS <span>HOURS</span></h2>
            <div className="divider" />
            <div className={`open-badge ${open ? 'open' : 'closed'}`}>
              <span className="badge-dot" />
              {open ? 'We are Open Now' : 'Currently Closed'}
            </div>
            <p className="hours-note">
              Walk-ins welcome. Call ahead for collision &amp; custom work appointments.
            </p>
          </div>

          <div className="hours-table">
            {schedule.map((row) => (
              <div
                key={row.day}
                className={`hours-row${row.day === today ? ' today' : ''}${row.hours === 'Closed' ? ' closed-day' : ''}`}
              >
                <span className="hours-day">{row.day}</span>
                <span className="hours-dots" />
                <span className="hours-time">{row.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
