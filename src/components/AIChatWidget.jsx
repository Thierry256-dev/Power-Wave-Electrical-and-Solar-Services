import { useState, useRef, useEffect } from 'react'

function getAIResponse(msg) {
  const m = msg.toLowerCase()
  if (m.includes('product') || m.includes('offer') || m.includes('sell'))
    return 'We offer electrical cables, sockets, switches, LED lights, security cameras, solar panels, batteries, inverters, and more. Visit our Products section for details!'
  if (m.includes('install') || m.includes('service'))
    return 'Yes! We provide professional installation and maintenance for all our electrical and solar products across Uganda.'
  if (m.includes('contact') || m.includes('phone') || m.includes('email'))
    return 'Reach us at powerplus520@gmail.com or call 0706022710 / 0778488424. You can also WhatsApp us at +256706022710!'
  if (m.includes('location') || m.includes('address') || m.includes('where'))
    return 'We are located in Bweyogerere, Uganda. Contact us to schedule a site visit!'
  if (m.includes('quote') || m.includes('consult') || m.includes('price') || m.includes('cost'))
    return 'We offer free consultations and competitive quotes! Use our Contact form or WhatsApp us directly for a fast response.'
  if (m.includes('solar') || m.includes('energy') || m.includes('panel'))
    return 'We provide solar panels, batteries, inverters, and complete off-grid/hybrid systems for homes and businesses. Go green with Power Wave!'
  if (m.includes('security') || m.includes('camera') || m.includes('cctv') || m.includes('fence'))
    return 'We offer HD security cameras, DVR systems, electric security fences, and complete surveillance solutions for your peace of mind.'
  if (m.includes('light') || m.includes('led') || m.includes('chandelier') || m.includes('flood'))
    return 'We have a full range of LED lights, floodlights, chandeliers, and energy-saving lighting solutions for any space.'
  if (m.includes('surge') || m.includes('protect') || m.includes('lightning'))
    return 'We supply surge protectors, lightning arrestors, copper earth tape, and complete earthing systems to keep your equipment safe.'
  if (m.includes('hello') || m.includes('hi') || m.includes('hey') || m.includes('good'))
    return 'Hello! Welcome to Power Wave. How can I help you today? Ask me about our products, services, or how to get a quote!'
  return 'I\'m here to help with questions about our electrical and solar products, services, pricing, or location. What would you like to know?'
}

export default function AIChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hi! I\'m the Power Wave Assistant. How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = (e) => {
    e.preventDefault()
    const userMsg = input.trim()
    if (!userMsg) return
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }])
    setInput('')
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'ai', text: getAIResponse(userMsg) }])
    }, 600)
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Window */}
      {open && (
        <div
          className="w-[320px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
          style={{ background: '#101828', maxHeight: '420px' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10" style={{ background: '#14213d' }}>
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                style={{ background: '#ffd700', color: '#14213d' }}
              >
                <i className="fa-solid fa-robot" />
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Power Wave Assistant</div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-[10px]">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/50 hover:text-white transition-colors text-lg border-none bg-transparent cursor-pointer"
              aria-label="Close chat"
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{ minHeight: '220px', maxHeight: '260px' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'rounded-br-sm text-primary font-medium'
                      : 'rounded-bl-sm text-white/90'
                  }`}
                  style={{
                    background: msg.sender === 'user'
                      ? '#ffd700'
                      : 'rgba(255,255,255,0.08)',
                    color: msg.sender === 'user' ? '#14213d' : 'rgba(255,255,255,0.9)',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={send} className="flex gap-2 p-3 border-t border-white/10">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about our services..."
              autoComplete="off"
              className="flex-1 px-3 py-2 rounded-xl text-xs text-white placeholder:text-white/30 border border-white/10 focus:outline-none focus:border-yellow-400/50 transition-colors"
              style={{ background: 'rgba(255,255,255,0.07)' }}
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border-none cursor-pointer transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #ffd700, #ffc700)', color: '#14213d' }}
            >
              <i className="fa-solid fa-paper-plane text-xs" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Chat with AI Assistant"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-none cursor-pointer transition-all duration-300 hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, #14213d, #0f1a2c)',
          color: '#ffd700',
          boxShadow: '0 8px 24px rgba(20,33,61,0.4)',
        }}
      >
        <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-robot'} text-xl transition-all duration-300`} />
      </button>
    </div>
  )
}
