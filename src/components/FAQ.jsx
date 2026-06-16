import { useState, useRef, useEffect } from 'react'

const faqs = [
  {
    icon: 'fa-solid fa-bolt',
    q: 'What electrical and solar products do you offer?',
    a: 'We offer a wide range of electrical cables, sockets, switches, LED lights, floodlights, chandeliers, copper tape, surge protectors, security cameras, solar panels, batteries, inverters, and more.',
  },
  {
    icon: 'fa-solid fa-solar-panel',
    q: 'Do you provide installation services?',
    a: 'Yes, our professional team provides installation for all electrical and solar products, ensuring safety and quality for homes and businesses across Uganda.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    q: 'How do you ensure safety and reliability?',
    a: 'We use certified products, follow strict safety standards, and our experienced technicians guarantee reliable and secure installations that comply with national regulations.',
  },
  {
    icon: 'fa-solid fa-phone-volume',
    q: 'How can I get a quote or consultation?',
    a: 'Contact us via phone, email, WhatsApp, or our website form. We respond quickly and provide free consultations and quotes for all project sizes.',
  },
  {
    icon: 'fa-solid fa-leaf',
    q: 'Are your solutions energy efficient and sustainable?',
    a: 'Absolutely! We focus on energy efficiency and sustainability, offering solar solutions and modern LED electrical products that save energy and reduce costs for the long term.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('opacity-100', 'translate-y-0') },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section id="faq" className="py-24" style={{ background: '#ffffff' }}>
      <div className="w-[90%] max-w-3xl mx-auto">
        <div
          ref={ref}
          className="opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="text-center mb-14">
            <span className="inline-block mb-3 text-xs font-semibold tracking-[3px] uppercase" style={{ color: '#ffd700' }}>
              Have Questions?
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
              <i className="fa-solid fa-circle-question mr-3 text-3xl" style={{ color: '#ffd700' }} />
              FAQs
            </h2>
            <p className="text-gray-500 text-lg">Everything you need to know about our services.</p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200 border-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex items-center justify-center w-9 h-9 rounded-lg text-sm flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #14213d, #0f1a2c)', color: '#ffd700' }}
                    >
                      <i className={faq.icon} />
                    </span>
                    <span className="font-semibold text-[0.95rem]" style={{ color: '#14213d' }}>{faq.q}</span>
                  </div>
                  <span
                    className={`flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0 text-xs transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                    style={{ background: openIndex === i ? '#ffd700' : '#f3f4f6', color: openIndex === i ? '#14213d' : '#6b7280' }}
                  >
                    <i className="fa-solid fa-chevron-down" />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-400 ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
