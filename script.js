// Smooth scroll effect for navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 3D Card Flip on hover (for touch devices)
const card3d = document.querySelector('.card-3d');
if (card3d) {
  card3d.addEventListener('click', function () {
    this.querySelector('.card-inner').classList.toggle('flipped');
  });
}

// 3D Tilt Card Effect
const tiltCard = document.getElementById('tiltCard');
if (tiltCard) {
  tiltCard.addEventListener('mousemove', (e) => {
    const rect = tiltCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;
    tiltCard.querySelector('.tilt-card-inner').style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });
  tiltCard.addEventListener('mouseleave', () => {
    tiltCard.querySelector('.tilt-card-inner').style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

// Animate sections on scroll (intersection observer)
const animatedEls = document.querySelectorAll('.animate-fadein, .animate-slideup, .animate-pop');
const observer = new window.IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.1 });
animatedEls.forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});
