// Smooth scroll for nav links
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Sticky nav shadow on scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

// Fade-in animation on scroll
const fadeEls = document.querySelectorAll(
  ".about-section, .products-section, .gallery-section, .contact-section"
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.2 }
);
fadeEls.forEach((el) => observer.observe(el));

// Lightbox for gallery
const galleryImgs = document.querySelectorAll(".gallery-img");
galleryImgs.forEach((img) => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `<img src='${img.src}' alt='${img.alt}'><span style='position:absolute;top:24px;right:32px;font-size:2rem;color:#FFD700;cursor:pointer;'>&times;</span>`;
    document.body.appendChild(lightbox);
    lightbox.querySelector("span").onclick = () =>
      document.body.removeChild(lightbox);
    lightbox.onclick = (e) => {
      if (e.target === lightbox) document.body.removeChild(lightbox);
    };
  });
});

// Contact form basic validation
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    contactForm.reset();
  });
}
