// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  reveals.forEach(r => {
    const top = r.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) r.classList.add("active");
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Scroll Spy
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (pageYOffset >= sec.offsetTop - 150)
      current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current)
      a.classList.add("active");
  });
});

// Dark Mode
document.getElementById("darkToggle").onclick = () =>
  document.body.classList.toggle("dark");

// Portfolio Modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
document.querySelectorAll(".portfolio-item").forEach(item => {
  item.onclick = () => {
    modalTitle.textContent = item.dataset.title;
    modal.style.display = "block";
  };
});
document.getElementById("closeModal").onclick = () =>
  modal.style.display = "none";
