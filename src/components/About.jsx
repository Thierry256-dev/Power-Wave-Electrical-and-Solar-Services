import { useEffect, useRef, useState } from 'react'
import installationImg from '../assets/images/installation.jpg'

const stats = [
  { num: '500+', label: 'Projects\nCompleted', icon: 'fa-solid fa-hammer' },
  { num: '5+',   label: 'Years of\nExcellence', icon: 'fa-solid fa-calendar-check' },
  { num: '100%', label: 'Client\nSatisfaction', icon: 'fa-solid fa-star' },
]

const values = [
  { icon: 'fa-solid fa-shield-halved', label: 'Trusted & Safe' },
  { icon: 'fa-solid fa-award',         label: 'Award-Winning' },
  { icon: 'fa-solid fa-bolt',          label: 'Energy Efficient' },
  { icon: 'fa-solid fa-leaf',          label: 'Eco Friendly' },
]

export default function About() {
  const sectionRef  = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.12 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      style={{
        background: 'linear-gradient(160deg, #0b1220 0%, #14213d 60%, #0e1a30 100%)',
        padding: '100px 0 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative blobs */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,215,0,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '320px', height: '320px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div
        ref={sectionRef}
        style={{
          width: '92%',
          maxWidth: '1200px',
          margin: '0 auto',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(36px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        {/* ── Section Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#ffd700',
            marginBottom: '12px',
            background: 'rgba(255,215,0,0.1)',
            padding: '6px 18px',
            borderRadius: '100px',
            border: '1px solid rgba(255,215,0,0.2)',
          }}>
            Who We Are
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.15,
            margin: '0 auto',
            maxWidth: '560px',
          }}>
            Built on{' '}
            <span style={{ color: '#ffd700' }}>Trust</span> &amp;{' '}
            <span style={{ color: '#ffd700' }}>Innovation</span>
          </h2>
        </div>

        {/* ── Main Content Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '48px',
          alignItems: 'center',
        }}>

          {/* ── Left – Image Block ── */}
          <div style={{ order: 1 }}>
            <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>

              {/* Glow ring behind image */}
              <div style={{
                position: 'absolute', inset: '-12px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(255,215,0,0.25), transparent 60%)',
                filter: 'blur(12px)',
              }} />

              <img
                src={installationImg}
                alt="Solar panel installation in Uganda by Power Wave"
                style={{
                  width: '100%',
                  maxHeight: '460px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  display: 'block',
                  position: 'relative',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
                }}
              />

              {/* Floating badge – years */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-16px',
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ffd700 0%, #e6b800 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(255,215,0,0.4)',
                border: '4px solid #0b1220',
                zIndex: 10,
              }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 900, color: '#14213d', lineHeight: 1 }}>5+</span>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#14213d', textAlign: 'center', lineHeight: 1.3, marginTop: '2px' }}>
                  Years of<br />Excellence
                </span>
              </div>

              {/* Floating mini tag – top left */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '-14px',
                background: '#14213d',
                border: '1px solid rgba(255,215,0,0.3)',
                borderRadius: '12px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                zIndex: 10,
              }}>
                <i className="fa-solid fa-bolt" style={{ color: '#ffd700', fontSize: '18px' }} />
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>Solar &amp; Electrical</div>
                  <div style={{ fontSize: '10px', color: '#9ca3af' }}>Uganda's Trusted Partner</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right – Text Block ── */}
          <div style={{ order: 2 }}>
            <p style={{
              color: '#cbd5e1',
              fontSize: '1.05rem',
              lineHeight: 1.85,
              marginBottom: '32px',
            }}>
              <strong style={{ color: '#ffffff', fontWeight: 700 }}>POWER WAVE ELECTRICAL AND SOLAR SERVICES</strong> is
              built on{' '}
              <span style={{ color: '#ffd700', fontWeight: 600 }}>reliability</span>,{' '}
              <span style={{ color: '#ffd700', fontWeight: 600 }}>innovation</span>,{' '}
              <span style={{ color: '#ffd700', fontWeight: 600 }}>safety</span>, and{' '}
              <span style={{ color: '#ffd700', fontWeight: 600 }}>quality service</span>. We deliver trusted electrical
              and solar solutions for homes and businesses across Uganda, ensuring every project meets the highest
              international standards.
            </p>

            {/* Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              marginBottom: '32px',
            }}>
              {stats.map(s => (
                <div
                  key={s.label}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,215,0,0.15)',
                    borderRadius: '16px',
                    padding: '20px 12px',
                    textAlign: 'center',
                    transition: 'transform 0.25s ease, border-color 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.borderColor = 'rgba(255,215,0,0.4)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'rgba(255,215,0,0.15)'
                  }}
                >
                  <i className={s.icon} style={{ color: '#ffd700', fontSize: '20px', marginBottom: '8px', display: 'block' }} />
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '6px', whiteSpace: 'pre-line', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Values Pills */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
            }}>
              {values.map(v => (
                <div
                  key={v.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    transition: 'transform 0.25s ease, background 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.background = 'rgba(255,215,0,0.06)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  }}
                >
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'rgba(255,215,0,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <i className={v.icon} style={{ color: '#ffd700', fontSize: '15px' }} />
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#e2e8f0' }}>{v.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ marginTop: '36px' }}>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'linear-gradient(135deg, #ffd700 0%, #e6b800 100%)',
                  color: '#14213d',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '14px 28px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(255,215,0,0.25)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,215,0,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,215,0,0.25)'
                }}
              >
                <span>Get In Touch</span>
                <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile responsive tweaks */}
      <style>{`
        @media (max-width: 768px) {
          #about .about-grid > div:first-child { order: 1 !important; }
          #about .about-grid > div:last-child  { order: 2 !important; }
        }
      `}</style>
    </section>
  )
}
