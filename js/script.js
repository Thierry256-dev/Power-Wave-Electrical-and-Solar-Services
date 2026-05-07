// Initialize smooth scroll for page load
document.addEventListener("DOMContentLoaded", function () {
  // Add initial fade-in to hero content
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(20px)";
    setTimeout(() => {
      heroContent.style.transition = "all 1s ease-out";
      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateY(0)";
    }, 100);
  }
});

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
  { threshold: 0.2 },
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

// Contact form enhanced validation and feedback
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form fields
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#phone");
    const messageInput = document.querySelector("#message");

    // Basic validation
    if (
      !nameInput.value.trim() ||
      !emailInput.value.trim() ||
      !phoneInput.value.trim() ||
      !messageInput.value.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Show success message
    const submitBtn = contactForm.querySelector("button[type='submit']");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Message Sent ✓";
    submitBtn.style.background =
      "linear-gradient(135deg, #10b981 0%, #059669 100%)";

    // Reset form
    contactForm.reset();

    // Reset button after 3 seconds
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = "";
      alert("Thank you for contacting us! We will get back to you soon.");
    }, 3000);
  });
}

// Hamburger menu toggle (with aria-expanded updates)
const hamburger = document.querySelector(".nav-hamburger");
const navLinksMenu = document.querySelector(".nav-links");
const navClose = document.querySelector(".nav-close");
const navOverlay = document.querySelector(".nav-overlay");

function closeMenu() {
  if (navLinksMenu && hamburger) {
    navLinksMenu.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
}

function openMenu() {
  if (navLinksMenu && hamburger) {
    navLinksMenu.classList.add("open");
    hamburger.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
}

if (hamburger && navLinksMenu) {
  function toggleMenu(open) {
    const isOpen =
      open === undefined ? !navLinksMenu.classList.contains("open") : open;

    if (isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  hamburger.addEventListener("click", () => toggleMenu());
  hamburger.addEventListener("keypress", (e) => {
    if (e.key === "Enter") toggleMenu();
  });

  // Close menu when a link is clicked
  navLinksMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Close button functionality
  if (navClose) {
    navClose.addEventListener("click", closeMenu);
    navClose.addEventListener("keypress", (e) => {
      if (e.key === "Enter") closeMenu();
    });
  }

  // Close menu when clicking on overlay
  if (navOverlay) {
    navOverlay.addEventListener("click", closeMenu);
  }

  // Close menu when clicking outside (on the rest of the page)
  document.addEventListener("click", (e) => {
    if (navLinksMenu.classList.contains("open")) {
      if (!navLinksMenu.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
      }
    }
  });

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinksMenu.classList.contains("open")) {
      closeMenu();
    }
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
  { threshold: 0.2 },
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
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return "Hello! How can I assist you today?";
  }
  return "I am here to help with any questions about our products, services, or contact info!";
}
