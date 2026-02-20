// =============================
//      ELITE PREMIUM JS
// =============================

// Navbar shrink on scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll reveal animation
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));

// Smooth button ripple effect
document.querySelectorAll("button, .btn").forEach(button => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255,255,255,0.5)";
    ripple.style.left = e.clientX - rect.left - size / 2 + "px";
    ripple.style.top = e.clientY - rect.top - size / 2 + "px";
    ripple.style.pointerEvents = "none";
    ripple.style.animation = "ripple 0.6s linear";

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Ripple animation style injection
const style = document.createElement("style");
style.innerHTML = `
@keyframes ripple {
  from { transform: scale(0); opacity: 1; }
  to { transform: scale(2); opacity: 0; }
}`;
document.head.appendChild(style);
