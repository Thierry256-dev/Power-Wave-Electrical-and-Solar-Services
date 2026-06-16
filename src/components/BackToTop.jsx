import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-lg border-none cursor-pointer transition-all duration-400 hover:scale-110 hover:-translate-y-1 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{
        background: 'linear-gradient(135deg, #ffd700 0%, #ffc700 100%)',
        color: '#14213d',
        boxShadow: '0 4px 16px rgba(255,215,0,0.35)',
      }}
    >
      <i className="fa-solid fa-arrow-up text-sm" />
    </button>
  )
}
