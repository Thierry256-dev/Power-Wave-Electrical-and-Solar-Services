import { useState, useRef, useEffect } from 'react'
import solarInstallImg from '../assets/images/solar installation.jpg'
import electricalInstallImg from '../assets/images/electrical installation.jpg'
import cameraControlImg from '../assets/images/camera contral.jpg'
import chandelorsImg from '../assets/images/chandelors.jpg'

const galleryImages = [
  { src: solarInstallImg, alt: 'Solar panel installation in Uganda' },
  { src: electricalInstallImg, alt: 'Electrical wiring installation' },
  { src: cameraControlImg, alt: 'Security camera control room' },
  { src: chandelorsImg, alt: 'Chandelier lighting installation' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('opacity-100', 'translate-y-0') },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="gallery" className="py-24 bg-[#f8f9fa]">
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-14 opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="inline-block mb-3 text-xs font-semibold tracking-[3px] uppercase" style={{ color: '#ffd700' }}>
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">Gallery</h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            A glimpse of our installations and completed projects across Uganda.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(20,33,61,0.7)' }}>
                <div className="flex flex-col items-center gap-2 text-white">
                  <i className="fa-solid fa-magnifying-glass-plus text-2xl" style={{ color: '#ffd700' }} />
                  <span className="text-xs font-medium text-center px-3">{img.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-8 text-yellow-400 text-4xl bg-transparent border-none cursor-pointer hover:text-white transition-colors duration-300"
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-[90vw] max-h-[85vh] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
