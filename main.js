const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".modal-open").forEach(card => {
  card.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = card.dataset.img;
  };
});

closeBtn.onclick = () => modal.style.display = "none";
