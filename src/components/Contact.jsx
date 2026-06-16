import { useState, useRef, useEffect } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [sending, setSending] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('opacity-100', 'translate-y-0') },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(form.email)) {
      setStatus('error')
      return
    }
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setStatus(null), 5000)
    }, 1500)
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm font-medium focus:outline-none focus:ring-2 transition-all duration-300 placeholder:text-gray-400"

  return (
    <section id="contact" className="py-24" style={{ background: '#ffffff' }}>
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-14 opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="inline-block mb-3 text-xs font-semibold tracking-[3px] uppercase" style={{ color: '#ffd700' }}>
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">Contact Us</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We're here to <span className="font-semibold" style={{ color: '#ffd700' }}>power</span> your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#14213d' }}>Send Us a Message</h3>

            {status === 'success' && (
              <div className="mb-5 flex items-center gap-3 p-4 rounded-xl text-sm font-medium" style={{ background: '#d1fae5', color: '#065f46' }}>
                <i className="fa-solid fa-circle-check text-lg" />
                Thank you! We'll get back to you shortly.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-5 flex items-center gap-3 p-4 rounded-xl text-sm font-medium" style={{ background: '#fee2e2', color: '#991b1b' }}>
                <i className="fa-solid fa-circle-exclamation text-lg" />
                Please enter a valid email address.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">Full Name</label>
                <input
                  type="text" name="name" required value={form.name} onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass}
                  style={{ '--tw-ring-color': '#ffd700' }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">Email Address</label>
                <input
                  type="email" name="email" required value={form.email} onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">Phone Number</label>
                <input
                  type="tel" name="phone" required value={form.phone} onChange={handleChange}
                  placeholder="e.g. 0706022710"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">Message</label>
                <textarea
                  name="message" required rows={4} value={form.message} onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className={inputClass + ' resize-none'}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-2 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70"
                style={{
                  background: sending ? '#ccc' : 'linear-gradient(135deg, #ffd700 0%, #ffc700 100%)',
                  color: '#14213d',
                  boxShadow: '0 4px 16px rgba(255,215,0,0.3)',
                }}
              >
                {sending ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fa-solid fa-circle-notch animate-spin" /> Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fa-solid fa-paper-plane" /> Send Message
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {/* Info Cards */}
            {[
              {
                icon: 'fa-solid fa-envelope',
                label: 'Email Us',
                value: 'powerplus520@gmail.com',
                href: 'mailto:powerplus520@gmail.com',
              },
              {
                icon: 'fa-solid fa-phone',
                label: 'Call Us',
                value: '0706022710 / 0778488424',
                href: 'tel:0706022710',
              },
              {
                icon: 'fa-brands fa-whatsapp',
                label: 'WhatsApp',
                value: 'Chat on WhatsApp',
                href: 'https://wa.me/256706022710',
                external: true,
              },
              {
                icon: 'fa-solid fa-location-dot',
                label: 'Location',
                value: 'Bweyogerere, Uganda',
                href: 'https://maps.google.com/?q=Bweyogerere,Uganda',
                external: true,
              },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group no-underline"
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, #14213d, #0f1a2c)', color: '#ffd700' }}
                >
                  <i className={item.icon} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</div>
                  <div className="text-base font-semibold" style={{ color: '#14213d' }}>{item.value}</div>
                </div>
                <i className="fa-solid fa-chevron-right ml-auto text-gray-300 group-hover:text-yellow-400 transition-colors duration-300 text-sm" />
              </a>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100" style={{ height: '200px' }}>
              <iframe
                src="https://www.google.com/maps?q=Bweyogerere,+Uganda&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Power Wave Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
