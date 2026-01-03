// DARK MODE
document.getElementById("themeToggle").onclick = () =>
  document.body.classList.toggle("dark");

// SCROLL SPY
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top = window.scrollY;
    if (top >= section.offsetTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

// REVEAL ANIMATION
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add("active"));
});
reveals.forEach(r => observer.observe(r));

// PORTFOLIO MODAL
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
document.querySelectorAll(".portfolio-item").forEach(item => {
  item.onclick = () => {
    modal.style.display = "block";
    modalTitle.innerText = item.dataset.title;
  };
});
document.getElementById("closeModal").onclick = () =>
  modal.style.display = "none";
