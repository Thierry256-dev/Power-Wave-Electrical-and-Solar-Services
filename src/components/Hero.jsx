import { Link } from "react-router-dom";
import bgImg from "../assets/images/bgimage.webp";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(20,33,61,0.82) 0%, rgba(20,33,61,0.55) 55%, rgba(255,215,0,0.06) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white w-[90%] max-w-3xl mx-auto hero-fade-up px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-medium border border-yellow-400/40 bg-yellow-400/10 text-yellow-300">
          <i className="fa-solid fa-bolt text-yellow-400" />
          Uganda's Trusted Power Solutions Partner
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tight"
          style={{ textShadow: "0 4px 20px rgba(20,33,61,0.4)" }}
        >
          Powering Homes, <span style={{ color: "#ffd700" }}>Businesses,</span>{" "}
          and the Future.
        </h1>

        <p
          className="text-lg sm:text-xl mb-8 font-light opacity-90"
          style={{ textShadow: "0 2px 8px rgba(20,33,61,0.3)" }}
        >
          Your trusted partner in electrical and solar energy solutions in
          Bweyogerere, Uganda.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <button
            onClick={() => scrollTo("products")}
            className="px-8 py-3.5 rounded-full font-bold text-[0.95rem] transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, #ffd700 0%, #ffc700 100%)",
              color: "#14213d",
              boxShadow: "0 4px 16px rgba(255,215,0,0.35)",
            }}
          >
            <i className="fa-solid fa-solar-panel mr-2" />
            Explore Products
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3.5 rounded-full font-semibold text-[0.95rem] border-2 border-white/80 text-white bg-transparent transition-all duration-300 hover:bg-white hover:text-primary hover:-translate-y-1"
            style={{ "--tw-text-opacity": 1 }}
          >
            <i className="fa-solid fa-envelope mr-2" />
            Get a Quote
          </button>
        </div>

        {/* ─── Quick Contact Bar ─── */}
        <div
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 mt-2 p-4 rounded-2xl border border-yellow-400/25 backdrop-blur-sm"
          style={{ background: "rgba(20,33,61,0.55)" }}
        >
          {/* Phone */}
          <a
            href="tel:0706022710"
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-300 group"
          >
            <span
              className="flex items-center justify-center w-8 h-8 rounded-full text-primary text-xs flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              style={{ background: "#ffd700" }}
            >
              <i className="fa-solid fa-phone" />
            </span>
            <span className="hidden sm:inline">0706022710 / 0778488424</span>
            <span className="sm:hidden">Call Us</span>
          </a>

          <span className="hidden sm:block w-px h-5 bg-white/20" />

          {/* Email */}
          <a
            href="mailto:powerplus520@gmail.com"
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-300 group"
          >
            <span
              className="flex items-center justify-center w-8 h-8 rounded-full text-primary text-xs flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              style={{ background: "#ffd700" }}
            >
              <i className="fa-solid fa-envelope" />
            </span>
            <span className="hidden sm:inline">powerplus520@gmail.com</span>
            <span className="sm:hidden">Email Us</span>
          </a>

          <span className="hidden sm:block w-px h-5 bg-white/20" />

          {/* WhatsApp */}
          <a
            href="https://wa.me/256706022710"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-300 group"
          >
            <span
              className="flex items-center justify-center w-8 h-8 rounded-full text-white text-xs flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              style={{ background: "#25D366" }}
            >
              <i className="fa-brands fa-whatsapp" />
            </span>
            <span className="hidden sm:inline">WhatsApp Us</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          <span className="hidden sm:block w-px h-5 bg-white/20" />

          {/* Location */}
          <span className="flex items-center gap-2 text-sm font-medium text-white/80">
            <span
              className="flex items-center justify-center w-8 h-8 rounded-full text-primary text-xs flex-shrink-0"
              style={{ background: "#ffd700" }}
            >
              <i className="fa-solid fa-location-dot" />
            </span>
            <span className="hidden sm:inline">Bweyogerere, Uganda</span>
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <i className="fa-solid fa-chevron-down text-yellow-400 text-sm" />
      </div>
    </section>
  );
}
