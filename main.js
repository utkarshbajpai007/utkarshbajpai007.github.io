// Typing Effect
const text = ["Data Analyst", "Power BI Developer", "SQL Specialist"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
    current = text[i];
    if (isDeleting) {
        document.querySelector(".typing").textContent =
            current.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    } else {
        document.querySelector(".typing").textContent =
            current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
        }
    }
    setTimeout(type, 100);
}
type();

// Dark Mode Toggle
document.getElementById("toggleMode").onclick = function(){
    document.body.classList.toggle("dark-mode");
};

// AOS
AOS.init();

// Particles Config
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 4 }
  }
});
