// Typing Effect
var typed = new Typed("#typing", {
    strings: ["Data Analyst", "BI Developer", "SQL Specialist", "Power BI Expert"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// Dark / Light Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// AOS Animation Init
AOS.init();
