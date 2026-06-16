import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { products } from '../data/products'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function ProductPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!product) navigate('/', { replace: true })
  }, [slug, product, navigate])

  if (!product) return null

  return (
    <div className="font-poppins" style={{ background: '#f8f9fa' }}>
      <Navbar />

      <main className="w-[90%] max-w-6xl mx-auto py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-sm text-gray-500">
          <Link to="/" className="hover:text-yellow-500 transition-colors font-medium" style={{ color: '#14213d' }}>
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link
            to="/#products"
            onClick={e => { e.preventDefault(); navigate('/'); setTimeout(() => { document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }) }, 100) }}
            className="hover:text-yellow-500 transition-colors font-medium"
            style={{ color: '#14213d' }}
          >
            Products
          </Link>
          <span className="text-gray-400">/</span>
          <span className="font-semibold" style={{ color: '#ffd700' }}>{product.title}</span>
        </nav>

        {/* Detail Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#14213d' }}>{product.title}</h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl">{product.lead}</p>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 p-4 bg-gray-50 rounded-2xl">
            {product.gallery.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-sm group">
                <img
                  src={img}
                  alt={`${product.title} ${i + 1}`}
                  loading="lazy"
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Systems */}
          <h2 className="text-2xl font-bold mb-5" style={{ color: '#14213d' }}>{product.systemsTitle}</h2>
          <ul className="flex flex-col gap-3 mb-10">
            {product.systems.map((s, i) => (
              <li
                key={i}
                className="p-4 rounded-xl text-gray-600 text-sm leading-relaxed border-l-4 bg-gray-50 hover:bg-yellow-50 hover:translate-x-2 transition-all duration-300 shadow-sm"
                style={{ borderColor: '#ffd700' }}
              >
                <strong style={{ color: '#14213d' }}>{s.name}:</strong> {s.desc}
              </li>
            ))}
          </ul>

          {/* Why */}
          <h3 className="text-xl font-bold mb-3" style={{ color: '#14213d' }}>{product.whyTitle}</h3>
          <p className="text-gray-500 text-base leading-relaxed mb-10">{product.whyText}</p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {product.features.map((f, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border-t-4 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                style={{ borderColor: '#ffd700' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <i className={`${f.icon} text-xl`} style={{ color: '#ffd700' }} />
                  <h4 className="font-bold text-[0.95rem]" style={{ color: '#14213d' }}>{f.title}</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div
            className="rounded-2xl p-8 md:p-10 text-center"
            style={{ background: 'linear-gradient(135deg, #14213d 0%, #0f1a2c 100%)' }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">{product.ctaTitle}</h3>
            <p className="text-white/80 text-base mb-6 max-w-lg mx-auto">{product.ctaText}</p>
            <Link
              to="/#contact"
              onClick={e => { e.preventDefault(); navigate('/'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }, 100) }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #ffd700, #ffc700)',
                color: '#14213d',
                boxShadow: '0 4px 16px rgba(255,215,0,0.3)',
              }}
            >
              <i className="fa-solid fa-envelope" />
              {product.ctaBtn}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
