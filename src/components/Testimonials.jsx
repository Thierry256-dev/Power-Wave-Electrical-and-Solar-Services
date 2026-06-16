import { useRef, useEffect } from 'react'

const testimonials = [
  {
    stars: 5,
    text: '"Power Wave provided excellent service for our office electrical installation. Professional, timely, and very affordable. Highly recommended!"',
    author: 'Margaret Ssewava',
    location: 'Kampala',
    initials: 'MS',
  },
  {
    stars: 5,
    text: '"Our solar installation was flawless. The team was knowledgeable and explained everything clearly. Our electricity bills have reduced significantly."',
    author: 'John Mukisa',
    location: 'Wakiso',
    initials: 'JM',
  },
  {
    stars: 5,
    text: '"Excellent products and outstanding customer support. Power Wave is my go-to for all electrical and solar needs. They really care about their customers."',
    author: 'Ruth Namwase',
    location: 'Fort Portal',
    initials: 'RN',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('opacity-100', 'translate-y-0') },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="py-24 bg-[#f8f9fa]">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div
          ref={ref}
          className="opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="text-center mb-14">
            <span className="inline-block mb-3 text-xs font-semibold tracking-[3px] uppercase" style={{ color: '#ffd700' }}>
              Client Reviews
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">What Our Clients Say</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Trusted by hundreds of satisfied customers across Uganda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <i key={s} className="fas fa-star text-yellow-400 text-sm" />
                  ))}
                </div>

                {/* Quote Icon */}
                <i className="fa-solid fa-quote-left text-3xl opacity-20" style={{ color: '#14213d' }} />

                {/* Text */}
                <p className="text-gray-600 text-[0.95rem] leading-relaxed italic flex-1">{t.text}</p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-2 pt-4 border-t border-gray-100">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #14213d, #0f1a2c)', color: '#ffd700' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#14213d' }}>{t.author}</div>
                    <div className="text-xs text-gray-400">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
