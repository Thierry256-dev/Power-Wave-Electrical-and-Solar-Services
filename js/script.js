// Smooth scroll for nav links
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Sticky nav shadow on scroll
const navbar = document.querySelector(".navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  });
}

// Fade-in animation on scroll (with .visible class)
const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);
fadeEls.forEach((el) => observer.observe(el));

// Lightbox for gallery
const galleryImgs = document.querySelectorAll(".gallery-img");
galleryImgs.forEach((img) => {
  // Ensure lazy loading is applied if not present
  if (!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `<img src='${img.src}' alt='${img.alt}'><span style='position:absolute;top:24px;right:32px;font-size:2rem;color:#FFD700;cursor:pointer;' role='button' aria-label='Close'>&times;</span>`;
    document.body.appendChild(lightbox);
    const closeBtn = lightbox.querySelector("span");
    if (closeBtn) closeBtn.onclick = () => document.body.removeChild(lightbox);
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

// Hamburger menu toggle (with aria-expanded updates)
const hamburger = document.querySelector(".nav-hamburger");
const navLinksMenu = document.querySelector(".nav-links");
if (hamburger && navLinksMenu) {
  function toggleMenu(open) {
    navLinksMenu.classList.toggle(
      "open",
      open === undefined ? !navLinksMenu.classList.contains("open") : open
    );
    const isOpen = navLinksMenu.classList.contains("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  }
  hamburger.addEventListener("click", () => toggleMenu());
  hamburger.addEventListener("keypress", (e) => {
    if (e.key === "Enter") toggleMenu();
  });
  navLinksMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinksMenu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

// Scroll-triggered fade/slide-in animations
const animatedEls = document.querySelectorAll(".fade-in, .slide-in");
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);
animatedEls.forEach((el) => observer2.observe(el));

// Back-to-top button logic
const backToTopBtn = document.querySelector(".back-to-top");
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Theme switcher logic
const themeBtn = document.querySelector(".theme-switcher");
const bodyEl = document.body;
let theme = localStorage.getItem("theme") || "default";
function applyTheme(t) {
  bodyEl.classList.remove("light-theme", "dark-theme");
  if (t === "light") bodyEl.classList.add("light-theme");
  else if (t === "dark") bodyEl.classList.add("dark-theme");
}
applyTheme(theme);
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    if (bodyEl.classList.contains("light-theme")) {
      theme = "dark";
    } else if (bodyEl.classList.contains("dark-theme")) {
      theme = "default";
    } else {
      theme = "light";
    }
    localStorage.setItem("theme", theme);
    applyTheme(theme);
    themeBtn.innerHTML = bodyEl.classList.contains("dark-theme")
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
  });
  themeBtn.innerHTML = bodyEl.classList.contains("dark-theme")
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
}

// FAQ accordion logic
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("open");
    faqItems.forEach((other) => {
      if (other !== item) other.classList.remove("open");
    });
  });
});

// AI Assistant Chat Widget Logic
const aiWidget = document.querySelector(".ai-chat-widget");
const aiBtn = document.querySelector(".ai-chat-btn");
const aiWindow = document.querySelector(".ai-chat-window");
const aiClose = document.querySelector(".ai-chat-close");
const aiForm = document.querySelector(".ai-chat-form");
const aiInput = document.querySelector(".ai-chat-input");
const aiMessages = document.querySelector(".ai-chat-messages");
aiBtn.addEventListener("click", () => {
  aiWidget.classList.toggle("open");
  aiInput.focus();
});
aiClose.addEventListener("click", () => {
  aiWidget.classList.remove("open");
});
aiForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const userMsg = aiInput.value.trim();
  if (!userMsg) return;
  addMessage("user", userMsg);
  aiInput.value = "";
  setTimeout(() => {
    addMessage("ai", getAIResponse(userMsg));
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }, 700);
});
function addMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = "ai-chat-message " + sender;
  msgDiv.textContent = text;
  aiMessages.appendChild(msgDiv);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}
function getAIResponse(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("product") || msg.includes("offer")) {
    return "We offer electrical cables, sockets, switches, LED lights, security cameras, solar panels, batteries, inverters, and more.";
  }
  if (msg.includes("install") || msg.includes("service")) {
    return "Yes, we provide professional installation and maintenance for all our electrical and solar products.";
  }
  if (
    msg.includes("contact") ||
    msg.includes("phone") ||
    msg.includes("email")
  ) {
    return "You can reach us at powerplus520@gmail.com or call 0706022710 / 0778488424.";
  }
  if (msg.includes("location") || msg.includes("address")) {
    return "We are located in Bweyogerere, Uganda.";
  }
  if (msg.includes("quote") || msg.includes("consult")) {
    return "Please use our contact form or WhatsApp to request a free quote or consultation.";
  }
  if (msg.includes("solar") || msg.includes("energy")) {
    return "We provide solar panels, batteries, inverters, and energy-efficient solutions for homes and businesses.";
  }
  if (msg.includes("security")) {
    return "We offer security cameras, surveillance systems, and security fences for your safety.";
  }
  if (msg.includes("price") || msg.includes("cost")) {
    return "We offer competitive pricing on all our products and services. Please contact us for a detailed quote.";
  }
  return "I am here to help with any questions about our products, services, or contact info!";
}
