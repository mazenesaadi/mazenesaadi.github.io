/* global Typed */

const typeTarget = document.querySelector(".auto-type");

if (typeTarget && window.Typed) {
  new Typed(".auto-type", {
    strings: [
      "Cybersecurity Graduate Student.",
      "Cybersecurity Professional.",
      "Computer Scientist.",
      "IT Professional.",
      "Security-Minded Technologist.",
      "Technical Problem Solver.",
      "Secure Systems Builder.",
      "Python Developer.",
      "Systems Thinker.",
      "Endpoint Security Practitioner.",
      "Security+ Certified Professional.",
      "Continuous Learner."
    ],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1500,
    loop: true
  });
} else if (typeTarget) {
  typeTarget.textContent = "Cybersecurity Graduate Student.";
}

const navbar = document.getElementById("navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

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

document.querySelectorAll(".fade-in").forEach((element) => observer.observe(element));
