// Reveal animation
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
});
reveals.forEach(r => observer.observe(r));

// Dark mode
document.getElementById('darkToggle').onclick = () => {
  document.body.classList.toggle('dark');
};

// Portfolio modal
const modal = document.getElementById('portfolioModal');
const cards = document.querySelectorAll('.portfolio-card');
const closeBtn = document.querySelector('.close');

cards.forEach(card => {
  card.onclick = () => modal.style.display = 'block';
});

closeBtn.onclick = () => modal.style.display = 'none';

// Carousel
let index = 0;
const images = document.querySelectorAll('.carousel img');

setInterval(() => {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}, 2500);
