/* global Typed */

const typeTarget = document.querySelector(".auto-type");

if (typeTarget && window.Typed) {
  new Typed(".auto-type", {
    strings: [
      "a cybersecurity graduate student.",
      "a computer scientist.",
      "an IT professional.",
      "a cybersecurity professional.",
      "a security-minded technologist.",
      "a technical problem solver.",
      "a secure systems builder.",
      "a Python developer.",
      "a backend developer.",
      "a security analyst.",
      "a systems thinker.",
      "a cloud security enthusiast.",
      "a network security enthusiast.",
      "an endpoint security practitioner.",
      "a Security+ certified professional.",
      "a continuous learner."
    ],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1500,
    loop: true
  });
} else if (typeTarget) {
  typeTarget.textContent = "a cybersecurity graduate student.";
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
