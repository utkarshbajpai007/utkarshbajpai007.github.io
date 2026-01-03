// Reveal animation
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

reveals.forEach(r => observer.observe(r));

// Dark mode
document.getElementById("themeToggle").onclick = () =>
  document.body.classList.toggle("dark");

// Mobile sidebar
document.getElementById("mobileToggle").onclick = () =>
  document.getElementById("sidebar").classList.toggle("open");

// Portfolio modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");

document.querySelectorAll(".portfolio-item").forEach(item => {
  item.onclick = () => {
    modalTitle.textContent = item.dataset.title;
    modal.style.display = "block";
  };
});

document.querySelector(".close").onclick = () =>
  modal.style.display = "none";

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
