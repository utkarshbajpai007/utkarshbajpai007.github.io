// Typing Effect
const text = ["Data Analyst", "Power BI Developer", "SQL Expert"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
    current = text[i];
    if (isDeleting) {
        document.querySelector(".typing").textContent =
            current.substring(0, j--);
        if (j == 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    } else {
        document.querySelector(".typing").textContent =
            current.substring(0, j++);
        if (j == current.length) {
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

// AOS Init
AOS.init();
