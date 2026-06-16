import { useEffect, useRef } from 'react'
import installationImg from '../assets/images/installation.jpg'

const values = [
  { icon: 'fa-solid fa-shield-halved', label: 'Trust' },
  { icon: 'fa-solid fa-award', label: 'Experience' },
  { icon: 'fa-solid fa-bolt', label: 'Energy Efficiency' },
]

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('opacity-100', 'translate-y-0') },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 bg-[#f8f9fa]">
      <div
        ref={ref}
        className="w-[90%] max-w-7xl mx-auto flex flex-wrap gap-10 items-center justify-between opacity-0 translate-y-8 transition-all duration-700"
      >
        {/* Text */}
        <div className="flex-1 min-w-[300px]">
          <span className="inline-block mb-4 text-xs font-semibold tracking-[3px] uppercase" style={{ color: '#ffd700' }}>
            Who We Are
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-gradient">
            About Us
          </h2>
          <p className="text-[#444] text-lg leading-relaxed mb-6">
            <strong className="text-primary font-semibold" style={{ color: '#14213d' }}>POWER WAVE ELECTRICAL AND SOLAR SERVICES</strong> is built on{' '}
            <span className="font-semibold" style={{ color: '#ffd700' }}>reliability</span>,{' '}
            <span className="font-semibold" style={{ color: '#ffd700' }}>innovation</span>,{' '}
            <span className="font-semibold" style={{ color: '#ffd700' }}>safety</span>, and{' '}
            <span className="font-semibold" style={{ color: '#ffd700' }}>quality service</span>. We deliver trusted electrical and solar solutions for homes and businesses in Uganda, ensuring every project meets the highest standards.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6 mb-8">
            {[
              { num: '500+', label: 'Projects Completed' },
              { num: '5+', label: 'Years Experience' },
              { num: '100%', label: 'Client Satisfaction' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#14213d' }}>{s.num}</div>
                <div className="text-sm text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="flex flex-wrap gap-4 mt-2">
            {values.map(v => (
              <div
                key={v.label}
                className="flex flex-col items-center gap-2 px-5 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <i className={`${v.icon} text-2xl`} style={{ color: '#ffd700' }} />
                <span className="text-sm font-semibold text-gray-700">{v.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 min-w-[280px] flex justify-center">
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #ffd700 0%, #ffc700 100%)', opacity: 0.15 }}
            />
            <img
              src={installationImg}
              alt="Solar installation and electrical tools in Uganda"
              className="relative z-10 w-full max-w-sm rounded-2xl object-cover shadow-2xl"
              style={{ maxHeight: '400px' }}
            />
            {/* Badge */}
            <div
              className="absolute -bottom-5 -right-5 z-20 flex flex-col items-center justify-center w-28 h-28 rounded-full text-primary font-bold shadow-xl border-4 border-white"
              style={{ background: 'linear-gradient(135deg, #ffd700, #ffc700)', color: '#14213d' }}
            >
              <span className="text-2xl font-extrabold leading-none">5+</span>
              <span className="text-xs text-center leading-tight mt-0.5">Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
