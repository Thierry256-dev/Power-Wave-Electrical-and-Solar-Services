import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import AIChatWidget from '../components/AIChatWidget'

export default function HomePage() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Contact />
      <Testimonials />
      <FAQ />
      <Footer />
      <BackToTop />
      <AIChatWidget />
    </div>
  )
}
