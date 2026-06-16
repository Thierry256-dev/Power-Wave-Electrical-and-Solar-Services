import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'

export default function Products() {
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
    <section id="products" className="py-24" style={{ background: '#ffffff' }}>
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-14 opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="inline-block mb-3 text-xs font-semibold tracking-[3px] uppercase" style={{ color: '#ffd700' }}>
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            Products & Services
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From electrical essentials to complete solar systems — everything your home or business needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={product.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={product.cardImage}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(20,33,61,0.6) 0%, transparent 60%)' }}
                />
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#14213d' }}>{product.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{product.shortDesc}</p>

                <Link
                  to={`/products/${product.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 group/btn"
                  style={{
                    background: 'linear-gradient(135deg, #14213d, #0f1a2c)',
                    color: '#ffd700',
                    boxShadow: '0 4px 12px rgba(20,33,61,0.15)',
                  }}
                >
                  Learn More
                  <i className="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
