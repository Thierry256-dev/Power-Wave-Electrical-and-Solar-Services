import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/#products' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (e, href) => {
    setMenuOpen(false)
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') return // let Link handle navigation
      e.preventDefault()
      const id = href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`sticky top-0 z-50 font-poppins transition-all duration-300 ${
      scrolled
        ? 'shadow-[0_8px_32px_rgba(20,33,61,0.25)] py-2'
        : 'shadow-[0_4px_20px_rgba(20,33,61,0.15)] py-3'
    }`}
    style={{ background: 'linear-gradient(135deg, #14213d 0%, #0f1a2c 100%)' }}>
      <div className="w-[90%] max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight hover:opacity-90 transition-opacity z-[102]">
          <span className="text-accent font-bold text-xl tracking-wide" style={{ color: '#ffd700' }}>POWER WAVE</span>
          <span className="text-white/90 font-light text-[0.78rem] tracking-tight hidden sm:block">
            ELECTRICAL AND SOLAR SERVICES
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0">
          {navItems.map(item => (
            <li key={item.label}>
              <Link
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-white font-medium text-[1rem] hover:text-yellow-400 transition-colors duration-300 nav-link-underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="px-6 py-2.5 rounded-full font-semibold text-[0.95rem] transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #ffd700 0%, #ffc700 100%)',
                color: '#14213d',
                boxShadow: '0 4px 12px rgba(255,215,0,0.25)',
              }}
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] justify-center items-center w-10 h-10 rounded-lg bg-white/10 border-none cursor-pointer hover:bg-white/15 transition-all z-[102]"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-[3px] w-6 rounded-sm transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} style={{ background: '#ffd700' }} />
          <span className={`block h-[3px] w-6 rounded-sm transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: '#ffd700' }} />
          <span className={`block h-[3px] w-6 rounded-sm transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} style={{ background: '#ffd700' }} />
        </button>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[100] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-[360px] z-[101] flex flex-col p-8 gap-6 md:hidden transition-transform duration-400 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: 'linear-gradient(135deg, #14213d 0%, #0f1a2c 100%)', boxShadow: '-4px 0 20px rgba(20,33,61,0.3)' }}
      >
        {/* Close */}
        <button
          className="self-start flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 text-yellow-400 text-2xl mb-4 hover:bg-white/10 hover:rotate-90 transition-all duration-300 border-none cursor-pointer"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <i className="fa-solid fa-xmark" />
        </button>

        {navItems.map(item => (
          <Link
            key={item.label}
            to={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-white font-medium text-[1.1rem] py-2 hover:text-yellow-400 transition-colors duration-300"
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/#contact"
          onClick={(e) => handleNavClick(e, '/#contact')}
          className="mt-4 text-center px-6 py-3 rounded-full font-semibold text-[0.95rem] w-full transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, #ffd700 0%, #ffc700 100%)', color: '#14213d' }}
        >
          Get a Quote
        </Link>
      </div>
    </nav>
  )
}
