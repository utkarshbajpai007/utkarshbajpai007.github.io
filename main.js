/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
},{threshold:0.15});

reveals.forEach(r => observer.observe(r));

/* Dark Mode */
document.querySelector(".dark-toggle").onclick = () =>
  document.body.classList.toggle("dark");

/* Mobile Sidebar */
const menuBtn = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuBtn.onclick = () => sidebar.classList.toggle("open");

/* Portfolio Modal */
const modal = document.getElementById("portfolioModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".portfolio img").forEach(img => {
  img.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  };
});

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = e => e.target === modal && (modal.style.display = "none");
