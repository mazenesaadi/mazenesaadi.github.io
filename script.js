/* global Typed */

// Typed.js — role cycling in hero
var typed = new Typed(".auto-type", {
  strings: [
    "Cybersecurity Analyst.",
    "Problem Solver.",
    "Security+ Certified.",
    "Threat Hunter.",
    "Developer.",
    "Lifelong Learner.",
    "Tech Enthusiast.",
  ],
  typeSpeed: 75,
  backSpeed: 55,
  backDelay: 1500,
  loop: true,
});

// Navbar darkens after scrolling past hero
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll-triggered fade-in for sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
