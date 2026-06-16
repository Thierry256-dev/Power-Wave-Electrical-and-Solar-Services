import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/#products' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#101828' }}>
      <div className="w-[90%] max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="text-xl font-bold tracking-wide" style={{ color: '#ffd700' }}>POWER WAVE</div>
              <div className="text-white/70 text-xs mt-0.5 tracking-wide">ELECTRICAL AND SOLAR SERVICES</div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Powering homes, businesses, and the future — your trusted electrical and solar partner in Bweyogerere, Uganda.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-2">
              {[
                { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
                { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
                { icon: 'fab fa-whatsapp', href: 'https://wa.me/256706022710', label: 'WhatsApp' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-white/60 hover:text-yellow-400 hover:border-yellow-400/50 transition-all duration-300 text-sm hover:scale-110"
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-5" style={{ color: '#ffd700' }}>Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('/#')) {
                        e.preventDefault()
                        scrollTo(link.href.replace('/#', ''))
                      }
                    }}
                    className="flex items-center gap-2 text-white/60 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    <i className="fa-solid fa-chevron-right text-[10px]" style={{ color: '#ffd700' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-5" style={{ color: '#ffd700' }}>Contact Us</h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: 'fa-solid fa-envelope', text: 'powerplus520@gmail.com', href: 'mailto:powerplus520@gmail.com' },
                { icon: 'fa-solid fa-phone', text: '0706022710', href: 'tel:0706022710' },
                { icon: 'fa-solid fa-phone', text: '0778488424', href: 'tel:0778488424' },
                { icon: 'fa-solid fa-location-dot', text: 'Bweyogerere, Uganda', href: '#' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-3 text-white/60 hover:text-yellow-400 transition-colors duration-300 text-sm"
                >
                  <i className={`${item.icon} w-4 flex-shrink-0`} style={{ color: '#ffd700' }} />
                  {item.text}
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/256706022710"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: '#25D366', color: '#fff', boxShadow: '0 4px 12px rgba(37,211,102,0.25)' }}
            >
              <i className="fab fa-whatsapp" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-[90%] max-w-7xl mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © 2026 POWER WAVE ELECTRICAL AND SOLAR SERVICES. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">Bweyogerere, Uganda</p>
        </div>
      </div>
    </footer>
  )
}
